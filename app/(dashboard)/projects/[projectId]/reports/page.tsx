import { ReportTable } from "@/components/reports/report-table";
import type { Report } from "@/types/report";

interface ProjectReportsPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectReportsPage({
  params,
}: ProjectReportsPageProps) {
  const { projectId } = params;

  const reports: Report[] = [];

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Daily Reports
        </h1>

        <p className="text-muted-foreground">
          View and manage reports for project ID: {projectId}
        </p>
      </div>

      <ReportTable reports={reports} />
    </main>
  );
}