"use client";

import {
  CalendarDays,
  FileText,
  MapPin,
  User,
  Wallet,
} from "lucide-react";

import type { Project } from "@/types/project";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  function getStatusVariant(
    status: string
  ): "default" | "secondary" | "destructive" | "outline" {
    switch (status.toLowerCase()) {
      case "active":
        return "secondary";

      case "completed":
        return "default";

      case "on hold":
        return "outline";

      case "cancelled":
        return "destructive";

      default:
        return "outline";
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Details</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Project Name */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">
            {project.name}
          </h2>

          <Badge variant={getStatusVariant(project.status)}>
            {project.status}
          </Badge>
        </div>

        <Separator />

        {/* Information */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">
                Client
              </p>

              <p className="font-medium">
                {project.clientName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">
                Location
              </p>

              <p>{project.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Wallet className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">
                Budget
              </p>

              <p className="font-medium">
                NPR {project.budget.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">
                Duration
              </p>

              <p>
                {project.startDate.toLocaleDateString()} —{" "}
                {project.endDate.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Description */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">
              Description
            </h3>
          </div>

          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="leading-7 text-muted-foreground">
              {project.description ||
                "No description available."}
            </p>
          </div>
        </div>

        <Separator />

        {/* Metadata */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">
              Created At
            </p>

            <p>
              {project.createdAt.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Last Updated
            </p>

            <p>
              {project.updatedAt.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}