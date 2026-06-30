import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CivilSync",
  description: "Construction Project Management App",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body className={inter.className}>
        <ThemeProvider>
          {children}

          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}