import { ProjectForm } from "@/components/projects/project-form";

interface EditProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function EditProjectPage({
  params,
}: EditProjectPageProps) {
  const { projectId } = params;

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Edit Project
        </h1>

        <p className="text-muted-foreground">
          Update project details for project ID: {projectId}
        </p>
      </div>

      <ProjectForm projectId={projectId} />
    </main>
  );
}