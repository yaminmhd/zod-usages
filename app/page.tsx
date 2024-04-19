import { ProductForm } from "./(products)/_components/product-form";
import { Products } from "./(products)/_components/products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <Products />
      <ProductForm />
    </main>
  );
}
