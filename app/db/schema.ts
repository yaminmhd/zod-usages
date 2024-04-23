import {
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
    price: text("price").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (products) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(products.name),
    };
  }
);

// export type Product = typeof products.$inferSelect; // return type when queried
// export type NewProduct = typeof products.$inferInsert; // insert type

// export async function getProducts() {
//   const selectResult = await db.select().from(products);
//   console.log("Results", selectResult);
// };

// export async function insertProduct(products: NewProduct): Promise<Product[]> {
//   return db.insert(users).values(user).returning();
// }
