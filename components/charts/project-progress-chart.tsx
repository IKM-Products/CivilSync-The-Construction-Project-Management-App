import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>

      <CardContent className="flex h-72 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Project progress chart will be displayed here.
        </p>
      </CardContent>
    </Card>
  );
}