import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-6">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          CivilSync
        </h1>

        <p className="mt-6 text-xl text-muted-foreground">
          Streamline construction projects by managing tasks, workers,
          materials, expenses, and daily reports—all from one platform.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/login">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/register">
              Create Account
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}