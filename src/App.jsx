// src/App.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { IconArrowUp } from "@tabler/icons-react";

import useDarkMode from "./hooks/useDarkMode.js";
import useKeyboardNav from "./hooks/useKeyboardNav.js";

import { projects, skills, certs /*, featured*/ } from "./data/siteData.js";

import Aurora from "./components/layout/Aurora.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./sections/Hero.jsx";
// import FeaturedStrip from "./sections/FeaturedStrip.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Certs from "./sections/Certs.jsx";
import Contact from "./sections/Contact.jsx";

// Constants for scroll thresholds
const SCROLL_THRESHOLDS = {
  BACK_TO_TOP: 600,
  HEADER_SHADOW: 20,
  SECTION_OFFSET: 80,
  SECTION_CENTER: 0.35,
  FOOTER_OFFSET: 16,
  SCROLL_OFFSET: 24,
  SECTION_DETECTION: 40
};

export default function App() {
  // Parallax inputs (-0.5..0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  
  // Cache DOM elements to avoid repeated queries
  const sectionElementsRef = useRef(new Map());

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(m.matches);
    update();
    m.addEventListener?.("change", update);
    return () => m.removeEventListener?.("change", update);
  }, []);

  const onMouseMove = (e) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  // Scroll container + progress
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.4 });

  // Header shadow + back-to-top
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      setShowTop(el.scrollTop > SCROLL_THRESHOLDS.BACK_TO_TOP);
      setScrolled(el.scrollTop > SCROLL_THRESHOLDS.HEADER_SHADOW);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth top scroll
  const scrollToTop = () => containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  // El->container offset helper
  const getElTop = (el, container) => {
    if (!el || !container) return 0;
    const cRect = container.getBoundingClientRect?.();
    const eRect = el.getBoundingClientRect?.();
    if (!cRect || !eRect) return 0;
    return eRect.top - cRect.top + container.scrollTop;
  };

  // Theme
  const [dark, setDark] = useDarkMode();
  const themeVars = useMemo(
    () => ({ "--primary": dark ? "#6366f1" : "#4f46e5", "--primary-foreground": "#ffffff" }),
    [dark]
  );

  // Section IDs (order matters)
  const sectionIds = ["home", "projects", "skills", "experience", "certs", "contact", "footer"];

  // Scroll helpers for keyboard + programmatic jumps
  const scrollToEl = (el) => {
    const c = containerRef.current;
    if (!el || !c) return;
    const maxTop = c.scrollHeight - c.clientHeight;
    const target = Math.min(Math.max(getElTop(el, c) - SCROLL_THRESHOLDS.SCROLL_OFFSET, 0), maxTop);
    c.scrollTo({ top: target, behavior: "smooth" });
  };

  const getCurrentSectionIndex = () => {
    const c = containerRef.current;
    if (!c) return 0;
    const y = c.scrollTop;
    let idx = 0;
    for (let i = 0; i < sectionIds.length; i++) {
      const el = document.getElementById(sectionIds[i]);
      if (!el) continue;
      const top = getElTop(el, c);
      if (top - SCROLL_THRESHOLDS.SECTION_DETECTION <= y) idx = i;
    }
    return idx;
  };

  
  useKeyboardNav({ containerRef, sectionIds, setDark, scrollToTop, scrollToEl, getCurrentSectionIndex });

  // (2) Fast, lightweight active-section highlighter (rAF)
  const [active, setActive] = useState("home");
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // Cache section elements
    const els = sectionIds.map((id) => {
      let el = sectionElementsRef.current.get(id);
      if (!el) {
        el = document.getElementById(id);
        if (el) sectionElementsRef.current.set(id, el);
      }
      return el;
    }).filter(Boolean);
    let raf = 0;

    const updateActive = () => {
      raf = 0;
      const y = root.scrollTop;
      const h = root.clientHeight;

      if (y < SCROLL_THRESHOLDS.SECTION_OFFSET) {
        setActive("home");
        return;
      }

      let footerEl = sectionElementsRef.current.get('footer');
      if (!footerEl) {
        footerEl = document.getElementById("footer");
        if (footerEl) sectionElementsRef.current.set('footer', footerEl);
      }
      const footerTop = footerEl ? getElTop(footerEl, root) : Infinity;
      const centerY = y + h * SCROLL_THRESHOLDS.SECTION_CENTER;

      if (centerY >= footerTop + SCROLL_THRESHOLDS.FOOTER_OFFSET) {
        setActive("footer");
        return;
      }

      let bestId = "home";
      let bestDist = Infinity;
      for (const el of els) {
        if (el.id === "footer") continue;
        const top = getElTop(el, root);
        const dist = Math.abs(top - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = el.id;
        }
      }
      setActive(bestId);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(updateActive);
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    updateActive();

    return () => {
      root.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // (3) Snap suppressor: disable while the user is touching
  const snapTimeoutRef = useRef(null);
  const disableSnapTemporarily = (ms = 700) => {
    const c = containerRef.current;
    if (!c) return;
    c.classList.add("snap-none");
    if (snapTimeoutRef.current) {
      window.clearTimeout(snapTimeoutRef.current);
    }
    snapTimeoutRef.current = window.setTimeout(() => {
      c?.classList.remove("snap-none");
      snapTimeoutRef.current = null;
    }, ms);
  };

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    const onTouchStart = () => disableSnapTemporarily(900);
    const onTouchMove = () => disableSnapTemporarily(900);

    let endTimer = 0;
    const onScrollEndish = () => {
      window.clearTimeout(endTimer);
      endTimer = window.setTimeout(() => c.classList.remove("snap-none"), 140);
    };

    c.addEventListener("touchstart", onTouchStart, { passive: true });
    c.addEventListener("touchmove", onTouchMove, { passive: true });
    c.addEventListener("scroll", onScrollEndish, { passive: true });
    c.addEventListener?.("scrollend", onScrollEndish);

    return () => {
      c.removeEventListener("touchstart", onTouchStart);
      c.removeEventListener("touchmove", onTouchMove);
      c.removeEventListener("scroll", onScrollEndish);
      c.removeEventListener?.("scrollend", onScrollEndish);
      window.clearTimeout(endTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      className="h-screen overflow-y-auto overscroll-y-contain scroll-smooth pt-2 sm:pt-4
           bg-gradient-to-b from-slate-50 via-indigo-50/30 to-emerald-50/20 text-slate-900
           selection:bg-indigo-500/40 selection:text-white
           dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100
           snap-none sm:snap-y sm:snap-proximity lg:snap-mandatory relative"
      style={{ 
        touchAction: "pan-y pinch-zoom", 
        WebkitOverflowScrolling: "touch",
        ["--tw-ring-color"]: "var(--primary)", 
        ...themeVars 
      }}
    >
      {/* Progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-300"
      />

      {/* Aurora (already pointer-events-none inside component) */}
      <Aurora mx={mx} my={my} reduceMotion={reduceMotion} />

      {/* Navbar with active highlight */}
      <Navbar scrolled={scrolled} dark={dark} setDark={setDark} active={active} />

      {/* Hero (+ tap-safe See Projects) */}
      <main id="home" className="mx-auto max-w-7xl px-4">
        <Hero
          mx={mx}
          my={my}
          reduceMotion={reduceMotion}
          onSeeProjects={() => {
            const el = document.getElementById("projects");
            if (!el) return;
            disableSnapTemporarily(750);
            scrollToEl(el);
          }}
        />
        {/* Optional logos strip */}
        {/* <FeaturedStrip featured={featured} /> */}
      </main>

      {/* Sections (ensure each uses 'snap-start' at its root) */}
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Experience />
      <Certs certs={certs} />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 20, pointerEvents: showTop ? "auto" : "none" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[65] rounded-full border border-slate-200 bg-white/90 p-2 sm:p-3 shadow-lg backdrop-blur-sm hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70 touch-manipulation"
        aria-label="Back to top"
        title="Back to top"
      >
        <IconArrowUp className="h-5 w-5" />
      </motion.button>

      {/* Tiny CSS vars */}
      <style>{`
        :root { --primary: #6366f1; --primary-foreground: #ffffff; }
        .dark .bg-primary { background-color: var(--primary) }
        .bg-primary { background-color: var(--primary) }
        .text-primary-foreground { color: var(--primary-foreground) }
      `}</style>
    </div>
  );
}
