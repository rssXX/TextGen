import { Elysia, t, status } from 'elysia'
import { eq, and, desc, like, sql } from 'drizzle-orm'

import { authPlugin } from '../../../auth/plugin'
import { db } from '../../../db'
import { generations } from '../../../db/schema'

const CONTENT_TYPES = ['article', 'news', 'story', 'rewrite'] as const

export const generationsRoute = new Elysia({
    prefix: '/generations',
    detail: { tags: ['generations'] },
})
    .use(authPlugin)
    .get(
        '/',
        async ({ user, query }) => {
            const page = Math.max(1, Number(query.page ?? 1))
            const pageSize = Math.min(100, Math.max(1, Number(query.pageSize ?? 20)))
            const offset = (page - 1) * pageSize

            const conditions = [eq(generations.userId, user.id)]
            if (query.search?.trim()) {
                conditions.push(like(generations.topic, `%${query.search.trim()}%`))
            }
            if (query.type && (CONTENT_TYPES as readonly string[]).includes(query.type)) {
                conditions.push(eq(generations.contentType, query.type as typeof CONTENT_TYPES[number]))
            }

            const where = conditions.length === 1 ? conditions[0] : and(...conditions)

            const items = await db
                .select({
                    id: generations.id,
                    topic: generations.topic,
                    contentType: generations.contentType,
                    tone: generations.tone,
                    length: generations.length,
                    status: generations.status,
                    createdAt: generations.createdAt,
                })
                .from(generations)
                .where(where)
                .orderBy(desc(generations.createdAt))
                .limit(pageSize)
                .offset(offset)

            const [{ count }] = await db
                .select({ count: sql<number>`count(*)` })
                .from(generations)
                .where(where)

            return { items, total: Number(count), page, pageSize }
        },
        {
            auth: true,
            query: t.Object({
                page: t.Optional(t.String()),
                pageSize: t.Optional(t.String()),
                search: t.Optional(t.String()),
                type: t.Optional(t.String()),
            }),
        }
    )
    .get(
        '/:id',
        async ({ user, params }) => {
            const [row] = await db
                .select()
                .from(generations)
                .where(and(eq(generations.id, params.id), eq(generations.userId, user.id)))
                .limit(1)

            if (!row) return status(404, 'Генерация не найдена')
            return row
        },
        { auth: true, params: t.Object({ id: t.String() }) }
    )
    .delete(
        '/:id',
        async ({ user, params }) => {
            const result = await db
                .delete(generations)
                .where(and(eq(generations.id, params.id), eq(generations.userId, user.id)))
                .returning({ id: generations.id })

            if (result.length === 0) return status(404, 'Генерация не найдена')
            return { id: result[0].id }
        },
        { auth: true, params: t.Object({ id: t.String() }) }
    )
