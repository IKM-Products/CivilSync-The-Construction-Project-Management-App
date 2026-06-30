"use client";

import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  projectSchema,
  type ProjectSchema,
} from "@/schemas/project.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProjectFormProps {
  projectId?: string;
}

export function ProjectForm({ projectId }: ProjectFormProps) {
  const isEditing = Boolean(projectId);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectSchema>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      clientName: "",
      location: "",
      budget: 0,
      status: "",
      description: "",
    },
  });

  async function onSubmit(values: ProjectSchema) {
    console.log({
      projectId,
      ...values,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-lg border p-6">
      <div>
        <label className="text-sm font-medium">Project Name</label>
        <Input placeholder="Enter project name" {...register("name")} />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Client Name</label>
        <Input placeholder="Enter client name" {...register("clientName")} />
        {errors.clientName && <p className="text-sm text-destructive">{errors.clientName.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Location</label>
        <Input placeholder="Enter project location" {...register("location")} />
        {errors.location && <p className="text-sm text-destructive">{errors.location.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Budget</label>
        <Input
          type="number"
          placeholder="Enter project budget"
          {...register("budget", { valueAsNumber: true })}
        />
        {errors.budget && <p className="text-sm text-destructive">{errors.budget.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Status</label>
        <select
          className="h-10 w-full rounded-md border bg-background px-3 text-sm"
          {...register("status")}
        >
          <option value="">Select status</option>
          <option value="Planning">Planning</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        {errors.status && <p className="text-sm text-destructive">{errors.status.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Start Date</label>
        <Input type="date" {...register("startDate", { valueAsDate: true })} />
        {errors.startDate && <p className="text-sm text-destructive">{errors.startDate.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">End Date</label>
        <Input type="date" {...register("endDate", { valueAsDate: true })} />
        {errors.endDate && <p className="text-sm text-destructive">{errors.endDate.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Description</label>
        <Input placeholder="Optional project description" {...register("description")} />
        {errors.description && <p className="text-sm text-destructive">{errors.description.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isEditing ? "Update Project" : "Create Project"}
      </Button>
    </form>
  );
}