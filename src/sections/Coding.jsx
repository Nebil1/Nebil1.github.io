import Section from "../components/layout/Section.jsx";
import Card from "../components/ui/Card.jsx";
import { IconCode, IconBrandGithub } from "@tabler/icons-react";

export default function Coding() {
  return (
    <Section id="coding" title="Days I Code" subtitle="My coding activity and problem-solving journey." icon={IconCode}>
      <Card className="p-6 bg-white/80 dark:bg-slate-800/80 border-2 border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center gap-3 mb-4">
          <IconBrandGithub className="h-5 w-5" />
          <h3 className="text-lg font-semibold">GitHub Activity</h3>
        </div>
        <div className="w-full overflow-x-auto p-4 bg-slate-800 dark:bg-slate-900 rounded-lg">
          <img 
            src="https://ghchart.rshah.org/216e39/Nebil1" 
            alt="GitHub Contribution Graph"
            className="w-full max-w-none"
          />
        </div>
      </Card>
    </Section>
  );
}