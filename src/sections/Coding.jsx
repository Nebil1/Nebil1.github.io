import React from 'react';
import { IconBrandGithub } from '@tabler/icons-react';

export default function Coding() {
  return (
    <section id="coding" className="section-padding max-w-[800px] mx-auto text-center mt-10">
      <div className="flex items-center justify-center gap-3 mb-10">
        <IconBrandGithub className="h-6 w-6 text-teal" />
        <h2 className="text-slate-lightest text-[clamp(20px,4vw,24px)] font-semibold m-0">Coding Activity</h2>
      </div>
      <div className="w-full overflow-x-auto p-5 bg-navy-light shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] rounded">
        <img 
          src="https://ghchart.rshah.org/64ffda/Nebil1" 
          alt="GitHub Contribution Graph"
          className="w-full max-w-none opacity-80 hover:opacity-100 transition-opacity mx-auto block"
        />
      </div>
    </section>
  );
}