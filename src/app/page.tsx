import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-black/10 bg-white dark:border-white/10 dark:bg-black">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Coaching personalizzato</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Allenati meglio.
              <br />
              Risultati sostenibili.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Programmi su misura per forza, tonificazione e performance: metodo chiaro, progressioni misurabili e supporto
              costante.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contatti"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-zinc-800 dark:hover:bg-zinc-200"
              >
                Contattami
              </Link>
              <Link
                href="/metodologia"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-transparent px-6 text-sm font-medium hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-950"
              >
                Scopri la metodologia
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-zinc-50 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-white p-5 dark:bg-black">
                <p className="text-sm font-medium">Allenamento</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Schede progressive, tecnica, forza</p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-black">
                <p className="text-sm font-medium">Abitudini</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Routine sostenibili e recupero</p>
              </div>
              <div className="rounded-2xl bg-white p-5 dark:bg-black">
                <p className="text-sm font-medium">Monitoraggio</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Check-in e aggiustamenti periodici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Servizi</h2>
            <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Scegli il supporto più adatto a te. Possiamo lavorare online oppure in presenza (se disponibile), con un
              percorso costruito sui tuoi obiettivi.
            </p>
          </div>
          <Link
            href="/contatti"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-transparent px-6 text-sm font-medium hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-950"
          >
            Richiedi info
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
            <p className="text-sm font-semibold">Online coaching</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Programma aggiornato, check-in periodici e supporto per restare costante. Ideale se vuoi autonomia ma con una
              guida.
            </p>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Include: scheda, progressioni, feedback</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
            <p className="text-sm font-semibold">Sessioni in presenza</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Lezioni 1:1 per tecnica, forza e sicurezza nei fondamentali. Perfetto se vuoi un lavoro molto pratico.
            </p>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Include: coaching live, correzioni, video</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
            <p className="text-sm font-semibold">Scheda allenamento su misura</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Piano strutturato in base a attrezzatura, tempo e frequenza. Ti do una traccia chiara da seguire in palestra
              o a casa.
            </p>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Include: esercizi, serie/ripetizioni, note</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
            <p className="text-sm font-semibold">Obiettivi specifici</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Forza, ricomposizione corporea, postura o performance: costruiamo un percorso con priorità e indicatori
              concreti.
            </p>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Include: periodizzazione, test, adattamenti</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900">
          <p className="text-base font-semibold">Non sai quale scegliere?</p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Scrivimi: in base a obiettivo, livello e disponibilità ti consiglio la soluzione più efficace.
          </p>
          <div className="mt-4">
            <Link
              href="/contatti"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Contattami
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Come lavoriamo</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Ti accompagno in un percorso strutturato: valutazione, programma, feedback e continuità.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
            <p className="text-sm font-semibold">Obiettivi chiari</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Definiamo priorità, tempi e metriche semplici.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
            <p className="text-sm font-semibold">Progressione</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Incrementi graduali: tecnica prima, intensità dopo.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
            <p className="text-sm font-semibold">Supporto</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Feedback e aggiustamenti per non perdere il ritmo.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold">Vuoi partire con una valutazione?</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                Scrivimi obiettivo, livello e disponibilità settimanale.
              </p>
            </div>
            <Link
              href="/contatti"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Contattami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
