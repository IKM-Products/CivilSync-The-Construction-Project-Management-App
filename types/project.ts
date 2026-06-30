export interface Project {
  id: string;

  name: string;
  clientName: string;
  location: string;
  description?: string;

  budget: number;
  status: string;

  startDate: Date;
  endDate: Date;

  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProjectData {
  name: string;
  clientName: string;
  location: string;
  description?: string;

  budget: number;
  status: string;

  startDate: Date;
  endDate: Date;
}

export interface UpdateProjectData
  extends Partial<CreateProjectData> {}

export interface ProjectStats {
  totalTasks: number;
  completedTasks: number;

  totalWorkers: number;

  totalMaterials: number;

  totalExpenses: number;

  progress: number;
}