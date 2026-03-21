import Link from "next/link";
import { site } from "@/config/site";
import InstagramEmbedsCarousel from "@/components/InstagramEmbedsCarousel";
import { GraduationCap, Target, Gem, ScanEye, TrendingUp, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Coaching personalizzato</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Seduto tutto il giorno 
              <br/>
              e la schiena ne risente?
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Non è normale vivere così e il tuo corpo lo sa.
              <br/>
              Sa come muoversi, a volte ha solo bisogno che qualcuno glielo ricordi.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contatti"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Contattami
              </Link>
              <Link
                href="/metodologia"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-medium hover:bg-muted"
              >
                Scopri la metodologia
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-background p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ScanEye className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium">Valutazione</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Postura, movimento, cause reali</p>
              </div>
              <div className="rounded-2xl bg-background p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <TrendingUp className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium">Percorso</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Programma su misura, progressivo</p>
              </div>
              <div className="rounded-2xl bg-background p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium">Supporto</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Check-in e aggiustamenti continui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-5xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Su cosa lavoriamo</h2>
              <p className="mt-2 text-sm text-muted-foreground">Ti riconosci in qualcuno di questi?</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Arrivi la sera con il collo indolenzito e la schiena rigida",
                  "Ti sei abituato al dolore, tanto è sempre stato così",
                  "Hai provato stretching, massaggi, antidolorifici — ma il problema ritorna",
                  "Vorresti allenarti, ma hai paura di peggiorare le cose",
                  "Senti di invecchiare prima del tempo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Queste sensazioni non sono inevitabili. Spesso hanno una causa precisa e una soluzione più semplice di quanto tu possa pensare.
              </p>
            </div>

            <div className="rounded-2xl bg-muted p-6">
              <p className="text-base font-semibold">Non tratto dove fa male. Cerco perché fa male.</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                La maggior parte dei dolori cronici dipende da come il corpo si muove nel tempo. Il mio approccio parte dall&apos;osservazione: valuto postura, pattern di movimento e compensi. Poi costruiamo un percorso che non maschera il sintomo, ma agisce sulla causa.
              </p>
              <div className="mt-5">
                <Link
                  href="/su-cosa-lavoriamo"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-medium hover:bg-background/80"
                >
                  Scopri i problemi che tratto
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mx-auto w-full max-w-5xl px-6 py-14">
            <h2 className="text-2xl font-semibold tracking-tight">Come lavoriamo</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Ogni percorso segue tre fasi: capire il problema, costruire la soluzione, mantenerla nel tempo.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ScanEye className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold">Valutazione</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Analizzo postura, movimento e compensi per capire la causa reale — non solo il sintomo.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold">Percorso personalizzato</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Un programma costruito su di te: progressivo, misurabile e adattato ai tuoi ritmi.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-semibold">Supporto continuo</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Check-in, feedback e aggiustamenti periodici per non perdere il ritmo.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-muted p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-semibold">Vuoi partire con una valutazione?</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Scrivimi obiettivo, livello e disponibilità settimanale.
                  </p>
                </div>
                <Link
                  href="/contatti"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Contattami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Servizi</h2>
            <p className="mt-2 max-w-2xl text-base leading-7 text-muted-foreground">
              Scegli il supporto più adatto a te. Possiamo lavorare online oppure in presenza (se disponibile), con un
              percorso costruito sui tuoi obiettivi.
            </p>
          </div>
          <Link
            href="/contatti"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-transparent px-6 text-sm font-medium hover:bg-muted"
          >
            Richiedi info
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" />
            </span>
            <p className="mt-3 text-sm font-semibold">Percorso autonomia</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Per chi vuole imparare a muoversi correttamente e acquisire un metodo da applicare in modo indipendente.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </span>
            <p className="mt-3 text-sm font-semibold">Percorso trasformazione</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Per chi ha un problema specifico da risolvere e vuole essere seguito passo dopo passo fino al risultato.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Gem className="h-5 w-5" />
            </span>
            <p className="mt-3 text-sm font-semibold">Percorso premium</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Per chi vuole il massimo: trasformazione e mantenimento nel tempo, con la massima disponibilità e personalizzazione.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-muted p-6">
          <p className="text-base font-semibold">Non sai quale scegliere?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Scrivimi: in base a obiettivo, livello e disponibilità ti consiglio la soluzione più efficace.
          </p>
          <div className="mt-4">
            <Link
              href="/contatti"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Contattami
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-14">
        <InstagramEmbedsCarousel
          profileHref={site.contacts.instagram.href}
          permalinks={[
            "https://www.instagram.com/p/DQ_6q10DHej/",
            "https://www.instagram.com/p/DQmDmGuDIG9/",
            "https://www.instagram.com/p/DCgw3ZHMUOx/",
            "https://www.instagram.com/p/DCOvWhjs1In/",
            "https://www.instagram.com/p/DCofVoqM6hG/",
            "https://www.instagram.com/p/DAYL3P2Mrwf/",
          ]}
        />
      </section>
    </div>
  );
}
