import { create } from "zustand";

export interface Project {
  id: string;
  name: string;
  clientName: string;
  location: string;
  budget: number;
  status: string;
  startDate: Date;
  endDate: Date;
  description?: string;
}

interface ProjectStore {
  projects: Project[];
  selectedProject: Project | null;

  setProjects: (projects: Project[]) => void;
  setSelectedProject: (project: Project | null) => void;

  addProject: (project: Project) => void;

  updateProject: (
    id: string,
    updatedProject: Partial<Project>
  ) => void;

  removeProject: (id: string) => void;

  clearProjects: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  selectedProject: null,

  setProjects: (projects) =>
    set({
      projects,
    }),

  setSelectedProject: (project) =>
    set({
      selectedProject: project,
    }),

  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),

  updateProject: (id, updatedProject) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id
          ? { ...project, ...updatedProject }
          : project
      ),

      selectedProject:
        state.selectedProject?.id === id
          ? {
              ...state.selectedProject,
              ...updatedProject,
            }
          : state.selectedProject,
    })),

  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter(
        (project) => project.id !== id
      ),

      selectedProject:
        state.selectedProject?.id === id
          ? null
          : state.selectedProject,
    })),

  clearProjects: () =>
    set({
      projects: [],
      selectedProject: null,
    }),
}));