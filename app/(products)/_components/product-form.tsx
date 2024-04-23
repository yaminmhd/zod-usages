"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema } from "@/lib/schema-validation";
import { addProduct } from "../(actions)/add-product";

export type ProductForm = z.infer<typeof productFormSchema>;

export const ProductForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: zodResolver(productFormSchema),
  });

  return (
    <div className="flex flex-col gap-y-5">
      <p className="text-4xl underline ">Create a Product</p>
      <form
        action={addProduct}
        className="flex flex-col gap-y-5 w-auto p-4 rounded bg-slate-800"
      >
        <input
          {...register("name")}
          placeholder="name"
          className="px-4 py-2 rounded bg-slate-600 w-full"
        />
        {errors.name?.message && (
          <p className="text-red-600">{errors.name?.message}</p>
        )}
        <input
          {...register("price")}
          placeholder="price"
          className="px-4 py-2 rounded bg-slate-600 w-full"
        />
        {errors.price?.message && (
          <p className="text-red-600">{errors.price?.message}</p>
        )}
        <button
          type="submit"
          className="px-4 py-2 rounded bg-teal-700 w-min self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
