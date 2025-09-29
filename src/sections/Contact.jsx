import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconMessageCircle } from "@tabler/icons-react";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" subtitle="Open to software engineering opportunities and collaborations." icon={IconMessageCircle}>
      <Card className="p-6 snap-start">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-base font-semibold">Let’s build something reliable together.</h3>
            <p className="text-sm text-slate-600 dark:text-white/70">Based in Addis Ababa · Open to remote/hybrid</p>
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
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
