"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

// 1. Context 생성
const ThemeContext = createContext({
  theme: "light" as Theme,
  toggleTheme: () => {},
});

// 2. Provider 컴포넌트
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);
  // const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 사용자가 사전에 저장한 테마가 있는지 확인 => 없다면 light
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";

    setTheme(savedTheme);
    // setMounted(true);

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (!theme) return;

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: theme ?? "light", toggleTheme }}>
      {theme !== null && children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook
export function useTheme() {
  return useContext(ThemeContext);
}
