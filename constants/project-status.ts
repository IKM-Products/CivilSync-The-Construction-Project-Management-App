export const PROJECT_STATUSES = [
  "Planning",
  "Not Started",
  "In Progress",
  "On Hold",
  "Completed",
  "Cancelled",
] as const;

export type ProjectStatus =
  (typeof PROJECT_STATUSES)[number];