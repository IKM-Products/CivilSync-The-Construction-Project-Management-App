"use client";

import type { Task } from "@/types/task";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { TaskActions } from "@/components/tasks/task-actions";

interface TaskTableProps {
  tasks: Task[];

  onView?: (task: Task) => void;
  onEdit?: (task: Task) => void;
  onDelete?: (task: Task) => void;
}

export function TaskTable({
  tasks,
  onView,
  onEdit,
  onDelete,
}: TaskTableProps) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-lg border py-12 text-center">
        <h3 className="text-lg font-semibold">No Tasks Found</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Create your first task to start tracking project work.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Completion</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="w-20 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.title}</TableCell>
              <TableCell>{task.assignedTo}</TableCell>

              <TableCell>
                <Badge variant="outline">{task.priority}</Badge>
              </TableCell>

              <TableCell>
                <Badge>{task.status}</Badge>
              </TableCell>

              <TableCell className="text-right">{task.completion}%</TableCell>

              <TableCell>{task.dueDate.toLocaleDateString()}</TableCell>

              <TableCell className="text-center">
                <TaskActions
                  task={task}
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