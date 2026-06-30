import { z } from "zod";

export const workerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name must not exceed 50 characters."),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name must not exceed 50 characters."),

  role: z
    .string()
    .trim()
    .min(1, "Please select a worker role."),

  phoneNumber: z
    .string()
    .trim()
    .regex(
      /^[0-9]{10}$/,
      "Phone number must contain exactly 10 digits."
    ),

  email: z
    .email("Please enter a valid email address.")
    .trim()
    .optional()
    .or(z.literal("")),

  dailyWage: z
    .number({
      error: "Daily wage is required.",
    })
    .nonnegative("Daily wage cannot be negative."),

  joiningDate: z.date({
    error: "Please select a joining date.",
  }),

  address: z
    .string()
    .trim()
    .max(200, "Address must not exceed 200 characters.")
    .optional(),

  emergencyContact: z
    .string()
    .trim()
    .regex(
      /^[0-9]{10}$/,
      "Emergency contact must contain exactly 10 digits."
    )
    .optional()
    .or(z.literal("")),

  notes: z
    .string()
    .trim()
    .max(500, "Notes must not exceed 500 characters.")
    .optional(),
});

export type WorkerSchema = z.infer<typeof workerSchema>;