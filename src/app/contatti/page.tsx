export default function ContattiPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Contatti</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Vuoi migliorare forza, composizione corporea o performance? Scrivimi: ti rispondo entro 24–48h.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <a
          className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:hover:bg-zinc-950"
          href="mailto:info@example.com"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Email</p>
          <p className="mt-2 text-base font-semibold">info@example.com</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Per richieste e informazioni</p>
        </a>

        <a
          className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:hover:bg-zinc-950"
          href="tel:+390000000000"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Telefono</p>
          <p className="mt-2 text-base font-semibold">+39 000 000 0000</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Chiamate / SMS</p>
        </a>

        <a
          className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:hover:bg-zinc-950"
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Instagram</p>
          <p className="mt-2 text-base font-semibold">@tuoprofilo</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Contenuti e disponibilità</p>
        </a>
      </section>

      <section className="mt-10 rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Dove lavoro</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Online coaching e, se disponibile, sessioni in presenza nella tua zona. Indicami città e giorni preferiti.
        </p>
      </section>
    </div>
  );
}
