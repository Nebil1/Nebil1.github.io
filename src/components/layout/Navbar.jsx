import React, { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

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
        <a href="#hero" aria-label="home" className="text-teal hover:text-teal/80 transition-colors">
          <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" className="w-10 h-10 fill-none stroke-teal stroke-[5px] stroke-linecap-round stroke-linejoin-round">
            <title>Logo</title>
            <g transform="translate(-8.000000, -2.000000)">
              <g transform="translate(11.000000, 5.000000)">
                <polygon id="Shape" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon>
                <text x="39" y="55" fontSize="45" fontFamily="sans-serif" fill="currentColor" stroke="none" textAnchor="middle">N</text>
              </g>
            </g>
          </svg>
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
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal bg-transparent border border-teal rounded font-mono text-[13px] px-4 py-2 mt-0 transition-colors hover:bg-teal-tint"
        >
          Resume
        </a>
      </div>

      <button
        type="button"
        className="md:hidden z-[110] inline-flex items-center justify-center text-teal p-2 rounded border border-teal/40 hover:bg-teal/10 transition-colors"
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal bg-transparent border border-teal rounded font-mono text-[14px] px-5 py-3 transition-colors hover:bg-teal-tint"
            onClick={() => setMobileOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
