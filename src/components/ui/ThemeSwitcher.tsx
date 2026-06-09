"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[68px] h-[34px] rounded-full glass-panel" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center w-[68px] h-[34px] rounded-full p-1 transition-colors duration-500 ease-in-out border border-[var(--glass-border)] shadow-inner"
      style={{
        backgroundColor: isDark ? "rgba(10, 10, 10, 0.8)" : "rgba(224, 231, 255, 0.5)",
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-[26px] h-[26px] rounded-full flex items-center justify-center shadow-md border border-[var(--glass-border)]"
        initial={false}
        animate={{
          x: isDark ? 0 : 34,
          backgroundColor: isDark ? "#1d2022" : "#ffffff",
          rotate: isDark ? 0 : 360,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isDark ? (
          <Moon size={14} className="text-[#adc6ff]" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
