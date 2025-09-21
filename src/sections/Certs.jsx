import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { IconCertificate } from "@tabler/icons-react";

const isValidUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

export default function Certs({ certs = [] }) {
  return (
    <Section id="certs" title="Certifications" icon={IconCertificate}>
      <div className="snap-start grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <Card key={c.name} className="p-5">
            {/* top row: title + View button (replaces the old year position) */}
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-medium">{c.name}</div>

              {c.link && isValidUrl(c.link) ? (
                <a href={c.link} target="_blank" rel="noreferrer">
                  <Button variant="default" className="px-3 py-1 text-xs">
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
