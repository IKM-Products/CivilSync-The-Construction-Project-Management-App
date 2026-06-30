import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TaskStatusChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Status</CardTitle>
      </CardHeader>

      <CardContent className="flex h-72 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Task status chart will be displayed here.
        </p>
      </CardContent>
    </Card>
  );
}