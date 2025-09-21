import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import Section from "../components/layout/Section.jsx";
import { IconRecycle, IconMicrophone, IconShoppingCart, IconExternalLink, IconWorld, IconCode, IconRocket, IconFolderCode } from "@tabler/icons-react";

export default function Projects({ projects, websites = [] }) {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of projects I've built and contributed to." icon={IconFolderCode}>
      <div className="snap-start grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Live Websites */}
        {websites.map((site, i) => (
          <Card key={`website-${i}`} className="flex h-full flex-col border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 dark:border-emerald-800 dark:from-emerald-950/50 dark:to-green-950/50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="rounded-xl bg-emerald-600 p-2">
                <IconRocket className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">{site.title}</h3>
            </div>
            <p className="mb-4 text-sm text-emerald-700 dark:text-emerald-300">{site.description}</p>
            <div className="mt-auto">
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Visit Live Site <IconExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </Card>
        ))}
        
        {/* Development Projects */}
        {projects.map((p) => (
          <Card key={p.title} className="flex h-full flex-col p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="rounded-xl bg-slate-100 p-2 transition group-hover:scale-105 dark:bg-white/10">
                {p.icon === "IconRecycle" && <IconRecycle className="h-5 w-5 text-green-600" />}
                {p.icon === "IconMicrophone" && <IconMicrophone className="h-5 w-5 text-blue-600" />}
                {p.icon === "IconShoppingCart" && <IconShoppingCart className="h-5 w-5 text-purple-600" />}
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
