import { motion, useSpring, useTransform } from "framer-motion";
import Button from "../components/ui/Button.jsx";
import Badge from "../components/ui/Badge.jsx";
import Card from "../components/ui/Card.jsx";
import { IconArrowRight, IconMail, IconCpu, IconCloud, IconShield } from "@tabler/icons-react";

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
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-2xl font-semibold leading-tight sm:text-3xl">
          Hi, I'm Nebil 👋 — a <span className="text-indigo-600 dark:text-indigo-400">full-stack</span> and <span className="text-emerald-600 dark:text-emerald-400">ML engineer</span> who loves building web apps that make a real impact.
        </motion.h1>



        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects">
            <Button variant="default">
              See Projects <IconArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline">
              Contact <IconMail className="h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* <div className="mt-6 flex flex-wrap gap-2 opacity-90">
          <Badge><Cloud className="mr-1 inline h-3 w-3" /> MLOps on Cloud</Badge>
          <Badge><Shield className="mr-1 inline h-3 w-3" /> Security by Design</Badge>
        </div> */}
      </div>

      <div style={{ perspective: 1000 }}>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} style={tiltStyle} className="relative">
          <Card className="relative overflow-hidden p-8 dark:bg-white/5 bg-white/90">
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-indigo-500/20 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-52 w-52 rounded-full bg-emerald-500/20 blur-2xl" />
            <div className="relative">
              <h3 className="mb-2 text-lg font-semibold">Current Focus</h3>
              <p className="text-sm text-slate-600 dark:text-white/70">What I’m doing and open to right now.</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  ["Role Focus", "Full-Stack Development • AI/ML • Cloud Security"],
                  ["Core Stack", "React • ASP.NET • Python • SQL • Azure/AWS"],
                  ["Open To", "Full-time • Internships • Remote/Hybrid"],
                  ["Beyond the Code", "Tech builder • Football fan • Lifelong learner"],
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
