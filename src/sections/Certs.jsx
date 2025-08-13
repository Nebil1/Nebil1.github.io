import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";

export default function Certs({ certs }) {
  return (
    <Section id="certs" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <Card key={c.name} className="p-5">
            {/* top row: title + View button (replaces the old year position) */}
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-medium">{c.name}</div>

              {c.link ? (
                <a href={c.link} target="_blank" rel="noreferrer">
                  <Button className="bg-indigo-600 text-white hover:brightness-110 focus:ring-indigo-500 px-3 py-1 text-xs">
                    View
                  </Button>
                </a>
              ) : (
                <span className="text-xs text-slate-500 dark:text-white/60">—</span>
              )}
            </div>

            {/* year moved below */}
            <div className="mt-2 text-xs text-slate-600 dark:text-white/70">{c.year}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
