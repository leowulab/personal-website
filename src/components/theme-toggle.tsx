"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // To avoid inconsistent rendering results between the server and the web browser （hydration mismatch）
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) return <div className="h-9 w-9" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-lg transition hover:bg-border/50"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}