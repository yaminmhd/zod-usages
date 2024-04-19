import { Products } from "./(products)/_components/products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Products />
    </main>
  );
}
