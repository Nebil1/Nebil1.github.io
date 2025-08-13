import { motion, useSpring, useTransform } from "framer-motion";
import Button from "../components/ui/Button.jsx";
import Badge from "../components/ui/Badge.jsx";
import Card from "../components/ui/Card.jsx";
import { ArrowRight, Mail, Cpu, Cloud, Shield } from "lucide-react";

export default function Hero({ mx, my, reduceMotion }) {
  // 3D tilt tied to parallax
  const rotX = useTransform(my, (v) => v * -8);
  const rotY = useTransform(mx, (v) => v * 8);
  const tiltStyle = reduceMotion
    ? {}
    : {
        rotateX: useSpring(rotX, { stiffness: 120, damping: 18 }),
        rotateY: useSpring(rotY, { stiffness: 120, damping: 18 }),
        transformStyle: "preserve-3d",
      };

  return (
    <section className="grid items-center gap-10 min-h-[calc(100vh-6rem)] sm:grid-cols-2 py-16 sm:py-24 snap-start scroll-mt-24">
      <div>
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-4xl font-semibold leading-tight sm:text-5xl">
          Building reliable <span className="text-indigo-600 dark:text-indigo-400">AI systems</span>
          <br />with a <span className="text-emerald-600 dark:text-emerald-400">security-first</span> mindset
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }} className="mt-4 max-w-xl text-slate-600 dark:text-white/70">
          I design, train, and deploy ML models—then harden them for production on cloud. My focus areas are computer vision, MLOps, and cloud security.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects">
            <Button className="bg-slate-900 text-white hover:ring-2 hover:ring-slate-700 focus:ring-slate-700 dark:bg-white dark:text-slate-900 dark:hover:ring-white/50">
              See Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button className="bg-transparent text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:text-white dark:ring-white/30 dark:hover:bg-white/5">
              Contact <Mail className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 opacity-90">
          <Badge><Cpu className="mr-1 inline h-3 w-3" /> CV & Vision</Badge>
          <Badge><Cloud className="mr-1 inline h-3 w-3" /> MLOps on Cloud</Badge>
          <Badge><Shield className="mr-1 inline h-3 w-3" /> Security by Design</Badge>
        </div>
      </div>

      <div style={{ perspective: 1000 }}>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} style={tiltStyle} className="relative">
          <Card className="relative overflow-hidden p-6 dark:bg-white/5 bg-white/90">
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-indigo-500/20 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-52 w-52 rounded-full bg-emerald-500/20 blur-2xl" />
            <div className="relative">
              <h3 className="mb-2 text-lg font-semibold">Current Focus</h3>
              <p className="text-sm text-slate-600 dark:text-white/70">What I’m doing and open to right now.</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  ["Role Focus", "AI/ML · MLOps · Cloud Security"],
                  ["Open To", "Full-time · Internship · Remote/Hybrid"],
                  ["Core Stack", "PyTorch · Python · Docker · AWS/Azure"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-indigo-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-white/60">{k}</div>
                    <div className="mt-1 font-medium">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
