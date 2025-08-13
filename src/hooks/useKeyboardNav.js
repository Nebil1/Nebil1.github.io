import { useEffect } from "react";

export default function useKeyboardNav({
  containerRef,
  sectionIds,
  setDark,
  scrollToTop,
  scrollToEl,
  getCurrentSectionIndex,
}) {
  useEffect(() => {
    const isTyping = (el) =>
      el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);

    const onKey = (e) => {
      if (isTyping(document.activeElement)) return;

      if (e.key.toLowerCase() === "t") {
        e.preventDefault();
        setDark((d) => !d);
        return;
      }

      const idx = getCurrentSectionIndex();

      if (e.key === "Escape" || e.key === "Home") {
        e.preventDefault();
        scrollToTop();
        return;
      }

      if (e.key === "End") {
        e.preventDefault();
        const c = containerRef.current;
        if (c) c.scrollTo({ top: c.scrollHeight - c.clientHeight, behavior: "smooth" });
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const c = containerRef.current;
        if (!c) return;
        const isLast = idx >= sectionIds.length - 1;
        if (isLast) {
          c.scrollTo({ top: c.scrollHeight - c.clientHeight, behavior: "smooth" });
        } else {
          const nextId = sectionIds[idx + 1];
          scrollToEl(document.getElementById(nextId));
        }
        return;
      }

      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const prevId = sectionIds[Math.max(idx - 1, 0)];
        scrollToEl(document.getElementById(prevId));
        return;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [containerRef, sectionIds, setDark, scrollToTop, scrollToEl, getCurrentSectionIndex]);
}
