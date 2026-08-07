import { useEffect, useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";

const BAR_COLORS = ["#64ffda", "#3ee08a", "#ffb454", "#a8b2d1", "#8892b0"];

export default function TopLanguages({ username }) {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((repos) => {
        if (cancelled) return;
        const counts = {};
        repos
          .filter((r) => !r.fork && r.language)
          .forEach((r) => {
            counts[r.language] = (counts[r.language] || 0) + 1;
          });
        const total = Object.values(counts).reduce((a, b) => a + b, 0);
        const top = Object.entries(counts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            pct: total ? Math.round((count / total) * 100) : 0,
          }));
        setState({ status: "ready", languages: top });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (state.status === "error") {
    return (
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noreferrer"
        className="flex w-full flex-col items-center justify-center gap-2 rounded border border-dashed border-navy-lightest px-6 py-10 text-center transition-colors hover:border-teal/40"
      >
        <IconBrandGithub className="h-7 w-7 text-slate" />
        <span className="font-mono text-[12px] text-slate">
          Top languages unavailable right now &mdash; view on GitHub
        </span>
      </a>
    );
  }

  if (state.status === "loading") {
    return <div className="h-[130px] w-full animate-pulse rounded bg-navy-lightest/40" />;
  }

  if (state.languages.length === 0) {
    return <p className="font-mono text-[12px] text-slate">No language data available.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {state.languages.map((lang, i) => (
        <div key={lang.name}>
          <div className="mb-1 flex items-center justify-between font-mono text-[11px] text-slate-light">
            <span>{lang.name}</span>
            <span className="text-slate">{lang.pct}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy-lightest">
            <div
              className="h-full rounded-full"
              style={{ width: `${lang.pct}%`, background: BAR_COLORS[i % BAR_COLORS.length] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
