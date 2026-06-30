export interface Task {
  id: string;
  projectId: string;

  title: string;
  description?: string;

  assignedTo: string;

  priority: string;
  status: string;

  startDate: Date;
  dueDate: Date;

  estimatedHours?: number;
  completion: number;

  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTaskData {
  title: string;
  description?: string;

  assignedTo: string;

  priority: string;
  status: string;

  startDate: Date;
  dueDate: Date;

  estimatedHours?: number;
  completion: number;
}

export interface UpdateTaskData
  extends Partial<CreateTaskData> {}

export interface TaskSummary {
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  pendingTasks: number;
  overdueTasks: number;
}