import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>

      <CardContent className="flex h-72 items-center justify-center">
        <p className="text-muted-foreground">
          Project overview will be displayed here.
        </p>
      </CardContent>
    </Card>
  );
}