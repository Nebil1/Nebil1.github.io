import React from 'react';
import { IconGitCommit, IconCode, IconChartBar } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function Coding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="coding" className="section-padding max-w-[1000px] mx-auto">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="w-full"
      >
        <h2 className="numbered-heading">
          <span className="text-teal font-mono text-[clamp(16px,3vw,20px)] mr-[10px] font-normal bottom-1 tracking-wide relative">
            04.
          </span>
          Github Activity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          
          {/* Main Heatmap - spans full width */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-navy-light shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] rounded transition-transform hover:-translate-y-1 duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6 text-slate-lightest">
              <IconGitCommit className="w-6 h-6 text-teal" />
              <h3 className="font-semibold text-xl m-0">Contribution Matrix</h3>
            </div>
            <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
              <img 
                src="https://ghchart.rshah.org/8892b0/Nebil1" 
                alt="GitHub Contribution Graph"
                className="w-full min-w-[700px] max-w-none opacity-80 group-hover:opacity-100 transition-opacity mx-auto block pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Github Stats */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-1 lg:col-span-2 p-6 bg-navy-light shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] rounded transition-transform hover:-translate-y-1 duration-300 group"
          >
             <div className="flex items-center gap-3 mb-4 text-slate-lightest">
              <IconChartBar className="w-6 h-6 text-teal" />
              <h3 className="font-semibold text-xl m-0">Statistics</h3>
            </div>
            <div className="flex justify-center items-center w-full">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=Nebil1&show_icons=true&title_color=64ffda&icon_color=64ffda&text_color=8892b0&bg_color=112240&hide_border=true&border_radius=0&hide_title=true&count_private=true"
                alt="GitHub Stats"
                className="w-full h-auto max-w-[450px] opacity-80 group-hover:opacity-100 transition-opacity object-contain py-2"
              />
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-1 lg:col-span-1 p-6 bg-navy-light shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] rounded transition-transform hover:-translate-y-1 duration-300 group"
          >
             <div className="flex items-center gap-3 mb-4 text-slate-lightest">
              <IconCode className="w-6 h-6 text-teal" />
              <h3 className="font-semibold text-xl m-0">Top Languages</h3>
            </div>
            <div className="flex justify-center items-center w-full">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nebil1&layout=compact&title_color=64ffda&text_color=8892b0&bg_color=112240&hide_border=true&border_radius=0&card_width=320&hide_title=true"
                alt="Top Languages"
                className="w-full h-auto max-w-[320px] opacity-80 group-hover:opacity-100 transition-opacity object-contain"
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}