import { MaterialTable } from "@/components/materials/material-table";
import type { Material } from "@/types/material";

interface ProjectMaterialsPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectMaterialsPage({
  params,
}: ProjectMaterialsPageProps) {
  const { projectId } = params;

  const materials: Material[] = [];

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Project Materials
        </h1>

        <p className="text-muted-foreground">
          Manage materials for project ID: {projectId}
        </p>
      </div>

      <MaterialTable materials={materials} />
    </main>
  );
}