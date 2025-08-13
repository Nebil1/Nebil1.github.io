// src/App.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

import useDarkMode from "./hooks/useDarkMode.js";
import useKeyboardNav from "./hooks/useKeyboardNav.js";

import { projects, skills, certs, featured } from "./data/siteData.js";

import Aurora from "./components/layout/Aurora.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./sections/Hero.jsx";
import FeaturedStrip from "./sections/FeaturedStrip.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Certs from "./sections/Certs.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  // Parallax inputs (-0.5..0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [reduceMotion, setReduceMotion] = useState(false);

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

  // Shadow + back-to-top
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      setShowTop(el.scrollTop > 600);
      setScrolled(el.scrollTop > 20);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Define scrollToTop
  const scrollToTop = () =>
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  // Safer element->container offset helper
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

  // Sections
  const sectionIds = ["home", "projects", "skills", "experience", "certs", "contact", "footer"];

  // Keyboard navigation (uses helpers below)
  const scrollToEl = (el) => {
    const c = containerRef.current;
    if (!el || !c) return;
    const maxTop = c.scrollHeight - c.clientHeight;
    const target = Math.min(Math.max(getElTop(el, c) - 24, 0), maxTop);
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
      if (top - 40 <= y) idx = i;
    }
    return idx;
  };

  useKeyboardNav({ containerRef, sectionIds, setDark, scrollToTop, scrollToEl, getCurrentSectionIndex });

  // Active section highlight (IntersectionObserver tied to scroll container)
  // Active section (highlight in navbar)
const [active, setActive] = useState("home");

useEffect(() => {
  const root = containerRef.current;
  if (!root) return;

  const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  let raf = 0;

  const updateActive = () => {
    raf = 0;

    const y = root.scrollTop;
    const h = root.clientHeight;

    // Home guard
    if (y < 80) {
      setActive("home");
      return;
    }

    // Footer-aware guard: only switch to footer when the center line is inside footer
    const footerEl = document.getElementById("footer");
    const footerTop = footerEl ? getElTop(footerEl, root) : Infinity;
    const centerY = y + h * 0.35;

    if (centerY >= footerTop + 16) {
      setActive("footer");
      return;
    }

    // Pick the section whose TOP is closest to the center line
    let bestId = "home";
    let bestDist = Infinity;

    for (const el of els) {
      // Skip footer in the main competition so Contact can win near the bottom
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

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      className="h-screen overflow-y-auto scroll-smooth pt-4
           bg-gradient-to-b from-slate-50 via-indigo-50/30 to-emerald-50/20 text-slate-900
           selection:bg-indigo-500/40 selection:text-white
           dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100
           snap-y snap-mandatory relative"
      style={{ ["--tw-ring-color"]: "var(--primary)", ...themeVars }}
    >
      {/* Progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-300"
      />

      {/* Aurora */}
      <Aurora mx={mx} my={my} reduceMotion={reduceMotion} />

      {/* Navbar (now receives 'active') */}
     <Navbar scrolled={scrolled} dark={dark} setDark={setDark} active={active} />

      {/* Hero + Featured */}
      <main id="home" className="mx-auto max-w-7xl px-4">
        <Hero mx={mx} my={my} reduceMotion={reduceMotion} />
        <FeaturedStrip featured={featured} />
      </main>

      {/* Data-driven sections */}
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
        className="fixed bottom-6 right-6 z-[65] rounded-full border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur-sm hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
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
