import { createAuthClient } from "better-auth/react"
const authClient =  createAuthClient({
    baseURL: "http://localhost:3000/auth/api"
})

export default authClient