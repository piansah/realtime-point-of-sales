import z from "zod";

export const tableSchema = z.object({
  name: z.string(),
  description: z.number(),
  capacity: z.string(),
  status: z.string(),
});

export type Table = z.infer<typeof tableSchema> & { id: string };
