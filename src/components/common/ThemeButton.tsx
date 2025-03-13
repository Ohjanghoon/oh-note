"use client";

import { useTheme } from "@/contexts/ThemeContext";
import React from "react";

// icons
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="theme_btn bg-bg- ring-text-muted/60 flex items-center justify-between gap-2 rounded-lg p-2 ring-1 md:p-2.75"
      onClick={toggleTheme}
    >
      <div className="flex items-center gap-2">
        {theme === "light" ? (
          <>
            <FaSun className="text-primary-light" />
            <span className="min-w-10 md:hidden">Light</span>
          </>
        ) : (
          <>
            <FaMoon className="text-amber-400" />
            <span className="min-w-10 md:hidden">Dark</span>
          </>
        )}
      </div>
    </button>
  );
}

export default ThemeButton;
