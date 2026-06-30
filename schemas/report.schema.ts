import { z } from "zod";

export const reportSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Report title must be at least 3 characters.")
    .max(100, "Report title must not exceed 100 characters."),

  reportDate: z.date({
    error: "Please select a report date.",
  }),

  weather: z
    .string()
    .trim()
    .min(1, "Weather is required.")
    .max(50, "Weather must not exceed 50 characters."),

  workCompleted: z
    .string()
    .trim()
    .min(10, "Work completed must be at least 10 characters.")
    .max(1000, "Work completed must not exceed 1000 characters."),

  issues: z
    .string()
    .trim()
    .max(1000, "Issues must not exceed 1000 characters.")
    .optional(),

  workersPresent: z
    .number({
      error: "Number of workers is required.",
    })
    .int("Workers present must be a whole number.")
    .nonnegative("Workers present cannot be negative."),

  materialsUsed: z
    .string()
    .trim()
    .max(1000, "Materials used must not exceed 1000 characters.")
    .optional(),

  progress: z
    .number({
      error: "Progress is required.",
    })
    .min(0, "Progress cannot be less than 0%.")
    .max(100, "Progress cannot exceed 100%."),

  remarks: z
    .string()
    .trim()
    .max(1000, "Remarks must not exceed 1000 characters.")
    .optional(),
});

export type ReportSchema = z.infer<typeof reportSchema>;