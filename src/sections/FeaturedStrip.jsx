export default function FeaturedStrip({ featured }) {
  return (
    <section className="py-4 sm:py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 sm:gap-5 opacity-80">
        {featured.map((f) => (
          <div key={f.label} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold tracking-wide text-slate-600 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10">
            {f.label}
          </div>
        ))}
      </div>
    </section>
  );
}
