import {
  Application,
  Router,
  Status,
} from "https://deno.land/x/oak@v9.0.0/mod.ts";

// Define the routes
const router = new Router();

router.post("/create", async (context) => {
  const body = context.request.body({ type: "json" });

  const { url } = (await body.value) as { url: string };

  try {
    new URL(url);
  } catch {
    context.throw(Status.BadRequest, "Invalid url");
  }

  context.response.body = url;
});

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

if (import.meta.main) {
  await app.listen({ port: 8080 });
}

export { app };
