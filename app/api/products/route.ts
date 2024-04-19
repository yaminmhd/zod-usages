import { Products } from "@/app/(products)/_components/products";
import { productFormSchema } from "@/lib/schema-validation";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse<Products>> {
  const result = [
    {
      name: "iPhone 13",
      price: 1800,
    },
    {
      name: "Samsung Galaxy S21",
      price: 1200,
    },
  ];

  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const validatedRequestBody = productFormSchema.safeParse(body);

  if (!validatedRequestBody.success) {
    return NextResponse.json(validatedRequestBody.error, { status: 400 });
  }

  return NextResponse.json({ message: "Success" }, { status: 201 });
}
