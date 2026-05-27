import { Elysia, status } from 'elysia'
import { eq, and } from 'drizzle-orm'

import { generateBody } from './model'
import { buildSystemPrompt, buildUserPrompt, estimateMaxTokens } from './service'
import { clientAI } from '../../../utils'
import { authPlugin } from '../../../auth/plugin'
import { db } from '../../../db'
import { generations } from '../../../db/schema'

export const generate = new Elysia({
    prefix: '/generate',
    detail: { tags: ['generate'] },
})
    .use(authPlugin)
    .post(
        '/',
        async ({ body, user, set }) => {
            if (body.contentType === 'rewrite' && !body.sourceText?.trim()) {
                return status(400, 'sourceText обязателен для рерайта')
            }
            if (body.contentType !== 'rewrite' && !body.topic?.trim()) {
                return status(400, 'topic обязателен для этого типа контента')
            }

            const [generation] = await db
                .insert(generations)
                .values({
                    userId: user.id,
                    topic: body.topic ?? body.sourceText?.slice(0, 100) ?? '',
                    contentType: body.contentType,
                    tone: body.tone,
                    length: body.length,
                    keywords: body.keywords ?? null,
                    sourceText: body.sourceText ?? null,
                    content: '',
                    status: 'streaming',
                })
                .returning()

            const systemPrompt = buildSystemPrompt(body)
            const userPrompt = buildUserPrompt(body)
            const maxTokens = estimateMaxTokens(body.length)

            const completion = await clientAI.chat.completions.create({
                model: 'deepseek-chat',
                stream: true,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt },
                ],
                max_tokens: maxTokens,
            })

            const encoder = new TextEncoder()
            let accumulated = ''
            let finalStatus: 'done' | 'error' = 'done'

            const readable = new ReadableStream({
                async start(controller) {
                    controller.enqueue(
                        encoder.encode(`event: meta\ndata: ${JSON.stringify({ id: generation.id })}\n\n`)
                    )

                    try {
                        for await (const event of completion) {
                            const content = event.choices[0]?.delta?.content
                            if (content) {
                                accumulated += content
                                controller.enqueue(encoder.encode(`event: message\ndata: ${JSON.stringify(content)}\n\n`))
                            }
                            if (event.choices[0]?.finish_reason === 'stop') {
                                controller.enqueue(encoder.encode(`event: end\ndata: \n\n`))
                            }
                        }
                    } catch (err) {
                        finalStatus = 'error'
                        console.error('generation streaming error', err)
                        controller.enqueue(encoder.encode(`event: error\ndata: ${JSON.stringify(String(err))}\n\n`))
                    } finally {
                        await db
                            .update(generations)
                            .set({ content: accumulated, status: finalStatus })
                            .where(eq(generations.id, generation.id))
                        controller.close()
                    }
                },
            })

            return new Response(readable, {
                headers: {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive',
                },
            })
        },
        {
            auth: true,
            body: generateBody,
            detail: {
                description: 'Стриминг сгенерированного текста через SSE. Первое событие — meta с id генерации.',
                responses: {
                    200: {
                        description: 'Server-Sent Events stream',
                        content: {
                            'text/event-stream': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        event: { type: 'string', enum: ['meta', 'message', 'end', 'error'] },
                                        data: { type: 'string' },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        }
    )
