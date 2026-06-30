"use client";

import { CalendarDays, FolderOpen, Tag } from "lucide-react";

import type { Expense } from "@/types/expense";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ExpenseCardProps {
  expense: Expense;

  onView?: (expense: Expense) => void;
  onEdit?: (expense: Expense) => void;
  onDelete?: (expense: Expense) => void;
}

export function ExpenseCard({
  expense,
  onView,
  onEdit,
  onDelete,
}: ExpenseCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">
            {expense.title}
          </CardTitle>

          <Badge>{expense.category}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="text-3xl font-bold text-primary">
          NPR {expense.amount.toLocaleString()}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>
              {expense.expenseDate.toLocaleDateString()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4" />
            <span>{expense.projectId}</span>
          </div>

          {expense.description && (
            <div className="flex items-start gap-2">
              <Tag className="mt-0.5 h-4 w-4" />

              <p className="line-clamp-3">
                {expense.description}
              </p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button
          className="flex-1"
          variant="outline"
          onClick={() => onView?.(expense)}
        >
          View
        </Button>

        <Button
          className="flex-1"
          onClick={() => onEdit?.(expense)}
        >
          Edit
        </Button>

        <Button
          variant="destructive"
          onClick={() => onDelete?.(expense)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}