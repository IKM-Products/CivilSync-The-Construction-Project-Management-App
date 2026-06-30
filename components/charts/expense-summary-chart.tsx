import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExpenseSummaryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Summary</CardTitle>
      </CardHeader>

      <CardContent className="flex h-72 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Expense summary chart will be displayed here.
        </p>
      </CardContent>
    </Card>
  );
}