import React from 'react';

export default function Hero() {
  const one = <h1 className="text-teal font-mono text-[clamp(14px,5vw,16px)] font-normal tracking-wide ml-[3px] mb-5">Hi, my name is</h1>;
  const two = <h2 className="text-slate-lightest font-sans font-semibold text-[clamp(40px,8vw,80px)] leading-[1.1] m-0">Nebil Yisehak.</h2>;
  const three = <h3 className="text-slate font-sans font-semibold text-[clamp(40px,8vw,80px)] leading-[1.1] m-0">I build things for the web.</h3>;
  const four = (
    <p className="mt-[25px] text-slate font-sans text-[20px] leading-[1.3] w-1/2 min-w-[300px] max-w-[500px]">
      I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on artificial intelligence, cloud infrastructure, and modern web applications.
    </p>
  );
  const five = (
    <div className="mt-[50px]">
      <a
        href="#projects"
        className="text-teal bg-transparent border border-teal rounded font-mono text-[14px] px-[1.75rem] py-[1.25rem] tracking-wider transition-colors hover:bg-teal-tint inline-block leading-none"
      >
        Check out my work!
      </a>
    </div>
  );

  return (
    <section id="hero" className="flex flex-col justify-center items-start min-h-screen p-0 m-0 w-full text-left md:pt-0 pt-[150px]">
      {one}
      {two}
      {three}
      {four}
      {five}
    </section>
  );
}
