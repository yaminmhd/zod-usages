import postgres from "postgres";
import { drizzle as LocalDrizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

export const migrationClient = postgres(process.env.DATABASE_URL as string);

export const db = LocalDrizzle(migrationClient, { schema });
