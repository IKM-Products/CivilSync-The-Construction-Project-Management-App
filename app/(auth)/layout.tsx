import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container flex min-h-screen items-center justify-center py-10">
        {children}
      </div>
    </div>
  );
}