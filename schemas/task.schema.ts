import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Task title must be at least 3 characters.")
    .max(100, "Task title must not exceed 100 characters."),

  description: z
    .string()
    .trim()
    .max(1000, "Description must not exceed 1000 characters.")
    .optional(),

  assignedTo: z
    .string()
    .trim()
    .min(1, "Please assign the task to a worker or engineer."),

  priority: z
    .string()
    .trim()
    .min(1, "Please select a priority."),

  status: z
    .string()
    .trim()
    .min(1, "Please select a task status."),

  startDate: z.date({
    error: "Please select a start date.",
  }),

  dueDate: z.date({
    error: "Please select a due date.",
  }),

  estimatedHours: z
    .number({
      error: "Estimated hours are required.",
    })
    .positive("Estimated hours must be greater than 0.")
    .optional(),

  completion: z
    .number({
      error: "Completion percentage is required.",
    })
    .min(0, "Completion cannot be less than 0%.")
    .max(100, "Completion cannot exceed 100%.")
    .default(0),
});

export type TaskSchema = z.infer<typeof taskSchema>;