"use client";

import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  expenseSchema,
  type ExpenseSchema,
} from "@/schemas/expense.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ExpenseFormProps {
  projectId: string;
}

export function ExpenseForm({ projectId }: ExpenseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExpenseSchema>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      title: "",
      category: "",
      amount: 0,
      description: "",
    },
  });

  async function onSubmit(values: ExpenseSchema) {
    console.log({ projectId, ...values });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-lg border p-6">
      <div>
        <label className="text-sm font-medium">Title</label>
        <Input placeholder="Cement purchase" {...register("title")} />
        {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Category</label>
        <Input placeholder="Material / Labor / Transport" {...register("category")} />
        {errors.category && <p className="text-sm text-destructive">{errors.category.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Amount</label>
        <Input type="number" placeholder="25000" {...register("amount", { valueAsNumber: true })} />
        {errors.amount && <p className="text-sm text-destructive">{errors.amount.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Expense Date</label>
        <Input type="date" {...register("expenseDate", { valueAsDate: true })} />
        {errors.expenseDate && <p className="text-sm text-destructive">{errors.expenseDate.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium">Description</label>
        <Input placeholder="Optional description" {...register("description")} />
        {errors.description && <p className="text-sm text-destructive">{errors.description.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Save Expense
      </Button>
    </form>
  );
}