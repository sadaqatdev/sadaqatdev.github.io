"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light" | "midnight" | "ocean" | "sunset";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { value: Theme; label: string; colors: string }[];
}

const themes: ThemeContextType["themes"] = [
  { value: "dark", label: "Dark", colors: "bg-gray-900" },
  { value: "light", label: "Light", colors: "bg-white" },
  { value: "midnight", label: "Midnight", colors: "bg-indigo-950" },
  { value: "ocean", label: "Ocean", colors: "bg-cyan-950" },
  { value: "sunset", label: "Sunset", colors: "bg-orange-950" },
];

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  themes,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    if (saved && themes.some((t) => t.value === saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}
