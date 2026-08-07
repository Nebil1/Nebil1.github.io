import React from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import MagneticWrapper from '../components/ui/MagneticWrapper.jsx';
import LinkStatus from '../components/ui/LinkStatus.jsx';

export default function Contact({ contact }) {
  const interfaces = [
    { name: 'eth0/0', label: 'email', value: contact?.email, href: `mailto:${contact?.email}`, icon: IconMail },
    { name: 'eth0/1', label: 'github', value: 'github.com/Nebil1', href: contact?.github, icon: IconBrandGithub },
    { name: 'eth0/2', label: 'linkedin', value: 'in/nebilyisehak', href: contact?.linkedin, icon: IconBrandLinkedin },
  ].filter((i) => i.href);

  return (
    <section id="contact" className="max-w-[640px] mx-auto text-center py-[100px] mb-20 section-padding">
      <h2 className="text-teal font-mono text-[16px] font-normal mb-5 tracking-wide">
        04. Establish Connection
      </h2>
      <h3 className="text-[clamp(40px,5vw,60px)] text-slate-lightest font-semibold mb-5">
        Let's Connect
      </h3>
      <p className="text-slate text-[18px] mb-12 text-center">
        Open to network engineering, cloud infrastructure, and network security
        opportunities. If you're hiring or want to talk shop, LinkedIn is the
        fastest way to reach me.
      </p>

      <div className="mx-auto mb-12 max-w-md rounded border border-navy-lightest text-left font-mono text-[13px]">
        {interfaces.map((iface, i) => (
          <a
            key={iface.name}
            href={iface.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-navy-light ${
              i !== interfaces.length - 1 ? "border-b border-navy-lightest" : ""
            }`}
          >
            <span className="flex items-center gap-3">
              <LinkStatus active label={iface.name} />
              <iface.icon className="h-4 w-4 text-slate-light transition-colors group-hover:text-teal" />
            </span>
            <span className="truncate text-slate-light transition-colors group-hover:text-teal">
              {iface.value}
            </span>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <MagneticWrapper strength={0.25}>
          <a
            href={contact?.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded bg-teal px-7 py-4 font-mono text-[14px] tracking-wider text-navy transition-colors hover:bg-teal/90 inline-flex"
          >
            <IconBrandLinkedin className="h-5 w-5" />
            Connect on LinkedIn
          </a>
        </MagneticWrapper>
        <a
          href={`mailto:${contact?.email}`}
          className="text-slate-light border border-slate rounded font-mono text-[14px] px-7 py-4 tracking-wider transition-colors hover:text-teal hover:border-teal inline-block"
        >
          $ connect --to=nebil
        </a>
      </div>
    </section>
  );
}
