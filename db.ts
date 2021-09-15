import { Pool } from "https://deno.land/x/postgres@v0.12.0/mod.ts";

const pool = new Pool({}, 20);

export async function testQuery() {
  const client = await pool.connect();

  try {
    await client.queryArray`SELECT 1`;
  } finally {
    client.release();
  }
}
