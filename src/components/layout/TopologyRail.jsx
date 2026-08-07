import useActiveSection from "../../hooks/useActiveSection.js";
import { NAV_NODES } from "../../data/navNodes.js";

const ALL_IDS = ["hero", ...NAV_NODES.map((n) => n.id)];
const RAIL_NODES = [{ id: "hero", label: "Home", hop: "00" }, ...NAV_NODES];

export default function TopologyRail({ className = "" }) {
  const activeId = useActiveSection(ALL_IDS);

  return (
    <nav
      aria-label="Section status rail"
      className={`fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:flex flex-col gap-4 ${className}`}
    >
      <div className="absolute left-[3px] top-1 bottom-1 w-[1.5px] bg-slate/25" aria-hidden="true" />
      {RAIL_NODES.map((node) => {
        const isActive = activeId === node.id;
        return (
          <a
            key={node.id}
            href={`#${node.id}`}
            className="group flex items-center gap-3 pl-0"
            aria-current={isActive ? "true" : undefined}
          >
            <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
              {isActive && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-link opacity-60" />
              )}
              <span
                className={`relative h-2 w-2 rounded-full border transition-colors ${
                  isActive
                    ? "border-link bg-link shadow-[0_0_6px_1px_rgba(62,224,138,0.6)]"
                    : "border-slate-light/60 bg-navy group-hover:border-teal group-hover:bg-teal/30"
                }`}
              />
            </span>
            <span
              className={`font-mono text-[11px] tracking-wide opacity-50 transition-opacity group-hover:opacity-100 ${
                isActive ? "text-link opacity-100" : "text-slate-light"
              }`}
            >
              {node.hop} {node.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
