import { Sparkles } from "lucide-react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 sm:py-24 snap-start scroll-mt-24">
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2 dark:border-white/10 dark:bg-white/5">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            </div>
          )}
          {subtitle && <p className="max-w-3xl text-sm text-slate-600 dark:text-white/70">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
