import { useEffect, useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";

const DAY_MS = 24 * 60 * 60 * 1000;
const CELL = 11;
const GAP = 3;

// Level 0-4 comes straight from the API (matches GitHub's own bucketing).
// Colors are ours, so the graph fits the site's palette instead of a
// third-party service's fixed light/dark styling.
const LEVEL_COLORS = ["#1b2740", "#0f3b30", "#0f6e56", "#1d9e75", "#64ffda"];

function buildCalendar(contributions) {
  if (!contributions.length) return { weeks: [], monthLabels: [] };

  const days = contributions.map((c) => ({
    date: new Date(`${c.date}T00:00:00`),
    count: c.count,
    level: c.level,
  }));

  const first = days[0].date;
  const gridStart = new Date(first);
  gridStart.setDate(first.getDate() - first.getDay());

  const weeks = [];
  const monthLabels = [];
  let lastMonth = null;

  days.forEach((day) => {
    const weekIndex = Math.floor((day.date - gridStart) / (7 * DAY_MS));
    const rowIndex = day.date.getDay();
    if (!weeks[weekIndex]) weeks[weekIndex] = Array(7).fill(null);
    weeks[weekIndex][rowIndex] = day;

    const monthKey = day.date.getMonth();
    if (monthKey !== lastMonth && day.date.getDate() <= 7) {
      monthLabels.push({ weekIndex, label: day.date.toLocaleString("en-US", { month: "short" }) });
      lastMonth = monthKey;
    }
  });

  return { weeks, monthLabels };
}

export default function ContributionGraph({ username }) {
  const [state, setState] = useState({ status: "loading", weeks: [], monthLabels: [], total: 0 });

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const { weeks, monthLabels } = buildCalendar(data.contributions || []);
        setState({ status: "ready", weeks, monthLabels, total: data.total?.lastYear ?? 0 });
      })
      .catch(() => {
        if (!cancelled) setState((s) => ({ ...s, status: "error" }));
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
          Contribution graph unavailable right now &mdash; view on GitHub
        </span>
      </a>
    );
  }

  if (state.status === "loading") {
    return <div className="h-[130px] w-full animate-pulse rounded bg-navy-lightest/40" />;
  }

  const gridWidth = state.weeks.length * (CELL + GAP);

  return (
    <div>
      <p className="mb-3 font-mono text-[12px] text-slate-light">
        {state.total.toLocaleString()} contributions in the last year
      </p>

      <div className="overflow-x-auto pb-1">
        <div style={{ width: gridWidth, minWidth: gridWidth }}>
          <div className="relative mb-1" style={{ height: 14 }}>
            {state.monthLabels.map(({ weekIndex, label }) => (
              <span
                key={`${label}-${weekIndex}`}
                className="absolute top-0 font-mono text-[10px] text-slate"
                style={{ left: weekIndex * (CELL + GAP) }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-[3px]">
            <div className="flex flex-col justify-between py-[1px]" style={{ height: 7 * CELL + 6 * GAP }}>
              {["", "Mon", "", "Wed", "", "Fri", ""].map((label, i) => (
                <span key={i} className="font-mono text-[9px] leading-none text-slate" style={{ height: CELL }}>
                  {label}
                </span>
              ))}
            </div>

            <div
              className="grid gap-[3px]"
              style={{
                gridTemplateRows: `repeat(7, ${CELL}px)`,
                gridAutoFlow: "column",
                gridAutoColumns: `${CELL}px`,
              }}
            >
              {state.weeks.map((week, wi) =>
                (week || Array(7).fill(null)).map((day, di) => (
                  <div
                    key={`${wi}-${di}`}
                    title={day ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date.toDateString()}` : undefined}
                    className="rounded-[2px]"
                    style={{
                      width: CELL,
                      height: CELL,
                      background: day ? LEVEL_COLORS[day.level] : "transparent",
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[10px] text-slate">
        <span>Less</span>
        {LEVEL_COLORS.map((color) => (
          <span key={color} className="rounded-[2px]" style={{ width: CELL, height: CELL, background: color }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
