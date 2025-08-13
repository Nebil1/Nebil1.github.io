import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Aurora({ mx, my, reduceMotion = false }) {
  const depth1 = 80, depth2 = 140, depth3 = 220;

  const x1 = useSpring(useTransform(mx, v => v * depth1), { stiffness:120, damping:20, mass:0.5 });
  const y1 = useSpring(useTransform(my, v => v * depth1), { stiffness:120, damping:20, mass:0.5 });
  const x2 = useSpring(useTransform(mx, v => v * depth2), { stiffness:120, damping:20, mass:0.5 });
  const y2 = useSpring(useTransform(my, v => v * depth2), { stiffness:120, damping:20, mass:0.5 });
  const x3 = useSpring(useTransform(mx, v => v * depth3), { stiffness:120, damping:22, mass:0.6 });
  const y3 = useSpring(useTransform(my, v => v * depth3), { stiffness:120, damping:22, mass:0.6 });

  useEffect(() => {
    if (!reduceMotion) return;
    x1.set(0); y1.set(0); x2.set(0); y2.set(0); x3.set(0); y3.set(0);
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div style={{ x: x1, y: y1 }} className="absolute -left-40 -top-40 h-[48rem] w-[48rem] rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
      <motion.div style={{ x: x2, y: y2 }} className="absolute -right-40 -bottom-40 h-[48rem] w-[48rem] rounded-full bg-gradient-to-tr from-emerald-400/20 via-sky-500/20 to-purple-500/20 blur-3xl" />
      <motion.div style={{ x: x3, y: y3 }} initial={{ opacity: 0.45 }} animate={{ opacity: [0.35, 0.55, 0.45] }} transition={{ duration: 10, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.07),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.06),transparent_45%)]" />
    </div>
  );
}
