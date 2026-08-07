import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import LinkStatus from '../components/ui/LinkStatus.jsx';

export default function Certs({ certs }) {
  return (
    <section id="certs" className="section-padding max-w-[800px] mx-auto">
      <h2 className="numbered-heading">
        <span className="text-teal font-mono text-[clamp(16px,3vw,20px)] mr-[10px] font-normal bottom-1 tracking-wide relative">
          03.
        </span>
        Certifications
      </h2>

      <p className="mb-8 text-[15px] font-mono text-slate">
        <span className="text-link">●</span> verified &nbsp;&mdash;&nbsp; port status of completed credentials
      </p>

      <div className="rounded border border-navy-lightest overflow-hidden">
        {certs?.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-navy-light ${
              i !== certs.length - 1 ? "border-b border-navy-lightest" : ""
            } ${i % 2 === 0 ? "bg-navy-light/30" : ""}`}
          >
            <div className="flex min-w-0 items-center gap-4">
              <LinkStatus active label={null} />
              <span className="truncate text-[15px] md:text-[17px] font-semibold text-slate-lightest transition-colors group-hover:text-teal">
                {c.name}
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <span className="hidden font-mono text-sm text-slate md:inline">{c.year}</span>
              <IconExternalLink className="h-5 w-5 text-slate-light transition-colors group-hover:text-teal" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
