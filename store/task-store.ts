import { create } from "zustand";

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
}

interface TaskStore {
  tasks: Task[];
  selectedTask: Task | null;

  setTasks: (tasks: Task[]) => void;
  setSelectedTask: (task: Task | null) => void;
  addTask: (task: Task) => void;
  updateTask: (id: string, updatedTask: Partial<Task>) => void;
  removeTask: (id: string) => void;
  clearTasks: () => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  selectedTask: null,

  setTasks: (tasks) => set({ tasks }),

  setSelectedTask: (task) => set({ selectedTask: task }),

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  updateTask: (id, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),

      selectedTask:
        state.selectedTask?.id === id
          ? { ...state.selectedTask, ...updatedTask }
          : state.selectedTask,
    })),

  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
      selectedTask:
        state.selectedTask?.id === id ? null : state.selectedTask,
    })),

  clearTasks: () =>
    set({
      tasks: [],
      selectedTask: null,
    }),
}));