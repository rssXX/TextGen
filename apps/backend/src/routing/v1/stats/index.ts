import { Elysia } from 'elysia'
import { eq, desc, sql } from 'drizzle-orm'

import { authPlugin } from '../../../auth/plugin'
import { db } from '../../../db'
import { generations } from '../../../db/schema'

export const statsRoute = new Elysia({
    prefix: '/stats',
    detail: { tags: ['stats'] },
})
    .use(authPlugin)
    .get(
        '/',
        async ({ user }) => {
            const [{ total }] = await db
                .select({ total: sql<number>`count(*)` })
                .from(generations)
                .where(eq(generations.userId, user.id))

            const byType = await db
                .select({
                    contentType: generations.contentType,
                    count: sql<number>`count(*)`,
                })
                .from(generations)
                .where(eq(generations.userId, user.id))
                .groupBy(generations.contentType)

            const recent = await db
                .select({
                    id: generations.id,
                    topic: generations.topic,
                    contentType: generations.contentType,
                    createdAt: generations.createdAt,
                    length: generations.length,
                })
                .from(generations)
                .where(eq(generations.userId, user.id))
                .orderBy(desc(generations.createdAt))
                .limit(5)

            return {
                total: Number(total),
                byType: byType.map((row) => ({
                    contentType: row.contentType,
                    count: Number(row.count),
                })),
                recent,
            }
        },
        { auth: true }
    )
