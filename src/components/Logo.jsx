export default function Logo() {
  return (
    <svg viewBox="0 0 64 64" className="h-6 w-6" aria-label="NY logo">
      <defs>
        <linearGradient id="logo-gradient-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="logo-gradient-2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#logo-gradient-1)" className="dark:fill-[url(#logo-gradient-2)]" />
      <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="22" className="fill-white font-bold">
        NY
      </text>
    </svg>
  );
}
