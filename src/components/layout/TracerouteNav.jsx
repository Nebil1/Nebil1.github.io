import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useActiveSection from "../../hooks/useActiveSection.js";
import { NAV_NODES } from "../../data/navNodes.js";

const ALL_IDS = ["hero", ...NAV_NODES.map((n) => n.id)];

export default function TracerouteNav({ className = "" }) {
  const activeId = useActiveSection(ALL_IDS);
  const [revealed, setRevealed] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setRevealed(NAV_NODES.length);
      return;
    }
    if (revealed >= NAV_NODES.length) return;
    const timeout = setTimeout(() => setRevealed((r) => r + 1), 320);
    return () => clearTimeout(timeout);
  }, [revealed, reduceMotion]);

  const traceDone = revealed >= NAV_NODES.length;

  return (
    <div
      className={`w-full overflow-hidden rounded-lg border border-navy-lightest/60 bg-[#0a0e18] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-navy-lightest/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-[11px] text-slate">nebil@network:~</span>
      </div>

      <nav aria-label="Section traceroute navigation" className="p-4 font-mono text-[11px] leading-relaxed sm:p-5 sm:text-[12px]">
        <p className="text-teal">$ traceroute nebil.dev</p>
        <p className="mt-1 text-slate">
          <span className="sm:hidden">tracing to nebil.dev, {NAV_NODES.length} hops:</span>
          <span className="hidden sm:inline">
            tracing route to nebil.dev [10.0.1.1] over a maximum of {NAV_NODES.length} hops:
          </span>
        </p>

        <div className="mt-3 flex flex-col gap-1">
          {NAV_NODES.map((node, i) => {
            if (i >= revealed) return null;
            const isActive = activeId === node.id;
            return (
              <motion.a
                key={node.id}
                href={`#${node.id}`}
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={`group -mx-2 flex items-center gap-x-3 rounded px-2 py-2 sm:py-1.5 transition-colors ${
                  isActive ? "bg-link/10" : "hover:bg-navy-light"
                }`}
              >
                <span className={`w-3 shrink-0 ${isActive ? "text-link" : "text-transparent"}`}>&gt;</span>
                <span className="w-4 shrink-0 text-slate">{Number(node.hop)}</span>
                <span className="hidden shrink-0 gap-2 text-slate sm:flex">
                  {node.probes.map((p, j) => (
                    <span key={j} className="w-[34px]">{p}</span>
                  ))}
                </span>
                <span
                  className={`shrink-0 transition-colors ${
                    isActive ? "text-link" : "text-slate-lightest group-hover:text-teal"
                  }`}
                >
                  {node.label.toLowerCase()}.local
                </span>
                <span className="hidden shrink-0 text-slate/50 md:inline">[{node.ip}]</span>
                <span
                  className={`ml-auto h-1.5 w-1.5 shrink-0 rounded-full ${
                    isActive ? "bg-link shadow-[0_0_6px_1px_rgba(62,224,138,0.6)]" : "bg-link/70"
                  }`}
                />
              </motion.a>
            );
          })}
        </div>

        {traceDone && (
          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-slate"
          >
            trace complete.<span className="animate-pulse text-teal">_</span>
          </motion.p>
        )}
      </nav>
    </div>
  );
}
