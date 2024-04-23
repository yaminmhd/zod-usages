import { Products } from "@/app/(products)/_components/products";
import { getProducts, insertProduct } from "@/app/db/productRepository";
import { productFormSchema } from "@/lib/schema-validation";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest
): Promise<NextResponse<Products>> {
  const results = await getProducts();

  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);
  return NextResponse.json(results);
}

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();

  const validatedRequestBody = productFormSchema.safeParse(body);
  if (!validatedRequestBody.success) {
    return NextResponse.json(validatedRequestBody.error, { status: 400 });
  }

  await insertProduct(validatedRequestBody.data);

  return NextResponse.json({ message: "Success" }, { status: 201 });
}
