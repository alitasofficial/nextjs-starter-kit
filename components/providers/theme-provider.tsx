"use client";

import { ThemeProvider as Provider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <Provider {...props}>{children}</Provider>;
}
