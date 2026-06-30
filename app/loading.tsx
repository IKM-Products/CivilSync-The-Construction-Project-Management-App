import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />

        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Loading CivilSync...
          </h2>

          <p className="text-sm text-muted-foreground">
            Please wait while we prepare your workspace.
          </p>
        </div>
      </div>
    </main>
  );
}