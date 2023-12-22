import { z } from "zod";

export const schema = z.object({
  name: z.string(),
  category: z.string(),
  description: z.string(),
  price: z.string(),
  phone: z.string(),
});

export type UploadProductForm = z.infer<typeof schema>;
