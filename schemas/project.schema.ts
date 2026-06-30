import { z } from "zod";

export const projectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Project name must be at least 3 characters.")
    .max(100, "Project name must not exceed 100 characters."),

  clientName: z
    .string()
    .trim()
    .min(3, "Client name must be at least 3 characters.")
    .max(100, "Client name must not exceed 100 characters."),

  location: z
    .string()
    .trim()
    .min(3, "Location must be at least 3 characters.")
    .max(150, "Location must not exceed 150 characters."),

  budget: z
    .number({
      error: "Budget is required.",
    })
    .positive("Budget must be greater than 0."),

  status: z
    .string()
    .trim()
    .min(1, "Please select project status."),

  startDate: z.date({
    error: "Please select start date.",
  }),

  endDate: z.date({
    error: "Please select end date.",
  }),

  description: z
    .string()
    .trim()
    .max(500, "Description must not exceed 500 characters.")
    .optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;