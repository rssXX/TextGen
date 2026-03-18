import { Elysia, status } from 'elysia'
import auth from './auth'

export const authPlugin = new Elysia({ name: 'auth' })
    .macro({
        auth: {
            async resolve({ request }) {
                const session = await auth.api.getSession({ headers: request.headers })
                if (!session) return status(401, 'Не авторизован')
                return { user: session.user }
            }
        }
    })
