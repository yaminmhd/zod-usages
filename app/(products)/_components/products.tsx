"use client";

import { useEffect, useState } from "react";
import { ProductLine } from "./product-line";

type Product = {
  name: string;
  price: number;
};

export const Products = () => {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="flex flex-col justify-between h-32">
      <p className="text-4xl underline ">Products</p>
      {!products && <p>Loading...</p>}
      <div>
        {products?.map((product, index) => (
          <ProductLine key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
