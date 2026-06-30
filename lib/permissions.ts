import { ROLES, type Role } from "@/constants/roles";

export function isAdmin(role?: Role | null) {
  return role === ROLES.ADMIN;
}

export function isProjectManager(role?: Role | null) {
  return role === ROLES.PROJECT_MANAGER;
}

export function isSiteEngineer(role?: Role | null) {
  return role === ROLES.SITE_ENGINEER;
}

export function isSiteSupervisor(role?: Role | null) {
  return role === ROLES.SITE_SUPERVISOR;
}

export function isContractor(role?: Role | null) {
  return role === ROLES.CONTRACTOR;
}

export function isWorker(role?: Role | null) {
  return role === ROLES.WORKER;
}

export function isClient(role?: Role | null) {
  return role === ROLES.CLIENT;
}

export function canManageUsers(role?: Role | null) {
  return role === ROLES.ADMIN;
}

export function canManageProjects(role?: Role | null) {
  return (
    role === ROLES.ADMIN ||
    role === ROLES.PROJECT_MANAGER ||
    role === ROLES.SITE_ENGINEER
  );
}

export function canManageTasks(role?: Role | null) {
  return (
    role === ROLES.ADMIN ||
    role === ROLES.PROJECT_MANAGER ||
    role === ROLES.SITE_ENGINEER ||
    role === ROLES.SITE_SUPERVISOR
  );
}

export function canManageMaterials(role?: Role | null) {
  return (
    role === ROLES.ADMIN ||
    role === ROLES.PROJECT_MANAGER ||
    role === ROLES.SITE_ENGINEER ||
    role === ROLES.SITE_SUPERVISOR ||
    role === ROLES.CONTRACTOR
  );
}

export function canManageWorkers(role?: Role | null) {
  return (
    role === ROLES.ADMIN ||
    role === ROLES.PROJECT_MANAGER ||
    role === ROLES.SITE_ENGINEER ||
    role === ROLES.SITE_SUPERVISOR ||
    role === ROLES.CONTRACTOR
  );
}

export function canManageExpenses(role?: Role | null) {
  return (
    role === ROLES.ADMIN ||
    role === ROLES.PROJECT_MANAGER ||
    role === ROLES.SITE_ENGINEER
  );
}

export function canSubmitReports(role?: Role | null) {
  return (
    role === ROLES.ADMIN ||
    role === ROLES.PROJECT_MANAGER ||
    role === ROLES.SITE_ENGINEER ||
    role === ROLES.SITE_SUPERVISOR
  );
}

export function canViewOnly(role?: Role | null) {
  return role === ROLES.CLIENT || role === ROLES.WORKER;
}