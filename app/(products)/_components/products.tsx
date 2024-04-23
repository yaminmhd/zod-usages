import { ProductLine } from "./product-line";
import { z } from "zod";
import { getProducts } from "@/app/db/productRepository";

const productsSchema = z.array(
  z.object({
    name: z.string(),
    price: z.number(),
  })
);

export type Products = z.infer<typeof productsSchema>;

export const Products = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col">
      <p className="text-4xl underline ">Products</p>
      <div>
        {products?.map((product, index) => (
          <ProductLine key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
