export const ROLES = [
  "Admin",
  "Project Manager",
  "Site Engineer",
  "Site Supervisor",
  "Contractor",
  "Worker",
  "Client",
] as const;

export type Role = (typeof ROLES)[number];