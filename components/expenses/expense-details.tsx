"use client";

import {
  CalendarDays,
  FileText,
  FolderOpen,
  Tag,
  Wallet,
} from "lucide-react";

import type { Expense } from "@/types/expense";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ExpenseDetailsProps {
  expense: Expense;
}

export function ExpenseDetails({
  expense,
}: ExpenseDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Details</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Expense Title
          </p>

          <h2 className="text-2xl font-bold">
            {expense.title}
          </h2>
        </div>

        <Separator />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <Wallet className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">
                Amount
              </p>

              <p className="font-semibold">
                NPR {expense.amount.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Tag className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">
                Category
              </p>

              <Badge>{expense.category}</Badge>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">
                Expense Date
              </p>

              <p>
                {expense.expenseDate.toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FolderOpen className="h-5 w-5 text-primary" />

            <div>
              <p className="text-sm text-muted-foreground">
                Project ID
              </p>

              <p>{expense.projectId}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />

            <h3 className="font-semibold">
              Description
            </h3>
          </div>

          <p className="rounded-md border bg-muted/30 p-4 text-sm leading-7">
            {expense.description ||
              "No description available."}
          </p>
        </div>

        <Separator />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">
              Created At
            </p>

            <p>
              {expense.createdAt.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Last Updated
            </p>

            <p>
              {expense.updatedAt.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}