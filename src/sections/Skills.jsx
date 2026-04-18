import React from 'react';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section-padding">
      <h2 className="numbered-heading">
        <span className="text-teal font-mono text-[clamp(16px,3vw,20px)] mr-[10px] font-normal bottom-1 tracking-wide relative">
          02.
        </span>
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-10">
        <div className="md:col-span-3 text-slate text-[18px]">
          <p className="mb-4">
            Hello! My name is Nebil and I enjoy creating things that live on the internet. 
            My interest in software engineering started back in 2020 and has evolved into a passion for building robust full-stack applications and diving deep into Cloud computing and Artificial Intelligence.
          </p>
          <p className="mb-4">
            Here are a few technologies I've been working with recently:
          </p>
          <div className="grid grid-cols-2 gap-4 mt-5">
            {Object.keys(skills || {}).map((category, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-teal font-mono text-[14px] mb-2">{category}</h3>
                <ul className="grid grid-cols-1 gap-1 m-0 p-0 overflow-hidden list-none">
                  {skills[category].map((skill, j) => (
                    <li key={j} className="relative mb-2 pl-5 font-mono text-[13px] text-slate-light leading-tight before:content-['▹'] before:absolute before:left-0 before:text-teal before:text-[14px] before:leading-[12px]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 relative max-w-[300px] mx-auto md:w-full mt-10 md:mt-0">
          <div className="relative group rounded bg-teal w-full aspect-square">
             <div className="absolute w-full h-full inset-0 border-2 border-teal rounded translate-x-5 translate-y-5 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 -z-10"></div>
             <div className="w-full aspect-square bg-navy-light mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity rounded absolute top-0 left-0 z-20"></div>
             {/* Using a placeholder since user may not have an image set */}
             <div className="w-full h-full bg-slate-lightest rounded absolute top-0 left-0 flex items-center justify-center font-mono text-navy font-bold text-4xl">
                NY
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}