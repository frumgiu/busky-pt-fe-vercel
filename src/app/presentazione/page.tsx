
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
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">Formazione</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Laureato in scienze motorie e sportive presso l'Università di Genova. etc...
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
