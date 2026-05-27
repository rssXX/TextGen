export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'

export class ApiError extends Error {
    constructor(public status: number, message: string) {
        super(message)
    }
}

export const apiFetch = async <T>(
    path: string,
    init: RequestInit = {}
): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...(init.headers ?? {}),
        },
        ...init,
    })

    if (!response.ok) {
        const text = await response.text().catch(() => '')
        throw new ApiError(response.status, text || response.statusText)
    }

    return response.json() as Promise<T>
}

export type ContentType = 'article' | 'news' | 'story' | 'rewrite'
export type Tone = 'formal' | 'neutral' | 'friendly' | 'professional' | 'creative'
export type GenerationStatus = 'streaming' | 'done' | 'error'

export interface GenerationListItem {
    id: string
    topic: string
    contentType: ContentType
    tone: Tone
    length: number
    status: GenerationStatus
    createdAt: string
}

export interface GenerationDetail extends GenerationListItem {
    keywords: string | null
    sourceText: string | null
    content: string
    userId: string
}

export interface GenerationsListResponse {
    items: GenerationListItem[]
    total: number
    page: number
    pageSize: number
}

export interface StatsResponse {
    total: number
    byType: { contentType: ContentType; count: number }[]
    recent: {
        id: string
        topic: string
        contentType: ContentType
        createdAt: string
        length: number
    }[]
}
