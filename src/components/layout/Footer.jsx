import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="flex justify-center items-center flex-col h-auto min-h-[70px] p-4 text-center ">
      <div className="text-slate hover:text-teal transition-colors font-mono text-[12px] p-2.5">
        <div>{`Built by Nebil Yisehak`}</div>
        <div className="mt-1">{`React, Vite, TailwindCSS - ${year}`}</div>
      </div>
    </footer>
  );
}
