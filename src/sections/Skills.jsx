import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

export default function Skills({ skills }) {
  const layers = Object.keys(skills || {});
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="section-padding">
      <h2 className="numbered-heading">
        <span className="relative bottom-1 mr-[10px] font-mono text-[clamp(16px,3vw,20px)] font-normal tracking-wide text-teal">
          02.
        </span>
        Skill Stack
      </h2>

      <p className="mb-8 max-w-2xl text-[17px] text-slate">
        The skills below are organized like a network stack &mdash; from physical
        infrastructure up through automation and cloud tooling. Expand a layer to
        see what's inside.
      </p>

      <div className="flex max-w-3xl flex-col divide-y divide-navy-lightest overflow-hidden rounded border border-navy-lightest">
        {layers.map((category, i) => {
          const isOpen = openIndex === i;
          const layerNum = String(layers.length - i).padStart(2, "0");
          return (
            <div key={category} className="bg-navy-light/40">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-navy-light"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-wide text-teal/70">L{layerNum}</span>
                  <span className="font-mono text-[15px] font-medium tracking-wide text-slate-lightest">
                    {category}
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="hidden font-mono text-[11px] text-slate sm:inline">
                    {skills[category].length} skills
                  </span>
                  <IconChevronDown
                    className={`h-4 w-4 text-teal transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 px-5 pb-5 pt-1">
                      {skills[category].map((skill) => (
                        <span
                          key={skill}
                          className="rounded border border-teal/20 bg-teal/5 px-2.5 py-1 font-mono text-[12px] tracking-wide text-teal"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
