import { useEffect, useState } from "react";
import TracerouteNav from "../components/layout/TracerouteNav.jsx";
import CircuitTraces from "../components/layout/CircuitTraces.jsx";

const SKILLS = [
  "Routing & Switching",
  "Network Security & VPNs",
  "Cloud Networking (Azure/AWS)",
  "Network Automation (Python)",
];

function useTypewriter(words, { typeSpeed = 55, deleteSpeed = 30, pause = 1400 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(SKILLS);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-10 py-16 pt-24 md:gap-14 md:py-[120px] md:pt-0 lg:flex-row lg:gap-8"
    >
      {/* Positioned with right-full/left-full so these sit entirely in the
          padded gutter outside the content column, never under the headline. */}
      <div className="absolute inset-y-0 right-full z-0 hidden w-[130px] 2xl:block">
        <CircuitTraces side="left" />
      </div>
      <div className="absolute inset-y-0 left-full z-0 hidden w-[130px] 2xl:block">
        <CircuitTraces side="right" />
      </div>

      <div className="relative z-10 max-w-xl text-left">
        <p className="mb-4 flex items-center gap-2 font-mono text-[13px] tracking-wide text-link">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-link opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-link" />
          </span>
          status: online &middot; all systems operational
        </p>

        <h1 className="m-0 font-mono text-[clamp(13px,3vw,15px)] font-normal tracking-wide text-teal">
          $ whoami
        </h1>
        <h2 className="m-0 mt-2 font-sans text-[clamp(40px,8vw,76px)] font-semibold leading-[1.1] text-slate-lightest">
          Nebil Keno.
        </h2>
        <h3 className="m-0 font-sans text-[clamp(24px,5vw,40px)] font-semibold leading-[1.2] text-slate-lightest">
          Network &amp; Cloud Engineer
        </h3>

        <p className="mt-3 font-mono text-[15px] md:text-[17px] leading-[1.4] text-slate">
          <span className="text-slate">$ skills --focus=</span>
          <span className="text-teal">
            {typed}
            <span className="animate-pulse text-teal">_</span>
          </span>
        </p>

        <p className="mt-6 max-w-[480px] font-sans text-[18px] leading-[1.5] text-slate">
          Building resilient networks and cloud infrastructure &mdash; from routing,
          switching, and security to automated, monitored, cloud-connected systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-block rounded border border-teal px-7 py-4 font-mono text-[14px] tracking-wider text-teal transition-colors hover:bg-teal-tint"
          >
            $ cd ./projects
          </a>
          <a
            href="#contact"
            className="inline-block rounded border border-transparent px-7 py-4 font-mono text-[14px] tracking-wider text-slate transition-colors hover:text-teal"
          >
            ping --contact
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[440px] shrink-0">
        <TracerouteNav />
      </div>
    </section>
  );
}
