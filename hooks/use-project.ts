"use client";

import { useProjectStore } from "@/store/project-store";

export function useProject() {
  const {
    projects,
    selectedProject,
    setProjects,
    setSelectedProject,
    addProject,
    updateProject,
    removeProject,
    clearProjects,
  } = useProjectStore();

  return {
    projects,
    selectedProject,
    setProjects,
    setSelectedProject,
    addProject,
    updateProject,
    removeProject,
    clearProjects,
  };
}