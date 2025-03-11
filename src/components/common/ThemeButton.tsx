"use client";

import { useTheme } from "@/contexts/ThemeContext";
import React from "react";

// icons
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  console.log("theme ===> ", theme);
  console.log("toggleTheme ===> ", toggleTheme);

  return (
    <button
      className="theme_btn bg-bg-muted/40 ring-text-muted/60 flex items-center justify-between gap-2 rounded-lg px-2.75 py-2.75 ring-1"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FaSun className="text-text-dark-secondary/80" />
      ) : (
        <FaMoon className="text-amber-400" />
      )}
    </button>
  );
}

export default ThemeButton;
