import { ExpenseTable } from "@/components/expenses/expense-table";
import { Expense } from "@/types/expense";

interface ProjectExpensesPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectExpensesPage({
  params,
}: ProjectExpensesPageProps) {
  const { projectId } = params;

  const expenses: Expense[] = [];

  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Project Expenses
        </h1>

        <p className="text-muted-foreground">
          Manage all expenses for project ID: {projectId}
        </p>
      </div>

      <ExpenseTable expenses={expenses} />
    </main>
  );
}