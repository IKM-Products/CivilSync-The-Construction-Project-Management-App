"use client";

import { Bell, Search } from "lucide-react";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { UserAvatar } from "@/components/shared/user-avatar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Search */}
      <div className="relative hidden w-full max-w-md md:block">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search projects, workers..."
          className="pl-10"
        />
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
        >
          <Bell className="h-5 w-5" />
        </Button>

        <ThemeToggle />

        <UserAvatar
          name="John Doe"
          email="john@example.com"
        />
      </div>
    </header>
  );
}