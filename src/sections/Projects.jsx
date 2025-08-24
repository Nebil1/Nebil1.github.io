import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import Section from "../components/layout/Section.jsx";
import { IconRecycle, IconMicrophone, IconShoppingCart, IconExternalLink } from "@tabler/icons-react";

export default function Projects({ projects }) {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of projects I've built and contributed to.">
      <div className="snap-start grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="flex h-full flex-col p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="rounded-xl bg-slate-100 p-2 transition group-hover:scale-105 dark:bg-white/10">
                {p.icon === "IconRecycle" && <IconRecycle className="h-4 w-4" />}
                {p.icon === "IconMicrophone" && <IconMicrophone className="h-4 w-4" />}
                {p.icon === "IconShoppingCart" && <IconShoppingCart className="h-4 w-4" />}
              </div>
              <h3 className="text-lg font-semibold transition-colors group-hover:text-indigo-500">{p.title}</h3>
            </div>
            <p className="mb-4 text-sm text-slate-600 dark:text-white/70">{p.blurb}</p>
            <div className="mb-4 flex flex-wrap gap-2">{p.stack.map((s) => <Badge key={s}>{s}</Badge>)}</div>
            <div className="mt-auto flex gap-3">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="group">
                  <Button variant="outline">
                    {l.label} <IconExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Button>
                </a>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
