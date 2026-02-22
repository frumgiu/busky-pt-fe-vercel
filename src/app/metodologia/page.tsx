import Link from "next/link";

export default function MetodologiaPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Metodologia di lavoro</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          Un percorso semplice, misurabile e sostenibile: obiettivi chiari, allenamenti efficaci e abitudini che durano.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-lg font-semibold">1) Valutazione iniziale</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Anamnesi, stile di vita, disponibilità settimanale, eventuali limitazioni e preferenze. Definiamo un obiettivo
            realistico e una strategia.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-lg font-semibold">2) Programma personalizzato</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Schede progressive con focus su tecnica, forza e composizione corporea. Carichi e volumi adattati al tuo livello.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-lg font-semibold">3) Monitoraggio e feedback</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Check-in, revisione dei progressi e regolazioni periodiche. L’obiettivo è avanzare con continuità, senza stress.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <h2 className="text-lg font-semibold">4) Educazione alle abitudini</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Routine pratiche: movimento quotidiano, recupero, gestione dell’energia e (se serve) linee guida alimentari
            generali.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-muted p-6">
        <h2 className="text-lg font-semibold">Pronto a iniziare?</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Scrivimi e raccontami obiettivo, esperienza e quante volte riesci ad allenarti: ti rispondo con una proposta chiara.
        </p>
        <div className="mt-4">
          <Link
            href="/contatti"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Vai ai contatti
          </Link>
        </div>
      </section>
    </div>
  );
}
