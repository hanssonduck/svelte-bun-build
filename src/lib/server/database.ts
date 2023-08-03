import { Database } from "bun:sqlite";

export const database = new Database("data/svelte-test.sqlite3", {
  create: true,
});
