import React from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function SocialList({ contact }) {
  const socialLinks = [
    { icon: IconBrandGithub, url: contact?.github, label: "GitHub" },
    { icon: IconBrandLinkedin, url: contact?.linkedin, label: "LinkedIn" },
  ].filter((item) => item.url);

  return (
    <div className="hidden md:block w-10 fixed bottom-0 left-5 lg:left-10 z-[10] text-slate-light">
      <ul className="flex flex-col items-center m-0 p-0 list-none after:content-[''] after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-slate-light">
        {socialLinks.map((item, i) => (
          <li key={i} className="last-of-type:mb-5">
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 inline-block transition-all duration-300 hover:-translate-y-1 hover:text-teal"
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
