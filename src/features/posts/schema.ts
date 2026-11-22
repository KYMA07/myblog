import { z } from "zod";

export const postInputSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  body: z.string().min(1, "Write something").max(500),
});

export const postSchema = postInputSchema.extend({
  id: z.number(),
  userId: z.number(),
});

export type PostInput = z.infer<typeof postInputSchema>;
export type Post = z.infer<typeof postSchema>;