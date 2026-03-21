import Link from "next/link";
import { ScanEye, GraduationCap, Target, Gem, Check } from "lucide-react";

export default function MetodologiaPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Come lavoriamo insieme</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          Ogni percorso parte da una valutazione attenta.
          Non esiste un programma uguale per tutti: esistono persone diverse, con storie diverse, che meritano soluzioni diverse.
        </p>
      </header>

      <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ScanEye className="h-5 w-5" />
          </div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Punto di partenza</p>
        </div>
        <h2 className="mt-3 text-lg font-semibold">Valutazione posturale e analisi del movimento</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Analizzo come ti muovi, individuo i compensi e cerco il perché dei tuoi dolori — non solo dove fanno male. È il punto di partenza di qualsiasi percorso.
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold tracking-tight">Scegli il percorso</h2>
        <p className="mt-2 text-sm text-muted-foreground">Tre opzioni in base al tuo obiettivo e al livello di supporto che cerchi.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-base font-semibold">Percorso autonomia</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Per chi vuole imparare a muoversi correttamente e acquisire un metodo da applicare in modo indipendente.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Valutazione iniziale</li>
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Programma personalizzato</li>
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Sessioni di apprendimento guidato</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-base font-semibold">Percorso trasformazione</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Per chi ha un problema specifico da risolvere e vuole essere seguito passo dopo passo fino al risultato.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Valutazione approfondita</li>
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Percorso strutturato con obiettivi misurabili</li>
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Supporto continuativo</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Gem className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-base font-semibold">Percorso premium</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Per chi vuole il massimo: trasformazione e mantenimento nel tempo, con la massima disponibilità e personalizzazione.
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Tutto del percorso trasformazione</li>
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Reperibilità diretta</li>
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Aggiustamenti in corso d’opera</li>
              <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 shrink-0 text-primary" /> Check-up periodici</li>
            </ul>
          </div>
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
