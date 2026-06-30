export const TASK_PRIORITIES = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
  CRITICAL: "critical",
} as const;

export type TaskPriority =
  (typeof TASK_PRIORITIES)[keyof typeof TASK_PRIORITIES];

export const TASK_PRIORITY_OPTIONS = [
  {
    value: TASK_PRIORITIES.LOW,
    label: "Low",
  },
  {
    value: TASK_PRIORITIES.MEDIUM,
    label: "Medium",
  },
  {
    value: TASK_PRIORITIES.HIGH,
    label: "High",
  },
  {
    value: TASK_PRIORITIES.CRITICAL,
    label: "Critical",
  },
] as const;