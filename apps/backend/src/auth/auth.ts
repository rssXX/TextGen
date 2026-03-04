import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth } from "better-auth";
import { openAPI } from "better-auth/plugins";
import { db } from "../db";

const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: "sqlite",
    }),
    basePath: '/api',
    plugins: [openAPI()],
});

export default auth;