export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 py-10 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-300">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Personal Trainer</p>
          <p className="text-zinc-500 dark:text-zinc-400">Online coaching · In presenza · Programmi personalizzati</p>
        </div>
      </div>
    </footer>
  );
}
