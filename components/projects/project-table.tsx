"use client";

import type { Project } from "@/types/project";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { ProjectActions } from "@/components/projects/project-actions";

interface ProjectTableProps {
  projects: Project[];
  onView?: (project: Project) => void;
  onEdit?: (project: Project) => void;
  onDelete?: (project: Project) => void;
}

export function ProjectTable({
  projects,
  onView,
  onEdit,
  onDelete,
}: ProjectTableProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-lg border py-12 text-center">
        <h3 className="text-lg font-semibold">No Projects Found</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Create your first construction project to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Budget</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead className="w-80px text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.clientName}</TableCell>
              <TableCell>{project.location}</TableCell>
              <TableCell>
                <Badge variant="outline">{project.status}</Badge>
              </TableCell>
              <TableCell className="text-right">
                NPR {project.budget.toLocaleString()}
              </TableCell>
              <TableCell>{project.endDate.toLocaleDateString()}</TableCell>
              <TableCell className="text-center">
                <ProjectActions
                  project={project}
                  onView={onView}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}