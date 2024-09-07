"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2"
        >
          {theme === "dark" ? "🌞" : "🌜"}
        </button>
      )}
    </>
  );
};

export default Theme;
