import { useEffect, useState } from "react";

export default function useDarkMode(defaultDark = false) {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return defaultDark;
    
    const stored = localStorage.getItem("ai-portfolio-theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return (
      defaultDark ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("ai-portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      const stored = localStorage.getItem("ai-portfolio-theme");
      if (!stored) setDark(e.matches);
    };
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return [dark, setDark];
}
