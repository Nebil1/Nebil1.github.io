import { motion } from "framer-motion";

export default function Button({ className = "", children, ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 touch-manipulation min-h-[44px] sm:min-h-[40px] ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
