import React from "react";
import { Products } from "../../_components/products";
import { ProductForm } from "../../_components/product-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-evenly items-center p-24">
      <Products />
      <ProductForm />
    </main>
  );
}
