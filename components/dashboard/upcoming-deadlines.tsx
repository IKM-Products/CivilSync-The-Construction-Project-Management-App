import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Deadlines</CardTitle>
      </CardHeader>

      <CardContent className="flex h-72 items-center justify-center">
        <p className="text-muted-foreground">
          Upcoming deadlines will appear here.
        </p>
      </CardContent>
    </Card>
  );
}