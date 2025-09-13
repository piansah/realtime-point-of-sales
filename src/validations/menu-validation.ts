import z from "zod";

export const menuSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number(),
  category: z.string(),
  image_url: z.union([z.string(), z.instanceof(File)]),
  is_available: z.boolean(),
});

export const menuFormSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  description: z.string().min(1, "Description is Required"),
  price: z.number().min(1, "Price is Required"),
  discount: z.number().min(1, "Discount is Required"),
  category: z.string().min(1, "Category is Required"),
  image_url: z.union([
    z.string().min(1, "Image URL is Required"),
    z.instanceof(File),
  ]),
  is_available: z.string().min(1, "Availablity is Required"),
});

export type MenuForm = z.infer<typeof menuFormSchema>;
export type Menu = z.infer<typeof menuSchema> & { id: string };
