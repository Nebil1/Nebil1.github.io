import React, { useState, useEffect } from "react";
import { IconMenu2, IconX, IconBrandLinkedin } from "@tabler/icons-react";
import { contact } from "../../data/siteData.js";

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certs", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setScrolledToTop(true);
        setScrollDirection("up");
      } else {
        setScrolledToTop(false);
        if (currentScrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-[100] w-full px-6 md:px-10 lg:px-12 flex h-[70px] md:h-[100px] items-center justify-between transition-all duration-300
        ${scrolledToTop ? "bg-transparent translate-y-0" : "bg-navy/85 backdrop-blur-md shadow-lg"}
        ${!scrolledToTop && scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="z-[100]">
        <a href="#hero" aria-label="home" className="flex items-center gap-2 text-teal transition-colors hover:text-teal/80">
          <span className="font-mono text-xl font-bold tracking-tight">&lt;NK/&gt;</span>
          <span className="hidden font-mono text-[13px] tracking-wide text-slate-light sm:inline">nebil@network<span className="text-teal">:~$</span></span>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <ol className="flex justify-between items-center p-0 m-0 list-none gap-6">
          {navItems.map(({ id, label }, i) => (
            <li key={i} className="relative text-[13px] text-slate-light">
              <a href={`#${id}`} className="p-2 transition hover:text-teal font-mono tracking-wide">
                <span className="text-teal mr-1.5">0{i + 1}.</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded bg-teal px-4 py-2 mt-0 font-mono text-[13px] font-medium text-navy transition-colors hover:bg-teal/90"
        >
          <IconBrandLinkedin className="h-4 w-4" />
          Connect with me
        </a>
      </div>

      <button
        type="button"
        className="md:hidden z-[110] inline-flex min-h-touch min-w-touch items-center justify-center text-teal p-2.5 rounded border border-teal/40 hover:bg-teal/10 transition-colors"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
      >
        {mobileOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
      </button>

      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 bg-navy/95 backdrop-blur-md transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full w-full flex flex-col items-center justify-center gap-8">
          <ol className="flex flex-col items-center p-0 m-0 list-none gap-4">
            {navItems.map(({ id, label }, i) => (
              <li key={id} className="text-lg text-slate-light">
                <a
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className="p-2 transition hover:text-teal font-mono tracking-wide"
                >
                  <span className="text-teal mr-1.5">0{i + 1}.</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded bg-teal px-5 py-3 font-mono text-[14px] font-medium text-navy transition-colors hover:bg-teal/90"
            onClick={() => setMobileOpen(false)}
          >
            <IconBrandLinkedin className="h-4 w-4" />
            Connect with me
          </a>
        </div>
      </div>
    </header>
  );
}
