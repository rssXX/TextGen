import {Elysia} from "elysia";

const createServer = () => {
        const app = new Elysia()
            .get("/", () => "Hello Elysia");

        return app;
}

export default createServer;