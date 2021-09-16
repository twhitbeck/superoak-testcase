import { superoak } from "https://deno.land/x/superoak@4.4.0/mod.ts";

import { app } from "./server.ts";

Deno.test("it should respond with 400 when the url is marlformed", async () => {
  const request = await superoak(app);

  await request.post("/create").set("Content-Type", "application/json").send(
    JSON.stringify({ url: "foo" }),
  ).expect(400);
});
