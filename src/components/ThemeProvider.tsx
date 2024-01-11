"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { usePathname } from "next/navigation";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname();

  switch (pathname) {
    case "/work":
      console.clear();
      console.log.apply(console, [
        "%c These are some of my notable projects I worked on. 🍾\n",
        "color: #fff; background: #8000ff; padding:5px 0;",
      ]);
      break;
    case "/about":
      console.clear();
      console.log.apply(console, [
        "%c A brief intro about my self. Well a little brag about myself. 🐼\n",
        "color: #fff; background: #8000ff; padding:5px 0;",
      ]);
      break;
    case "/tech":
      console.clear();
      console.log.apply(console, [
        "%c Tech Stack I loved to work on. 🍾\n",
        "color: #fff; background: #8000ff; padding:5px 0;",
      ]);
      break;
    default:
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
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
