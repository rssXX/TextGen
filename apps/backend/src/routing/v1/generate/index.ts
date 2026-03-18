import {Elysia, t} from 'elysia'

import {} from './service'
import {} from './model'
import {clientAI} from "../../../utils";
import {authPlugin} from "../../../auth/plugin";

export const generate = new Elysia({
    prefix: '/generate',
    detail: {
        tags: ['generate']
    }
})
    .use(authPlugin)
    .post(
        '/',
        async ({ body, user }) => {
            console.log('user', user)
            const completion = await clientAI.chat.completions.create({
                model: 'deepseek-chat',
                stream: true,
                messages: [
                    {
                        role: "system",
                        content: "Ты профессиональный писатель, ты должен будешь генерировать текст на переданные темы. текст должен быть коротким до 20 слов"
                    },
                    {role: "user", content: body.topic},
                ],
                max_tokens: 500
            });

            const encoder = new TextEncoder();
            const readable = new ReadableStream({
                async start(controller) {
                    for await (const event of completion) {
                        const content = event.choices[0].delta.content;
                        if (content) {
                            controller.enqueue(encoder.encode(`event: message\ndata: ${content}\n\n`));
                        }
                        if (event.choices[0].finish_reason === "stop") {
                            controller.enqueue(encoder.encode(`event: end\ndata: \n\n`));
                        }
                        if (event?.usage) {
                            console.info('total_tokens', event.usage.total_tokens)
                        }
                    }
                    controller.close();
                }
            });

            return new Response(readable, {
                headers: {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive',
                }
            });
        }, {
            auth: true,
            body: t.Object({
                topic: t.String({
                    description: 'Тема генерации',
                    examples: ['Безопасность в современном интернете', '1с в естественной среде обитания'],
                })
            }),
            detail: {
                description: 'Стриминг текста через SSE',
                responses: {
                    200: {
                        description: 'Server-Sent Events stream',
                        content: {
                            'text/event-stream': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        event: { type: 'string', enum: ['message', 'end'] },
                                        data:  { type: 'string' }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    )
