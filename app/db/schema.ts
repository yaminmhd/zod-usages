import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// Create a pgTable that maps to a table in your DB
export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    price: integer("price").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (products) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(products.id),
    };
  }
);
