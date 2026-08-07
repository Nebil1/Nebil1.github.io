export default function ProtocolBadge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded border border-teal/25 bg-teal/5 px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-teal whitespace-nowrap ${className}`}
    >
      {children}
    </span>
  );
}
