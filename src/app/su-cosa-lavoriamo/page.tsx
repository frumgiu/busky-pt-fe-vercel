import Link from "next/link";
import { Activity, Zap, AlignCenter, Move, ArrowDown, Clock } from "lucide-react";

const problems = [
  {
    icon: Activity,
    title: "Mal di schiena",
    body: "Uno dei disturbi più diffusi tra chi lavora molte ore seduto. Il dolore lombare è raramente dovuto a un danno reale: spesso è il risultato di posture scorrette protratte nel tempo, muscoli indeboliti dalla sedentarietà e un sistema nervoso che ha imparato a segnalare dolore come meccanismo di protezione.",
  },
  {
    icon: Zap,
    title: "Cervicalgia e tensioni al collo",
    body: "Ore alla scrivania con la testa protesa in avanti generano una sollecitazione importante sui muscoli del collo e sulla colonna vertebrale. Il risultato: dolore, mal di testa, tensioni e spesso anche dolore alle spalle.",
  },
  {
    icon: AlignCenter,
    title: "Problemi posturali e squilibri muscolari",
    body: "Una postura scorretta non è solo estetica: è una catena di compensazioni che il corpo costruisce nel tempo. Un piede pronato, un bacino ruotato, una spalla più alta dell'altra. Ogni squilibrio si ripercuote su tutto il resto, portando sintomi spesso lontani dalla causa reale.",
  },
  {
    icon: Move,
    title: "Dolori all'anca e alle ginocchia",
    body: "Spesso non nascono da lì, ma da pattern di movimento alterati: dal piede, dalla caviglia, dalla catena posteriore. Identificare la causa reale è il primo passo verso una risoluzione definitiva.",
  },
  {
    icon: ArrowDown,
    title: "Sciatica e dolori irradiati",
    body: "Il dolore che parte dalla zona lombare e scende lungo la gamba è spesso il segnale di una compressione che si può ridurre con i giusti esercizi e movimenti, senza ricorrere necessariamente ai farmaci.",
  },
  {
    icon: Clock,
    title: "Sedentarietà e lavoro d'ufficio",
    body: "Il corpo non è progettato per stare seduto 8 ore di fila. La rieducazione motoria ti insegna come compensare le ore alla scrivania e come muoverti meglio nel resto della giornata.",
  },
];

export default function SuCosaLavoriamoPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Su cosa lavoriamo</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          La maggior parte dei dolori cronici dipende da come il corpo si muove nel tempo — non dal punto in cui li senti.
          Ecco i problemi più comuni con cui lavoro.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {problems.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h2 className="mt-3 text-base font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-2xl bg-muted p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold">Hai uno di questi problemi?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Scrivimi: valutiamo insieme da dove partire.
            </p>
          </div>
          <Link
            href="/contatti"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Contattami
          </Link>
        </div>
      </section>
    </div>
  );
}
