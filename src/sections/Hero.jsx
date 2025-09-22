import { motion, useSpring, useTransform } from "framer-motion";
import Button from "../components/ui/Button.jsx";
import Badge from "../components/ui/Badge.jsx";
import Card from "../components/ui/Card.jsx";
import { IconArrowRight, IconMail, IconCode, IconDatabase, IconCloud, IconBrain, IconRocket, IconBallFootball, IconCoffee, IconBrandReact, IconShield, IconBrandPython, IconBrandAzure, IconBulb, IconHeart, IconStar, IconBrandGithub } from "@tabler/icons-react";

export default function Hero({ mx, my, reduceMotion }) {
  // 3D tilt tied to parallax
  const rotX = useTransform(my, (v) => v * -8);
  const rotY = useTransform(mx, (v) => v * 8);
  const tiltStyle = reduceMotion
    ? {}
    : {
        rotateX: useSpring(rotX, { stiffness: 400, damping: 25 }),
        rotateY: useSpring(rotY, { stiffness: 400, damping: 25 }),
        transformStyle: "preserve-3d",
      };

  return (
    <section className="relative grid items-center gap-10 min-h-[calc(100vh-6rem)] sm:grid-cols-2 py-16 sm:py-24 snap-start scroll-mt-24 overflow-hidden">
      {/* Floating animated icons */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 opacity-20 dark:opacity-10"
      >
        <IconCode className="h-8 w-8 text-indigo-500" />
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-32 right-20 opacity-20 dark:opacity-10"
      >
        <IconDatabase className="h-6 w-6 text-emerald-500" />
      </motion.div>
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, -90, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-20 opacity-20 dark:opacity-10"
      >
        <IconCloud className="h-7 w-7 text-purple-500" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -25, 10], x: [-5, 5, -5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-40 right-10 opacity-20 dark:opacity-10"
      >
        <IconBrain className="h-6 w-6 text-pink-500" />
      </motion.div>
      <motion.div
        animate={{ y: [-10, 30, -10], rotate: [0, 45, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 right-32 opacity-20 dark:opacity-10"
      >
        <IconRocket className="h-5 w-5 text-orange-500" />
      </motion.div>
      <motion.div
        animate={{ y: [15, -15, 15], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-16 left-32 opacity-20 dark:opacity-10"
      >
        <IconBallFootball className="h-6 w-6 text-green-600" />
      </motion.div>
      <motion.div
        animate={{ y: [-12, 18, -12], x: [0, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute bottom-40 left-8 opacity-20 dark:opacity-10"
      >
        <IconCoffee className="h-5 w-5 text-amber-600" />
      </motion.div>
      <motion.div
        animate={{ y: [8, -22, 8], rotate: [0, -180, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-24 right-8 opacity-20 dark:opacity-10"
      >
        <IconBrandReact className="h-7 w-7 text-cyan-500" />
      </motion.div>
      <motion.div
        animate={{ y: [-18, 12, -18], x: [5, -5, 5] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-16 left-40 opacity-20 dark:opacity-10"
      >
        <IconShield className="h-6 w-6 text-red-500" />
      </motion.div>
      <motion.div
        animate={{ y: [12, -28, 12], rotate: [0, 90, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-48 left-16 opacity-20 dark:opacity-10"
      >
        <IconBrandPython className="h-6 w-6 text-yellow-500" />
      </motion.div>
      <motion.div
        animate={{ y: [-8, 25, -8], x: [-3, 8, -3] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        className="absolute bottom-28 right-16 opacity-20 dark:opacity-10"
      >
        <IconBrandAzure className="h-5 w-5 text-blue-600" />
      </motion.div>
      <motion.div
        animate={{ y: [20, -16, 20], rotate: [0, -45, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
        className="absolute top-36 left-24 opacity-20 dark:opacity-10"
      >
        <IconBulb className="h-5 w-5 text-yellow-400" />
      </motion.div>
      <motion.div
        animate={{ y: [-14, 20, -14], x: [0, 6, 0] }}
        transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-36 right-24 opacity-20 dark:opacity-10"
      >
        <IconHeart className="h-4 w-4 text-rose-500" />
      </motion.div>
      <motion.div
        animate={{ y: [16, -12, 16], rotate: [0, 180, 360] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
        className="absolute top-28 right-40 opacity-20 dark:opacity-10"
      >
        <IconStar className="h-4 w-4 text-indigo-400" />
      </motion.div>
      <motion.div
        animate={{ y: [-22, 14, -22], x: [8, -8, 8] }}
        transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute bottom-24 left-28 opacity-20 dark:opacity-10"
      >
        <IconBrandGithub className="h-6 w-6 text-gray-600" />
      </motion.div>
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }} 
          className="text-2xl font-semibold leading-tight sm:text-3xl"
        >
          Hi, I'm Nebil 👋 — I <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.8, 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="text-indigo-600 dark:text-indigo-400 font-bold"
          >build</motion.span> <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 1.2, 
              duration: 1.0, 
              ease: [0.34, 1.56, 0.64, 1],
              type: "spring",
              stiffness: 120,
              damping: 12
            }}
            className="text-emerald-600 dark:text-emerald-400"
          >secure & scalable</motion.span> web applications using <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.6, 
              duration: 1.3, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 18
            }}
            className="text-purple-600 dark:text-purple-400 font-semibold"
          >Python, ASP.NET, and cloud technologies</motion.span>.
        </motion.h1>


        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
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
        </motion.div>
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
                  ["Role Focus", "Software Engineer • Web Security • Full-Stack"],
                  ["Core Stack", "ASP.NET • Python • React • Azure"],
                  ["Open To", "Full-time • Remote/Hybrid"],
                  ["Beyond the Code", "Football fan • Coffee • Travel"],
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
