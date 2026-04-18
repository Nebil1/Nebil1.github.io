import React from 'react';
import { IconExternalLink, IconCertificate } from '@tabler/icons-react';

export default function Certs({ certs }) {
  return (
    <section id="certs" className="section-padding max-w-[800px] mx-auto">
      <h2 className="numbered-heading">
        <span className="text-teal font-mono text-[clamp(16px,3vw,20px)] mr-[10px] font-normal bottom-1 tracking-wide relative">
          03.
        </span>
        Certifications
      </h2>
      <ul className="m-0 p-0 list-none mt-10">
        {certs?.map((c, i) => (
          <li key={i} className="mb-5 p-5 bg-navy-light rounded transition-transform hover:-translate-y-1 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] group">
            <a href={c.link} target="_blank" rel="noreferrer" className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <IconCertificate className="w-6 h-6 text-teal stroke-1" />
                <span className="text-slate-lightest text-[16px] md:text-[18px] font-semibold group-hover:text-teal transition-colors">{c.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-slate font-mono text-sm hidden md:inline">{c.year}</span>
                <IconExternalLink className="w-5 h-5 text-slate-light group-hover:text-teal transition-colors" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
