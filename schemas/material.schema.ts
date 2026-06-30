import { z } from "zod";

export const materialSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Material name must be at least 2 characters.")
    .max(100, "Material name must not exceed 100 characters."),

  unit: z
    .string()
    .trim()
    .min(1, "Please select a unit."),

  quantity: z
    .number({
      error: "Quantity is required.",
    })
    .nonnegative("Quantity cannot be negative."),

  unitPrice: z
    .number({
      error: "Unit price is required.",
    })
    .nonnegative("Unit price cannot be negative."),

  supplier: z
    .string()
    .trim()
    .max(100, "Supplier name must not exceed 100 characters.")
    .optional(),

  description: z
    .string()
    .trim()
    .max(500, "Description must not exceed 500 characters.")
    .optional(),
});

export type MaterialSchema = z.infer<typeof materialSchema>;