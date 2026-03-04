import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth } from "better-auth";
import { openAPI } from "better-auth/plugins";
import { db } from "../db";
import { users, accounts, sessions, verifications } from '../db/schema'

const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: "sqlite",
        schema: {
            user: users,
            account: accounts,
            session: sessions,
            verification: verifications,
        }
    }),
    basePath: '/api',
    plugins: [openAPI()],
});

export default auth;