import { z } from "zod";

const createMessageValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
  }),
});

const updateMessageValidation = createMessageValidation.partial();

export const MessageValidation = {
  createMessageValidation,
  updateMessageValidation,
};