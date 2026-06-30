"use client";

import {
  CalendarDays,
  MapPin,
  User,
  Wallet,
} from "lucide-react";

import type { Project } from "@/types/project";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;

  onView?: (project: Project) => void;
  onEdit?: (project: Project) => void;
  onDelete?: (project: Project) => void;
}

export function ProjectCard({
  project,
  onView,
  onEdit,
  onDelete,
}: ProjectCardProps) {
  function getStatusVariant(
    status: string
  ): "default" | "secondary" | "destructive" | "outline" {
    switch (status.toLowerCase()) {
      case "completed":
        return "default";

      case "active":
        return "secondary";

      case "on hold":
        return "outline";

      case "cancelled":
        return "destructive";

      default:
        return "outline";
    }
  }

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="line-clamp-2 text-xl">
            {project.name}
          </CardTitle>

          <Badge variant={getStatusVariant(project.status)}>
            {project.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />

            <span>{project.clientName}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />

            <span>{project.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />

            <span>
              NPR {project.budget.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />

            <span>
              {project.startDate.toLocaleDateString()} -{" "}
              {project.endDate.toLocaleDateString()}
            </span>
          </div>
        </div>

        {project.description && (
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {project.description}
          </p>
        )}
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onView?.(project)}
        >
          View
        </Button>

        <Button
          className="flex-1"
          onClick={() => onEdit?.(project)}
        >
          Edit
        </Button>

        <Button
          variant="destructive"
          onClick={() => onDelete?.(project)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}