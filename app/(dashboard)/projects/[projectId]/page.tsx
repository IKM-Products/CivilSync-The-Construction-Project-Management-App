import Link from "next/link";
import {
  ArrowLeft,
  ClipboardList,
  DollarSign,
  FileText,
  Hammer,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectDetailsPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { projectId } = params;

  return (
    <main className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Button variant="ghost" asChild className="mb-2 px-0">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <h1 className="text-3xl font-bold tracking-tight">
            Project Details
          </h1>

          <p className="text-muted-foreground">
            Project ID: {projectId}
          </p>
        </div>

        <Button asChild>
          <Link href={`/projects/${projectId}/edit`}>
            Edit Project
          </Link>
        </Button>
      </div>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>
            Summary of the selected construction project.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground">
            Project information will be displayed here after connecting the
            database.
          </p>
        </CardContent>
      </Card>

      {/* Quick Access */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <Card className="transition hover:shadow-md">
          <Link href={`/projects/${projectId}/tasks`}>
            <CardHeader>
              <ClipboardList className="h-8 w-8 text-primary" />
              <CardTitle className="mt-2 text-lg">
                Tasks
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Manage project tasks.
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="transition hover:shadow-md">
          <Link href={`/projects/${projectId}/workers`}>
            <CardHeader>
              <Users className="h-8 w-8 text-primary" />
              <CardTitle className="mt-2 text-lg">
                Workers
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Manage workers and attendance.
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="transition hover:shadow-md">
          <Link href={`/projects/${projectId}/materials`}>
            <CardHeader>
              <Hammer className="h-8 w-8 text-primary" />
              <CardTitle className="mt-2 text-lg">
                Materials
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Track inventory and stock.
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="transition hover:shadow-md">
          <Link href={`/projects/${projectId}/expenses`}>
            <CardHeader>
              <DollarSign className="h-8 w-8 text-primary" />
              <CardTitle className="mt-2 text-lg">
                Expenses
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                View project expenses.
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="transition hover:shadow-md">
          <Link href={`/projects/${projectId}/reports`}>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary" />
              <CardTitle className="mt-2 text-lg">
                Reports
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                Daily reports and progress.
              </p>
            </CardContent>
          </Link>
        </Card>
      </section>
    </main>
  );
}