"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

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
