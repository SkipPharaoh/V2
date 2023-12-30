"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // TODO: Add switch case for the useEffect below for when the user is on dfferent routes

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Caniggia Thompson %c %c🚀 %c\n",
      "color: #fff; background: #a30b0e; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I'm currently looking for a new developer position.\n",
      "color: #fff; background: #a30b0e; padding:5px 0;",
    ]);
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
