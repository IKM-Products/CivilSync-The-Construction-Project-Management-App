export const ROUTES = {
  HOME: "/",

  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",

  DASHBOARD: "/dashboard",
  CALENDAR: "/calendar",
  SETTINGS: "/settings",

  PROJECTS: "/projects",
  CREATE_PROJECT: "/projects/create",
} as const;

export const PROJECT_ROUTES = {
  DETAILS: (projectId: string) => `/projects/${projectId}`,
  EDIT: (projectId: string) => `/projects/${projectId}/edit`,
  TASKS: (projectId: string) => `/projects/${projectId}/tasks`,
  WORKERS: (projectId: string) => `/projects/${projectId}/workers`,
  MATERIALS: (projectId: string) => `/projects/${projectId}/materials`,
  EXPENSES: (projectId: string) => `/projects/${projectId}/expenses`,
  REPORTS: (projectId: string) => `/projects/${projectId}/reports`,
} as const;