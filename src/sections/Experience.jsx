import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import { IconBriefcase } from "@tabler/icons-react";

export default function Experience() {
  const jobs = [
    {
      role: "Software Engineer · Ethiopian Space Science Society (ESSS)",
      when: "2023 – 2025",
      bullets: [
        "Designed and delivered an ERP-style automation system integrating Google Apps Script (backend), React.js (frontend), and Google Workspace services",
        "Automated letter generation, bulk email, contract workflows, and PDF handling, reducing document processing time by 40%",
        "Implemented role-based access control (RBAC) with Google OAuth 2.0 for secure user authentication",
        "Modernized ESSS operations by eliminating manual workflows and improving efficiency across 20+ staff members",
      ],
    },
    {
      role: "Software Engineering Intern · Ethiopian Airlines",
      when: "2022",
      bullets: [
        "Developed backend automation and dashboards for project management tools",
        "Collaborated in Agile sprints and practiced secure software development life cycle (SDLC)",
        "Delivered production-ready modules adopted by the software team for internal operations",
        "Helped reduce system latency by ~15%, improving user experience for internal teams",
      ],
    },
  ];

  return (
    <Section id="experience" title="Experience" subtitle="A snapshot of roles and impact. Full history available on request." icon={IconBriefcase}>
      <div className="grid gap-6 md:grid-cols-2 snap-start">
        {jobs.map((job) => (
          <Card key={job.role} className="p-6">
            <h3 className="text-base font-semibold">{job.role}</h3>
            <p className="text-sm text-slate-600 dark:text-white/70">{job.when}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-white/80">
              {job.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
