import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" subtitle="Open to AI/ML and cloud security roles, internships, and collaborations.">
      <Card className="p-6 snap-start">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-base font-semibold">Let’s build something reliable together.</h3>
            <p className="text-sm text-slate-600 dark:text-white/70">Based in Addis Ababa · Open to remote/hybrid</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <a href="mailto:nebilyk@gmail.com" className="w-full sm:w-auto">
              <Button className="bg-slate-900 text-white hover:ring-2 hover:ring-slate-700 dark:bg-white dark:text-slate-900 dark:hover:ring-white/50 w-full sm:w-auto justify-center">
                <Mail className="h-4 w-4" /> Email
              </Button>
            </a>
            <div className="flex gap-2 sm:gap-3">
              <a href="https://github.com/Nebil1" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                <Button className="bg-transparent text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:text-white dark:ring-white/30 dark:hover:bg-white/5 w-full justify-center">
                  <Github className="h-4 w-4" /> <span className="hidden xs:inline">GitHub</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/nebilyisehak" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                <Button className="bg-transparent text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:text-white dark:ring-white/30 dark:hover:bg-white/5 w-full justify-center">
                  <Linkedin className="h-4 w-4" /> <span className="hidden xs:inline">LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}
