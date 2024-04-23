import { db } from "./drizzle";
import { products } from "./schema";

export type Product = typeof products.$inferSelect;
export async function getProducts(): Promise<Product[]> {
  return await db.select().from(products);
}

export type NewProduct = typeof products.$inferInsert;
export async function insertProduct(product: NewProduct) {
  await db.insert(products).values(product).returning();
}
