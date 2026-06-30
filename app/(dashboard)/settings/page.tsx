import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <main className="space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and application preferences.
        </p>
      </section>

      {/* Settings Cards */}
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>

          <CardContent className="flex h-40 items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Update your personal information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>

          <CardContent className="flex h-40 items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Change your email or password.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>

          <CardContent className="flex h-40 items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Configure notification preferences.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>

          <CardContent className="flex h-40 items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Customize the application's appearance.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}