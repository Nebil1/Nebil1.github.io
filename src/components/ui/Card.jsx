import { motion } from "framer-motion";

export default function Card({ className = "", children }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.6 }}
      className={`group relative rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 via-transparent to-emerald-400/10" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
