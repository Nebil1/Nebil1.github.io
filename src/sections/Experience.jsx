import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";

export default function Experience() {
  const jobs = [
    {
      role: "Web Security Analyst · INSA",
      when: "2025 – Present",
      bullets: [
        "Led vulnerability assessments on cloud-hosted apps, prioritizing findings with exploitability scoring.",
        "Built n8n automations to correlate SIEM alerts with OSINT threat intel and phishing kits.",
        "Partnered with dev teams to implement security headers, rate limiting, and token hardening.",
      ],
    },
    {
      role: "AI Engineer (Projects)",
      when: "2024 – 2025",
      bullets: [
        "Trained CV models for plastic classification; deployed as containerized web apps with CI/CD.",
        "Implemented data curation & labeling workflows; improved F1 by 8–12% across classes.",
        "Hardened inference endpoints with AuthN/Z, request validation, and abuse monitoring.",
      ],
    },
  ];

  return (
    <Section id="experience" title="Experience" subtitle="A snapshot of roles and impact. Full history available on request.">
      <div className="grid gap-6 md:grid-cols-2">
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
