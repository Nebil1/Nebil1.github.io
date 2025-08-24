const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="footer" className="mx-auto max-w-7xl px-4 py-12 text-center text-xs text-slate-500 dark:text-white/60 snap-end">
      © {currentYear} Nebil Yisehak
    </footer>
  );
}
