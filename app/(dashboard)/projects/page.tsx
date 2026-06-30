import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <main className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage all your construction projects in one place.
          </p>
        </div>

        <Button asChild>
          <Link href="/projects/create">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      {/* Empty State */}
      <Card>
        <CardHeader>
          <CardTitle>No Projects Found</CardTitle>
          <CardDescription>
            You haven't created any construction projects yet.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <h3 className="text-lg font-semibold">
            Create your first project
          </h3>

          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Add your first construction project to start managing tasks,
            workers, materials, expenses, and daily reports.
          </p>

          <Button asChild className="mt-6">
            <Link href="/projects/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}