import { useTheme } from "next-themes";

const useDarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // You can add more logic or features to your custom hook here

  return { systemTheme, theme, setTheme, currentTheme };
};

export default useDarkMode;
