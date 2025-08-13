import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" subtitle="Open to AI/ML and cloud security roles, internships, and collaborations.">
      <Card className="p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-base font-semibold">Let’s build something reliable together.</h3>
            <p className="text-sm text-slate-600 dark:text-white/70">Based in Addis Ababa · Open to remote/hybrid</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:your.email@example.com">
              <Button className="bg-slate-900 text-white hover:ring-2 hover:ring-slate-700 dark:bg-white dark:text-slate-900 dark:hover:ring-white/50">
                <Mail className="h-4 w-4" /> Email
              </Button>
            </a>
            <a href="https://github.com/Nebil1" target="_blank" rel="noreferrer">
              <Button className="bg-transparent text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:text-white dark:ring-white/30 dark:hover:bg-white/5">
                <Github className="h-4 w-4" /> GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer">
              <Button className="bg-transparent text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:text-white dark:ring-white/30 dark:hover:bg-white/5">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </Card>
    </Section>
  );
}
