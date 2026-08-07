import React from 'react';
import {
  IconBrandGithub,
  IconExternalLink,
  IconTopologyStar3,
  IconCloud,
  IconShieldLock,
  IconRouter,
  IconTerminal2,
} from '@tabler/icons-react';
import TiltCard from '../components/ui/TiltCard.jsx';
import ProtocolBadge from '../components/ui/ProtocolBadge.jsx';

const ICONS = {
  IconTopologyStar3,
  IconCloud,
  IconShieldLock,
  IconRouter,
  IconTerminal2,
};

function ProjectIcon({ name }) {
  const Icon = ICONS[name] || IconTopologyStar3;
  return <Icon className="h-9 w-9 stroke-1" />;
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-padding">
      <h2 className="numbered-heading">
        <span className="text-teal font-mono text-[clamp(16px,3vw,20px)] mr-[10px] font-normal bottom-1 tracking-wide relative">
          01.
        </span>
        Network &amp; Cloud Labs
      </h2>

      {/* Lab / build cards */}
      <div className="flex flex-col items-center mt-[50px]">
        <h2 className="text-[24px] md:text-[32px] text-slate-lightest font-semibold mb-2">Other Builds &amp; Labs</h2>
        <a
          href="https://github.com/Nebil1"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-teal text-[14px] tracking-wide mb-10 hover:text-teal/80 transition-colors inline-block"
        >
          $ git clone github.com/Nebil1
        </a>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 relative mt-[50px] w-full">
          {projects?.map((proj, i) => (
            <TiltCard key={i} intensity={0.08} className="h-full">
              <div className="flex justify-between flex-col items-start relative h-full bg-navy-light py-[2rem] px-[1.75rem] rounded border border-navy-lightest/40 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-colors hover:border-teal/40">
                <header className="w-full">
                  <div className="flex justify-between items-center mb-[35px]">
                    <div className="text-teal">
                      <ProjectIcon name={proj.icon} />
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
                  <div className="flex flex-wrap gap-2">
                    {proj.stack?.map((tech, j) => (
                      <ProtocolBadge key={j}>{tech}</ProtocolBadge>
                    ))}
                  </div>
                </footer>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
