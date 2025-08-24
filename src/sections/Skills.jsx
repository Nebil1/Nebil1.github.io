import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";

export default function Skills({ skills = {} }) {
  return (
    <Section id="skills" title="Skills Matrix" subtitle="Tools I reach for when building and securing ML systems.">
      <div className="snap-start grid gap-6 sm:grid-cols-2">
        {Object.entries(skills || {}).map(([group, list]) => (
          <Card key={group} className="p-6">
            <h3 className="mb-3 text-base font-semibold">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {(list || []).map((s) => <Badge key={s}>{s}</Badge>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
