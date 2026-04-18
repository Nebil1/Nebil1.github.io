import React from 'react';
import { IconBrandGithub, IconExternalLink, IconFolder } from '@tabler/icons-react';

export default function Projects({ projects, websites }) {
  return (
    <section id="projects" className="section-padding">
      <h2 className="numbered-heading">
        <span className="text-teal font-mono text-[clamp(16px,3vw,20px)] mr-[10px] font-normal bottom-1 tracking-wide relative">
          01.
        </span>
        Some Things I've Built
      </h2>

      {/* Featured Projects (Websites) */}
      <div className="flex flex-col gap-[70px] md:gap-[100px] mt-[50px] mb-[100px]">
        {websites?.map((site, i) => {
          const isOdd = i % 2 !== 0;
          return (
            <div key={i} className="relative grid grid-cols-12 items-center md:gap-[10px]">
              
              {/* Image side */}
              <div 
                className={`relative z-[1] col-span-12 md:col-span-7 h-full shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] group 
                  ${isOdd ? 'md:col-start-6 lg:col-start-6' : 'md:col-start-1'} md:row-span-full rounded transition-all hover:z-[3]`}
              >
                <a href={site.url} className="w-full relative bg-teal block h-full rounded">
                  <div className="absolute w-full h-full inset-0 bg-navy/60 mix-blend-screen transition-all duration-300 group-hover:bg-transparent group-hover:mix-blend-normal z-10 rounded"></div>
                  <div className="absolute w-full h-full inset-0 bg-teal/20 mix-blend-multiply opacity-100 transition-opacity duration-300 group-hover:opacity-0 z-10 rounded"></div>
                  <img 
                    src={site.preview} 
                    alt={site.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover max-h-[350px] md:max-h-none md:h-full block filter grayscale transition-all duration-300 group-hover:filter-none object-top rounded opacity-30 md:opacity-100"
                  />
                </a>
              </div>

              {/* Content side */}
              <div 
                className={`relative z-[2] col-span-12 md:col-span-7 p-6 md:p-0 
                  ${isOdd ? 'md:col-start-1 md:text-left text-left' : 'md:col-start-6 md:text-right text-right'} md:col-end-[-1] row-span-full`}
              >
                <p className="my-2.5 text-teal font-mono text-[13px] font-normal tracking-wide">Featured Project</p>
                <h3 className="mb-5 text-[clamp(24px,5vw,28px)] text-slate-lightest font-semibold hover:text-teal transition-colors">
                  <a href={site.url} target="_blank" rel="noreferrer">{site.title}</a>
                </h3>
                <div 
                  className={`shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all bg-navy-light text-slate-light p-[25px] rounded z-10 relative md:text-[18px]`}
                >
                  <p>{site.description}</p>
                  {site.impact ? (
                    <p className="mt-3 text-[15px] text-slate-light">
                      <span className="text-teal font-mono text-[13px] mr-2">Outcome:</span>
                      {site.impact}
                    </p>
                  ) : null}
                </div>
                {/* Links */}
                <div className={`flex items-center mt-5 ${isOdd ? 'justify-start' : 'justify-start md:justify-end'} gap-3 text-slate-light`}>
                  <a href={site.url} target="_blank" rel="noreferrer" className="hover:text-teal p-1" aria-label="External Link">
                    <IconExternalLink className="w-5 h-5"/>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Grid Projects */}
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-[24px] md:text-[32px] text-slate-lightest font-semibold mb-2">Other Noteworthy Projects</h2>
        <a 
          href="https://github.com/Nebil1" 
          target="_blank" 
          rel="noreferrer" 
          className="font-mono text-teal text-[14px] tracking-wide mb-10 hover:text-teal/80 transition-colors inline-block"
        >
          View Complete List of Projects/Codes
        </a>
        
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 relative mt-[50px] w-full">
          {projects?.map((proj, i) => (
            <div key={i} className="transition-all duration-300 hover:-translate-y-2 relative group">
              <div className="flex justify-between flex-col items-start relative h-full bg-navy-light py-[2rem] px-[1.75rem] rounded shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all group-hover:bg-navy-lightest">
                <header className="w-full">
                  <div className="flex justify-between items-center mb-[35px]">
                    <div className="text-teal">
                      <IconFolder className="w-10 h-10 stroke-1"/>
                    </div>
                    <div className="flex items-center text-slate-light gap-3">
                      {proj.links?.map((link, j) => (
                        <a key={j} href={link.href} className="hover:text-teal transition" aria-label={link.label}>
                          {link.label === 'Code' ? <IconBrandGithub className="w-5 h-5" /> : <IconExternalLink className="w-5 h-5" />}
                        </a>
                      ))}
                    </div>
                  </div>
                  <h3 className="mb-2.5 text-[22px] text-slate-lightest font-semibold group-hover:text-teal transition">
                    <a href={proj.links?.[0]?.href || '#'} target="_blank" rel="noreferrer">{proj.title}</a>
                  </h3>
                  <div className="text-slate text-[17px] leading-[1.3] text-left">
                    <p>{proj.blurb}</p>
                    {proj.impact ? (
                      <p className="mt-3 text-[15px] text-slate-light">
                        <span className="text-teal font-mono text-[13px] mr-2">Outcome:</span>
                        {proj.impact}
                      </p>
                    ) : null}
                  </div>
                </header>
                <footer className="mt-auto pt-5">
                  <ul className="flex items-end flex-wrap p-0 m-0 list-none gap-x-[15px] gap-y-1">
                    {proj.stack?.map((tech, j) => (
                      <li key={j} className="font-mono text-[12px] text-teal tracking-wide whitespace-nowrap">{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
