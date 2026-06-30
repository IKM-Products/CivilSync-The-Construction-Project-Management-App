import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Projects</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">0</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Tasks</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">0</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workers</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">0</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Expenses</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">$0</p>
        </CardContent>
      </Card>
    </div>
  );
}