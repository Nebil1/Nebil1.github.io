// src/components/layout/Navbar.jsx
import Button from "../ui/Button.jsx";
import Logo from "../Logo.jsx";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ scrolled, dark, setDark, active }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certs", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 mx-auto max-w-7xl px-4 pt-3">
      <div
        className={`flex h-14 sm:h-16 items-center justify-between rounded-2xl border px-3 sm:px-4 transition-shadow duration-300
                    border-slate-200 bg-white/55 backdrop-blur-md
                    dark:border-white/10 dark:bg-slate-950/60 dark:backdrop-blur-sm
                    ${scrolled ? "shadow-lg" : "shadow-sm"}`}
      >
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="rounded-xl border border-slate-200 bg-slate-100 p-1 transition group-hover:scale-105 dark:border-white/10 dark:bg-white/5">
            <Logo />
          </div>
          <span className="text-sm font-semibold tracking-wide opacity-90 transition group-hover:opacity-100">
            Nebil Yisehak Keno
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm sm:flex" role="navigation" aria-label="Primary">
          {navItems.map(({ id, label }) => {
            const isActive = active === id; 
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`transition underline-offset-8 ${
                  isActive ? "opacity-100 underline" : "opacity-75 hover:opacity-100 hover:underline"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            aria-label="Toggle dark mode"
            className="bg-slate-200 text-slate-900 hover:ring-2 hover:ring-slate-400 dark:bg-white/10 dark:text-white dark:hover:ring-white/40"
            onClick={() => setDark((d) => !d)}
            title="Toggle dark mode"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
