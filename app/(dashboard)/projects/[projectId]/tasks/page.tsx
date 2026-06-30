import { TaskTable } from "@/components/tasks/task-table";
import type { Task } from "@/types/task";

interface ProjectTasksPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectTasksPage({
  params,
}: ProjectTasksPageProps) {
  const { projectId } = params;

  const tasks: Task[] = [];

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Project Tasks
        </h1>

        <p className="text-muted-foreground">
          Manage tasks for project ID: {projectId}
        </p>
      </div>

      <TaskTable tasks={tasks} />
    </main>
  );
}