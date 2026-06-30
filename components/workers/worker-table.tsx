"use client";

import type { Worker } from "@/types/worker";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { WorkerActions } from "@/components/workers/worker-actions";

interface WorkerTableProps {
  workers: Worker[];

  onView?: (worker: Worker) => void;
  onEdit?: (worker: Worker) => void;
  onDelete?: (worker: Worker) => void;
}

export function WorkerTable({
  workers,
  onView,
  onEdit,
  onDelete,
}: WorkerTableProps) {
  if (workers.length === 0) {
    return (
      <div className="rounded-lg border py-12 text-center">
        <h3 className="text-lg font-semibold">No Workers Found</h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Add workers to start managing project manpower.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Worker</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-right">Daily Wage</TableHead>
            <TableHead>Joining Date</TableHead>
            <TableHead className="w-20 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {workers.map((worker) => (
            <TableRow key={worker.id}>
              <TableCell className="font-medium">
                {worker.firstName} {worker.lastName}
              </TableCell>

              <TableCell>
                <Badge variant="outline">{worker.role}</Badge>
              </TableCell>

              <TableCell>{worker.phoneNumber}</TableCell>

              <TableCell className="text-right">
                NPR {worker.dailyWage.toLocaleString()}
              </TableCell>

              <TableCell>
                {worker.joiningDate.toLocaleDateString()}
              </TableCell>

              <TableCell className="text-center">
                <WorkerActions
                  worker={worker}
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