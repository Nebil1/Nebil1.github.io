import { useEffect, useState } from "react";
import { IconRouter, IconShieldLock, IconAccessPoint, IconServer } from "@tabler/icons-react";

const VBW = 220;
const VBH = 680;

// Point lists are authored in a "left edge" space (x=0 is the outside edge).
// For the right panel, x is mirrored (VBW - x) so devices/labels stay upright.
const TRACES = [
  {
    points: [[0, 50], [70, 50], [70, 130], [130, 130]],
    device: { icon: "router", label: "RTR-EDGE" },
    duration: 5,
  },
  {
    points: [[0, 150], [40, 150], [40, 220], [100, 220], [100, 260]],
    duration: 6.5,
  },
  { points: [[0, 320], [90, 320]], duration: 4 },
  {
    points: [[0, 390], [30, 390], [30, 450], [95, 450], [95, 500]],
    device: { icon: "shield", label: "FW-01" },
    duration: 5.5,
  },
  {
    points: [[0, 560], [60, 560], [60, 610], [130, 610]],
    device: { icon: "switch", label: "SW-ACC" },
    duration: 7,
  },
];

const DEVICE_ICONS = {
  router: IconRouter,
  shield: IconShieldLock,
  switch: IconAccessPoint,
  server: IconServer,
};

function buildPath(points, flip) {
  const mapped = points.map(([x, y]) => [flip ? VBW - x : x, y]);
  return mapped
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`)
    .join(" ");
}

export default function CircuitTraces({ side = "left", className = "" }) {
  const flip = side === "right";
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAnimate(!media.matches);
    const onChange = (e) => setAnimate(!e.matches);
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return (
    <div className={`relative h-full w-full ${className}`}>
      <svg
        viewBox={`0 0 ${VBW} ${VBH}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {TRACES.map((trace, i) => {
          const d = buildPath(trace.points, flip);
          const last = trace.points[trace.points.length - 1];
          const end = [flip ? VBW - last[0] : last[0], last[1]];
          const entry = trace.points[0];
          const entryPoint = [flip ? VBW - entry[0] : entry[0], entry[1]];

          return (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke="rgba(100,255,218,0.22)"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* marching-current dashes */}
              <path
                d={d}
                fill="none"
                stroke="rgba(100,255,218,0.55)"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeDasharray="2 10"
                vectorEffect="non-scaling-stroke"
                className={animate ? "circuit-flow" : ""}
              />

              {/* edge connector */}
              <circle cx={entryPoint[0]} cy={entryPoint[1]} r="2.5" fill="rgba(100,255,218,0.6)" />

              {/* mid bends */}
              {trace.points.slice(1, -1).map(([x, y], j) => {
                const px = flip ? VBW - x : x;
                return <circle key={j} cx={px} cy={y} r="1.6" fill="rgba(136,146,176,0.7)" />;
              })}

              {animate && (
                <circle r="2.6" fill="#3ee08a">
                  <animateMotion dur={`${trace.duration}s`} repeatCount="indefinite" path={d} />
                </circle>
              )}

              <circle cx={end[0]} cy={end[1]} r="2" fill="rgba(100,255,218,0.5)" />
            </g>
          );
        })}
      </svg>

      {/* Device chips rendered as plain HTML so icons/text never get stretched by the SVG's non-uniform scale */}
      {TRACES.filter((t) => t.device).map((trace, i) => {
        const last = trace.points[trace.points.length - 1];
        const endX = flip ? VBW - last[0] : last[0];
        const endY = last[1];
        const Icon = DEVICE_ICONS[trace.device.icon];
        return (
          <div
            key={i}
            className="pointer-events-none absolute flex flex-col items-center gap-1"
            style={{
              left: `${(endX / VBW) * 100}%`,
              top: `${(endY / VBH) * 100}%`,
              transform: flip ? "translate(-100%, -50%)" : "translate(0, -50%)",
            }}
          >
            <div
              className={`flex items-center gap-1 rounded border border-teal/30 bg-navy-light px-1.5 py-1 ${
                flip ? "flex-row-reverse" : ""
              }`}
            >
              <Icon className="h-[18px] w-[18px] text-teal" stroke={1.5} />
            </div>
            <span className="whitespace-nowrap font-mono text-[8px] tracking-wide text-slate">
              {trace.device.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
