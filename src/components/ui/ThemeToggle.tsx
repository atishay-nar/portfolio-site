"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="w-8 h-8 flex items-center justify-center rounded-md text-[var(--accent)] hover:opacity-70 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-opacity"
    >
      {theme === "dark" ? <HiSun className="w-4 h-4" /> : <HiMoon className="w-4 h-4" />}
    </button>
  );
}
