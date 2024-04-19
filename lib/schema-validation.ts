import z from "zod";

export const productFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  price: z.coerce.number().min(1, { message: "Price must be greater than 0" }),
});
