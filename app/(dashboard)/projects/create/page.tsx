import { ProjectForm } from "@/components/projects/project-form";

export default function CreateProjectPage() {
  return (
    <main className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Create Project
        </h1>

        <p className="text-muted-foreground">
          Add a new construction project to CivilSync.
        </p>
      </div>

      {/* Form */}
      <ProjectForm />
    </main>
  );
}