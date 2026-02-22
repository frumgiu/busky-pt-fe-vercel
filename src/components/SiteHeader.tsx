import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Personal Trainer
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-zinc-700 dark:text-zinc-200">
          <Link href="/metodologia" className="hover:text-black dark:hover:text-white">
            Metodologia
          </Link>
          <Link href="/contatti" className="hover:text-black dark:hover:text-white">
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
}
