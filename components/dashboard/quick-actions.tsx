import Link from "next/link";

import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild>
        <Link href="/projects/create">New Project</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href="/calendar">Calendar</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href="/projects">Projects</Link>
      </Button>
    </div>
  );
}