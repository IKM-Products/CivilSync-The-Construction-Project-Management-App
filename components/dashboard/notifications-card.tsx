import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NotificationsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>

      <CardContent className="flex h-72 items-center justify-center">
        <p className="text-muted-foreground">
          Notifications will appear here.
        </p>
      </CardContent>
    </Card>
  );
}