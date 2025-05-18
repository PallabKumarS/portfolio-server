import { z } from "zod";

const createProjectValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
  }),
});

const updateProjectValidation = createProjectValidation.partial();

export const ProjectValidation = {
  createProjectValidation,
  updateProjectValidation,
};