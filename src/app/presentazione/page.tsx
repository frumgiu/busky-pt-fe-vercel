
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export default function PresentazionePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-medium text-muted-foreground">{site.title}</p>
        <h1 className="text-3xl font-semibold tracking-tight">Alessandro Buscaglia</h1>
      </header>

      <section className="grid gap-5 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Ciao, sono Alessandro</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Laureato presso l'Università di Genova in Scienze Motorie, Sport e Salute, mi occupo di movimento. Non solo esercizio fisico, ma un approccio a 360 gradi che unisce
            la rieducazione posturale all’allenamento funzionale per migliorare la qualità della vita, oggi
            e negli anni a venire.
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Ho scelto questo lavoro perché credo fermamente che <b>il corpo umano sappia
            come muoversi</b>. Quando smette di farlo, iniziano i problemi. Il mio obiettivo non è
            mascherare il sintomo, ma trovare la causa, in modo da darti gli strumenti necessari per
            risolverla in modo duraturo.
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Non sono un fisioterapista e non mi occupo di riabilitazione. Il mio campo è la <b>rieducazione
            motoria</b>: aiuto chi ha dolori cronici o fastidi dati da posture “scorrette”, chi lavora tante ore
            seduto e chi vuole tornare a muoversi liberamente, senza paura di farsi male.
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Lavoro con le persone, non sulle persone. Ogni percorso parte da una valutazione attenta
            del <b>tuo modo di muoverti</b>.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-muted shadow-sm">
          <Image
            src="/images/presentazione.png"
            alt={`Foto di ${site.name}`}
            width={900}
            height={1100}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>
    </div>
  );
}
