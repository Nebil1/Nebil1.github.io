import { useState } from "react";
import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconMessageCircle, IconCode, IconFileText } from "@tabler/icons-react";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" subtitle="Open to software engineering opportunities and collaborations." icon={IconMessageCircle}>
      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <IconFileText className="h-5 w-5" />
            <h3 className="text-lg font-semibold">Contact Me</h3>
          </div>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const subject = `Resume Request from ${formData.get('name')}`;
            const body = `Name: ${formData.get('name')}%0AEmail: ${formData.get('email')}%0A%0AMessage:%0A${formData.get('message') || 'No additional message'}`;
            window.location.href = `mailto:contact@nebilkeno.me?subject=${encodeURIComponent(subject)}&body=${body}`;
          }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="px-3 py-2 border border-slate-300 rounded-lg bg-white dark:bg-slate-800 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="px-3 py-2 border border-slate-300 rounded-lg bg-white dark:bg-slate-800 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message (optional)"
              rows={3}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white dark:bg-slate-800 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Button type="submit" className="w-full sm:w-auto">
              <IconFileText className="h-4 w-4" />
              Contact Me
            </Button>
          </form>
        </Card>

        <Card className="p-6 snap-start">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-base font-semibold">Let's build something reliable together.</h3>
              <p className="text-sm text-slate-600 dark:text-white/70">Open to remote/hybrid</p>
              <div className="flex items-center gap-2 mt-2">
                <IconMail className="h-4 w-4 text-slate-500 dark:text-white/60" />
                <span className="text-sm font-mono text-slate-700 dark:text-white/80">contact@nebilkeno.me</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <a href="mailto:contact@nebilkeno.me" className="w-full sm:w-auto">
                <Button variant="default" className="w-full sm:w-auto justify-center">
                  <IconMail className="h-4 w-4" /> Email
                </Button>
              </a>
              <div className="flex gap-2 sm:gap-3">
                <a href="https://github.com/Nebil1" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                  <Button variant="outline" className="w-full justify-center">
                    <IconBrandGithub className="h-4 w-4" /> <span className="hidden xs:inline">GitHub</span>
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/nebilyisehak" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                  <Button variant="outline" className="w-full justify-center">
                    <IconBrandLinkedin className="h-4 w-4" /> <span className="hidden xs:inline">LinkedIn</span>
                  </Button>
                </a>
                <a href="https://leetcode.com/your-username" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                  <Button variant="outline" className="w-full justify-center">
                    <IconCode className="h-4 w-4" /> <span className="hidden xs:inline">LeetCode</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}