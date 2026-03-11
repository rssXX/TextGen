import {Elysia} from "elysia";
import {cors} from '@elysiajs/cors'
import {openapi} from '@elysiajs/openapi'
import auth from './auth/auth'
import {generateRouteV1} from "./routing/v1";

let _schema: ReturnType<typeof auth.api.generateOpenAPISchema>
const getSchema = async () => (_schema ??= auth.api.generateOpenAPISchema())

export const OpenAPI = {
    getPaths: (prefix = '/auth/api') =>
        getSchema().then(({ paths }) => {
            const reference: typeof paths = Object.create(null)

            for (const path of Object.keys(paths)) {
                const key = prefix + path
                reference[key] = paths[path]

                for (const method of Object.keys(paths[path])) {
                    const operation = (reference[key] as any)[method]

                    operation.tags = ['Better Auth']
                }
            }

            return reference
        }) as Promise<any>,
    components: getSchema().then(({ components }) => components) as Promise<any>
} as const

const createServer = async () => {
    const app = new Elysia()

    app.use(cors({
        origin: ['http://localhost:3000', 'http://localhost:3001'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization']
    }))
    app.mount(auth.handler);
    app.use(openapi({
        documentation: {
            components: await OpenAPI.components,
            paths: await OpenAPI.getPaths()
        }
    }))
    // TODO: поправить потом
    app.group('/api', (app) =>
        app.group('/v1', (app) =>
            app.use(generateRouteV1)
        )
    )

    return app;
}

export default createServer;