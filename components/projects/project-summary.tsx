"use client";

import {
  Building2,
  CheckCircle2,
  Clock3,
  Wallet,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectSummaryProps {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalBudget: number;
}

export function ProjectSummary({
  totalProjects,
  activeProjects,
  completedProjects,
  totalBudget,
}: ProjectSummaryProps) {
  const cards = [
    {
      title: "Total Projects",
      value: totalProjects.toString(),
      icon: Building2,
    },
    {
      title: "Active Projects",
      value: activeProjects.toString(),
      icon: Clock3,
    },
    {
      title: "Completed Projects",
      value: completedProjects.toString(),
      icon: CheckCircle2,
    },
    {
      title: "Total Budget",
      value: `NPR ${totalBudget.toLocaleString()}`,
      icon: Wallet,
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
              <p className="text-2xl font-bold">
                {card.value}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}