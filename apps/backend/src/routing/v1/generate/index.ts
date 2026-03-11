import { Elysia, t, sse } from 'elysia'

import {  } from './service'
import {  } from './model'
import {clientAI} from "../../../utils";

export const generate = new Elysia({
    prefix: '/generate',
    detail: {
        tags: ['generate']
    }
})
    .post(
        '/',
        async function* ({ body }) {
            const stream = await clientAI.chat.completions.create({
                model: 'deepseek-chat',
                stream: true,
                messages: [
                    { role: "system", content: "Ты профессиональный писатель, ты должен будешь генерировать текст на переданные темы. текст должен быть коротким до 20 слов" },
                    { role: "user", content: body.topic },
                ],
                max_tokens: 500
            });

            for await (const event of stream) {
                yield sse({
                    event: event.choices[0].finish_reason === "stop" ? "end" : "message",
                    data: event.choices[0].delta.content
                });
                if (event?.usage){
                    console.info('total_tokens', event.usage.total_tokens)
                }
            }
        }, {
            body: t.Object({
                topic: t.String({
                    description: 'Тема генерации',
                    examples: ['Безопасность в современном интернете', '1с в естественной среде обитания'],
                })
            })
        }
    )