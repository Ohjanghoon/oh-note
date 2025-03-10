import React from "react";

// icons
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeButton() {
  return (
    <button className="theme_btn bg-bg-muted/40 ring-text-muted/60 text-text-dark-secondary/80 flex items-center justify-between gap-2 rounded-lg px-2.75 py-2.75 ring-1">
      <FaSun />
    </button>
  );
}

export default ThemeButton;
