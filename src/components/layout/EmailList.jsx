import React from "react";

export default function EmailList({ email }) {
  return (
    <div className="hidden md:block w-10 fixed bottom-0 right-5 lg:right-10 z-[10] text-slate-light">
      <div className="flex flex-col items-center m-0 p-0 after:content-[''] after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-slate-light">
        <a
          href={`mailto:${email}`}
          className="m-[20px_auto] p-2.5 font-mono text-[12px] tracking-[0.1em] [writing-mode:vertical-rl] transition-all duration-300 hover:-translate-y-1 hover:text-teal"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
