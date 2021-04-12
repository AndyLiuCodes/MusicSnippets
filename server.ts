import { Application, Context } from "https://deno.land/x/oak/mod.ts";

const server = new Application();

server.use((ctx: Context) => {
    ctx.response.body = "Hello World!";
});

await server.listen({ port: 8000 });
