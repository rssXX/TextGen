import { t } from 'elysia'

export const generateBody = t.Object({
    topic: t.Optional(t.String({
        description: 'Тема генерации (для article, news, story)',
    })),
    contentType: t.Union([
        t.Literal('article'),
        t.Literal('news'),
        t.Literal('story'),
        t.Literal('rewrite'),
    ], { description: 'Тип контента' }),
    tone: t.Union([
        t.Literal('formal'),
        t.Literal('neutral'),
        t.Literal('friendly'),
        t.Literal('professional'),
        t.Literal('creative'),
    ], { description: 'Тон текста' }),
    length: t.Integer({
        minimum: 100,
        maximum: 10000,
        description: 'Желаемая длина текста в символах',
    }),
    keywords: t.Optional(t.String({
        description: 'Ключевые слова через запятую',
    })),
    sourceText: t.Optional(t.String({
        description: 'Исходный текст для рерайта',
    })),
})

export type GenerateBody = typeof generateBody.static
