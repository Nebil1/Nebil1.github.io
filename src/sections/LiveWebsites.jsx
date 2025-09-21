import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { IconExternalLink } from "@tabler/icons-react";

export default function LiveWebsites({ websites = [] }) {
  return (
    <Section id="websites" title="Live Websites" subtitle="Production websites I've built and deployed.">
      <div className="snap-start grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {websites.map((site, i) => (
          <Card key={i} className="group overflow-hidden">
            <div className="aspect-video overflow-hidden rounded-t-lg bg-slate-100 dark:bg-slate-800">
              <img
                src={site.preview}
                alt={`${site.title} preview`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold">{site.title}</h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-white/70">{site.description}</p>
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  Visit Website <IconExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}