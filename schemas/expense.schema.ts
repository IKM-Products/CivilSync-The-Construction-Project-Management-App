import { z } from "zod";

export const expenseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters.")
    .max(100, "Title must not exceed 100 characters."),

  category: z
    .string()
    .trim()
    .min(1, "Please select an expense category."),

  amount: z
    .number({
      error: "Amount is required.",
    })
    .positive("Amount must be greater than 0."),

  expenseDate: z.date({
    error: "Please select an expense date.",
  }),

  description: z
    .string()
    .trim()
    .max(500, "Description must not exceed 500 characters.")
    .optional(),
});

export type ExpenseSchema = z.infer<typeof expenseSchema>;