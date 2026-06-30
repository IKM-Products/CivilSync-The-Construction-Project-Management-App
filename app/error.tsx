"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div>
          <h1 className="text-4xl font-bold">
            Something went wrong
          </h1>

          <p className="mt-2 text-muted-foreground">
            An unexpected error occurred. Please try again.
          </p>
        </div>

        <Button onClick={reset} className="w-full">
          Try Again
        </Button>
      </div>
    </main>
  );
}