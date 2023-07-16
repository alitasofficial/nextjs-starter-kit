import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starter Template",
  description:
    "A starter template for Next.js with TypeScript, Tailwind CSS, Next Themes and Shadcn UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
