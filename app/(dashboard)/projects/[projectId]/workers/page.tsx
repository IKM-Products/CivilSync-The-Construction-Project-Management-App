import { WorkerTable } from "@/components/workers/worker-table";
import type { Worker } from "@/types/worker";

interface ProjectWorkersPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectWorkersPage({
  params,
}: ProjectWorkersPageProps) {
  const { projectId } = params;

  const workers: Worker[] = [];

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Project Workers
        </h1>

        <p className="text-muted-foreground">
          Manage workers for project ID: {projectId}
        </p>
      </div>

      <WorkerTable workers={workers} />
    </main>
  );
}