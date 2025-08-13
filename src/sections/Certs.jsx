import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";

export default function Certs({ certs }) {
  return (
    <Section id="certs" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <Card key={c.name} className="p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-slate-600 dark:text-white/70">{c.year}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
