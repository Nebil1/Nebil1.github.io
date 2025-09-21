import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import { IconBrandReact, IconServer, IconDatabase, IconCloud, IconBrain, IconTools } from "@tabler/icons-react";

export default function Skills({ skills = {} }) {
  const getIcon = (category) => {
    switch(category) {
      case 'Frontend': return <IconBrandReact className="h-5 w-5 text-blue-500" />;
      case 'Backend': return <IconServer className="h-5 w-5 text-green-500" />;
      case 'Databases': return <IconDatabase className="h-5 w-5 text-orange-500" />;
      case 'Cloud/DevOps': return <IconCloud className="h-5 w-5 text-purple-500" />;
      case 'AI/ML': return <IconBrain className="h-5 w-5 text-pink-500" />;
      default: return <div className="h-2 w-2 rounded-full bg-indigo-500"></div>;
    }
  };

  return (
    <Section id="skills" title="Skills Matrix" subtitle="Technologies I use to build full-stack applications." icon={IconTools}>
      <div className="snap-start grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills || {}).map(([group, list]) => (
          <Card key={group} className="p-5 hover:shadow-lg transition-shadow">
            <div className="mb-4 flex items-center gap-3">
              {getIcon(group)}
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{group}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {(list || []).map((s) => <Badge key={s} className="text-xs">{s}</Badge>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}