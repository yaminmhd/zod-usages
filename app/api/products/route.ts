import { Products } from "@/app/(products)/_components/products";
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
