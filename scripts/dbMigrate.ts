/* eslint-disable no-console */
import "dotenv/config";

import { migrate as LocalMigrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "../app/db/drizzle";

async function main() {
  console.log("Migration started");

  await LocalMigrate(db, { migrationsFolder: "./migrations" });

  console.log("Migration completed");

  process.exit(0);
}

main().catch((error) => {
  console.error("Migration failed");
  console.log(error);
  process.exit(1);
});
