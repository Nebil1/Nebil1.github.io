export default function LinkStatus({ active = false, label, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-wide ${className}`}>
      <span className="relative flex h-2 w-2 shrink-0">
        {active && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-link opacity-60" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            active ? "bg-link shadow-[0_0_6px_2px_rgba(62,224,138,0.6)]" : "bg-slate/40"
          }`}
        />
      </span>
      {label && (
        <span className={active ? "text-link" : "text-slate"}>{label}</span>
      )}
    </span>
  );
}
