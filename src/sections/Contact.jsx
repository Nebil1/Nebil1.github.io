import React from 'react';

export default function Contact({ contact }) {
  return (
    <section id="contact" className="max-w-[600px] mx-auto text-center py-[100px] mb-20 section-padding">
      <h2 className="text-teal font-mono text-[16px] font-normal mb-5 tracking-wide">
        04. What's Next?
      </h2>
      <h3 className="text-[clamp(40px,5vw,60px)] text-slate-lightest font-semibold mb-5">
        Get In Touch
      </h3>
      <p className="text-slate text-[18px] mb-12 text-center">
        I am open to software engineering, AI/ML, and cloud-focused opportunities.
        If you are hiring, collaborating, or want to discuss a project, feel free to reach out.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${contact?.email}`}
          className="text-teal bg-transparent border border-teal rounded font-mono text-[14px] px-7 py-4 tracking-wider transition-colors hover:bg-teal-tint inline-block"
        >
          Hire Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-slate-light border border-slate rounded font-mono text-[14px] px-7 py-4 tracking-wider transition-colors hover:text-teal hover:border-teal inline-block"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}