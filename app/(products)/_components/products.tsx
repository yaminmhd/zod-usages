"use client";

import { useEffect, useState } from "react";
import { ProductLine } from "./product-line";
import { z } from "zod";

const productSchema = z.array(
  z.object({
    name: z.string(),
    price: z.number(),
  })
);

type ProductType = z.infer<typeof productSchema>;

export const Products = () => {
  const [products, setProducts] = useState<ProductType>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const validatedProduct = productSchema.safeParse(data);
        if (!validatedProduct.success) {
          console.error("Invalid product data");
          setIsError(true);
        } else {
          setProducts([...validatedProduct.data]);
          setIsLoading(false);
        }
      });
  }, []);

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className="flex flex-col justify-between h-32">
      <p className="text-4xl underline ">Products</p>
      {isLoading && <p>Loading...</p>}
      <div>
        {!isLoading &&
          products?.map((product, index) => (
            <ProductLine key={index} {...product} />
          ))}
      </div>
    </div>
  );
};
