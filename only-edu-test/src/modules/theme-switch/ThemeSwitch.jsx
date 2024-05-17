"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();


  useEffect(() => setMounted(true), []);



  if (!mounted) return null; // Ensure component does not render until mounted

  return (
    <div className="flex items-center w-full h-full ">
      {resolvedTheme === "dark" ? (
        <FiSun
          className="text-light text-xl "
          onClick={() => setTheme("light")}
        />
      ) : (
        <FiMoon
          className="text-light text-xl sm:text-clip md:text-clip"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
