// src/components/layout/Navbar.jsx
import { useState } from "react";
import Button from "../ui/Button.jsx";
import MagneticWrapper from "../ui/MagneticWrapper.jsx";
import Logo from "../Logo.jsx";
import { IconMoon, IconSun, IconMenu2, IconX } from "@tabler/icons-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certs", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ scrolled, dark, setDark, active }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mx-auto max-w-7xl px-2 sm:px-4 pt-2 sm:pt-3">
      <div
        className={`flex h-12 sm:h-14 md:h-16 items-center justify-between rounded-xl sm:rounded-2xl border px-2 sm:px-3 md:px-4 transition-shadow duration-300
                    border-slate-200 bg-white/55 backdrop-blur-md
                    dark:border-white/10 dark:bg-slate-950/60 dark:backdrop-blur-sm
                    ${scrolled ? "shadow-lg" : "shadow-sm"}`}
      >
        <a href="#home" className="group inline-flex items-center gap-1 sm:gap-2 touch-manipulation">
          <div className="rounded-lg sm:rounded-xl border border-slate-200 bg-slate-100 p-0.5 sm:p-1 transition group-hover:scale-105 dark:border-white/10 dark:bg-white/5">
            <Logo />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide opacity-90 transition group-hover:opacity-100 hidden xs:inline">
            Nebil Yisehak
          </span>
        </a>

        <nav className="hidden items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm md:flex" role="navigation" aria-label="Primary">
          {navItems.map(({ id, label }) => {
            const isActive = active === id; 
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`transition underline-offset-4 sm:underline-offset-8 touch-manipulation py-2 ${
                  isActive ? "opacity-100 underline" : "opacity-75 hover:opacity-100 hover:underline"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="secondary"
          className="md:hidden p-2 touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <IconX className="h-4 w-4" /> : <IconMenu2 className="h-4 w-4" />}
        </Button>

        <div className="flex items-center gap-1 sm:gap-2">
          <MagneticWrapper>
            <Button
              aria-label="Toggle dark mode"
              variant="secondary"
              className="p-2 sm:p-2.5 touch-manipulation"
              onClick={() => setDark((d) => !d)}
              title="Toggle dark mode"
            >
              {dark ? <IconSun className="h-3 w-3 sm:h-4 sm:w-4" /> : <IconMoon className="h-3 w-3 sm:h-4 sm:w-4" />}
            </Button>
          </MagneticWrapper>
        
          <a
            href="https://drive.google.com/file/d/1Fx1kNVYCJXgas7DEsSgnBf4YC1nUV9FZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-manipulation"
          >
            <Button variant="default" className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2">
              <span className="hidden sm:inline">Résumé</span>
              <span className="sm:hidden">CV</span>
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-xl border border-slate-200 bg-white/95 backdrop-blur-md p-4 shadow-lg dark:border-white/10 dark:bg-slate-950/95">
          <nav className="flex flex-col gap-3" role="navigation" aria-label="Mobile">
            {navItems.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`py-2 px-3 rounded-lg transition touch-manipulation text-sm ${
                    isActive 
                      ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400" 
                      : "hover:bg-slate-50 dark:hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
