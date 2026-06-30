"use client";

import { CheckCircle2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

interface ProjectProgressProps {
  progress: number;
  completedTasks: number;
  totalTasks: number;
}

export function ProjectProgress({
  progress,
  completedTasks,
  totalTasks,
}: ProjectProgressProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress Percentage */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Overall Progress
            </span>

            <span className="text-sm font-semibold">
              {progress}%
            </span>
          </div>

          <Progress value={progress} className="h-3" />
        </div>

        {/* Task Summary */}
        <div className="flex items-center gap-3 rounded-lg border p-4">
          <CheckCircle2 className="h-10 w-10 text-green-600" />

          <div>
            <h3 className="font-semibold">
              {completedTasks} / {totalTasks} Tasks Completed
            </h3>

            <p className="text-sm text-muted-foreground">
              Keep tracking project tasks to monitor progress.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}