import { motion } from "framer-motion";

export default function ScrollIndicator({ sections, activeSection, onSectionClick }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => onSectionClick(section.id)}
          className="group relative w-3 h-3 rounded-full border-2 border-slate-400 dark:border-white/40"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-indigo-500"
            initial={false}
            animate={{
              scale: activeSection === section.id ? 1 : 0,
              opacity: activeSection === section.id ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Tooltip */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap dark:bg-white dark:text-slate-900">
              {section.label}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}