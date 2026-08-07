import { useEffect, useState } from "react";
import { IconGitFork, IconStar, IconUsers, IconBrandGithub } from "@tabler/icons-react";

export default function GitHubStats({ username }) {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      }),
    ])
      .then(([user, repos]) => {
        if (cancelled) return;
        const totalStars = repos
          .filter((r) => !r.fork)
          .reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
        setState({
          status: "ready",
          repos: user.public_repos,
          followers: user.followers,
          stars: totalStars,
        });
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
          Stats unavailable right now &mdash; view on GitHub
        </span>
      </a>
    );
  }

  if (state.status === "loading") {
    return <div className="h-[104px] w-full animate-pulse rounded bg-navy-lightest/40" />;
  }

  const stats = [
    { label: "Public repos", value: state.repos, icon: IconGitFork },
    { label: "Total stars", value: state.stars, icon: IconStar },
    { label: "Followers", value: state.followers, icon: IconUsers },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="rounded border border-navy-lightest/60 bg-navy p-4 text-center">
          <Icon className="mx-auto mb-2 h-5 w-5 text-teal" />
          <div className="font-mono text-2xl font-semibold text-slate-lightest">{value.toLocaleString()}</div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-slate">{label}</div>
        </div>
      ))}
    </div>
  );
}
