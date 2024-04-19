import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const result = [
    {
      id: "iPhone 13",
      price: 1800,
    },
    {
      id: "Samsung Galaxy S21",
      price: 1200,
    },
  ];

  return NextResponse.json(result);
}
