import { database } from "$lib/server/database";

export const load = () => {
  console.log({ database: database });
  return {};
};
