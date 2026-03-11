import { t } from 'elysia'

const GenerateModel = {
    signInBody: t.Object({
        username: t.String(),
        password: t.String(),
    }),
} as const