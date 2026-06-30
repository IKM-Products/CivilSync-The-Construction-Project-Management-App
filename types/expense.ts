export interface Expense {
  id: string;
  projectId: string;

  title: string;
  category: string;
  amount: number;

  expenseDate: Date;
  description?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface CreateExpenseData {
  title: string;
  category: string;
  amount: number;
  expenseDate: Date;
  description?: string;
}

export interface UpdateExpenseData
  extends Partial<CreateExpenseData> {}

export interface ExpenseSummary {
  totalExpenses: number;
  totalMaterialCost: number;
  totalLaborCost: number;
  totalEquipmentCost: number;
  totalTransportCost: number;
  totalMiscellaneousCost: number;
}