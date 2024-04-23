"use server";

import { insertProduct } from "@/app/db/productRepository";
import { productFormSchema } from "@/lib/schema-validation";
import { revalidatePath } from "next/cache";

export async function addProduct(data: FormData) {
  const formData = Object.fromEntries(data);
  const parsed = productFormSchema.safeParse(formData);
  if (!parsed.success) {
    throw new Error(parsed.error.errors[0].message);
  }

  await insertProduct(parsed.data);
  revalidatePath("/(products)");
}
