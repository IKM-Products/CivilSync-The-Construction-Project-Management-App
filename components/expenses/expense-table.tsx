"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";

import type { Expense } from "@/types/expense";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

interface ExpenseTableProps {
  expenses: Expense[];

  onView?: (expense: Expense) => void;
  onEdit?: (expense: Expense) => void;
  onDelete?: (expense: Expense) => void;
}

export function ExpenseTable({
  expenses,
  onView,
  onEdit,
  onDelete,
}: ExpenseTableProps) {
  if (expenses.length === 0) {
    return (
      <div className="rounded-lg border py-12 text-center">
        <h3 className="text-lg font-semibold">No Expenses Found</h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Add your first expense to start tracking project costs.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>

            <TableHead>Category</TableHead>

            <TableHead className="text-right">Amount</TableHead>

            <TableHead>Date</TableHead>

            <TableHead className="w-140px text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="font-medium">
                {expense.title}
              </TableCell>

              <TableCell>{expense.category}</TableCell>

              <TableCell className="text-right">
                NPR {expense.amount.toLocaleString()}
              </TableCell>

              <TableCell>
                {expense.expenseDate.toLocaleDateString()}
              </TableCell>

              <TableCell>
                <div className="flex justify-center gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onView?.(expense)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit?.(expense)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    onClick={() => onDelete?.(expense)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}