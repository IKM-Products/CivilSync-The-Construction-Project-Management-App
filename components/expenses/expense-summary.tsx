"use client";

import {
  Banknote,
  BriefcaseBusiness,
  Hammer,
  Truck,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExpenseSummaryProps {
  totalExpenses: number;
  materialCost: number;
  laborCost: number;
  transportCost: number;
}

export function ExpenseSummary({
  totalExpenses,
  materialCost,
  laborCost,
  transportCost,
}: ExpenseSummaryProps) {
  const cards = [
    {
      title: "Total Expenses",
      value: totalExpenses,
      icon: Banknote,
    },
    {
      title: "Material Cost",
      value: materialCost,
      icon: Hammer,
    },
    {
      title: "Labor Cost",
      value: laborCost,
      icon: BriefcaseBusiness,
    },
    {
      title: "Transport Cost",
      value: transportCost,
      icon: Truck,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>

              <Icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">
                NPR {card.value.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}