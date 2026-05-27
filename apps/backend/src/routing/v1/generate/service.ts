import type { GenerateBody } from './model'

const CONTENT_TYPE_LABELS: Record<GenerateBody['contentType'], string> = {
    article: 'информационная статья',
    news: 'новостная заметка',
    story: 'короткий рассказ',
    rewrite: 'переработанный текст (рерайт)',
}

const TONE_LABELS: Record<GenerateBody['tone'], string> = {
    formal: 'формальный',
    neutral: 'нейтральный',
    friendly: 'дружелюбный',
    professional: 'профессиональный',
    creative: 'творческий',
}

export const buildSystemPrompt = (body: GenerateBody): string => {
    const type = CONTENT_TYPE_LABELS[body.contentType]
    const tone = TONE_LABELS[body.tone]
    return [
        `Ты профессиональный русскоязычный писатель.`,
        `Тебе нужно создать текст в формате: ${type}.`,
        `Тон текста: ${tone}.`,
        `Целевая длина текста — около ${body.length} символов.`,
        `Используй markdown-разметку: заголовки (#, ##), абзацы, списки где уместно.`,
        `Не добавляй вступлений в стиле «Вот ваш текст:» — сразу выдавай результат.`,
    ].join(' ')
}

export const buildUserPrompt = (body: GenerateBody): string => {
    if (body.contentType === 'rewrite') {
        if (!body.sourceText) throw new Error('sourceText обязателен для рерайта')
        const kw = body.keywords?.trim()
            ? `\n\nКлючевые слова, которые нужно сохранить или органично включить: ${body.keywords}.`
            : ''
        return `Перепиши следующий текст, сохранив смысл, но изменив формулировки и структуру:\n\n${body.sourceText}${kw}`
    }

    if (!body.topic) throw new Error('topic обязателен для этого типа контента')
    const kw = body.keywords?.trim()
        ? `\n\nКлючевые слова, которые нужно органично использовать: ${body.keywords}.`
        : ''
    return `Тема: ${body.topic}${kw}`
}

// Грубая оценка max_tokens по длине в символах.
// Русский текст: примерно 2-3 символа на токен у DeepSeek.
export const estimateMaxTokens = (lengthInChars: number): number => {
    const tokens = Math.ceil(lengthInChars / 2) + 200
    return Math.min(Math.max(tokens, 300), 8000)
}
