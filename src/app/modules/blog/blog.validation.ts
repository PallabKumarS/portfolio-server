import { z } from "zod";

const createBlogValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
  }),
});

const updateBlogValidation = createBlogValidation.partial();

export const BlogValidation = {
  createBlogValidation,
  updateBlogValidation,
};