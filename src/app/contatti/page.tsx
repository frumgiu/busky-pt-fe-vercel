import { site } from "@/config/site";
import { IconInstagram, IconMail, IconPhone } from "@/components/icons/ContactIcons";

export default function ContattiPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Contatti</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          Vuoi migliorare forza, composizione corporea o performance? Scrivimi: ti rispondo entro 24–48h.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <a
          className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-colors hover:bg-muted"
          href={site.contacts.email.href}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <IconMail className="h-5 w-5" />
            </span>
            <p className="text-sm text-muted-foreground">Email</p>
          </div>
          <p className="mt-2 text-base font-semibold">{site.contacts.email.address}</p>
          <p className="mt-2 text-sm text-muted-foreground">Per richieste e informazioni</p>
        </a>

        <a
          className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-colors hover:bg-muted"
          href={site.contacts.phone.href}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <IconPhone className="h-5 w-5" />
            </span>
            <p className="text-sm text-muted-foreground">Telefono</p>
          </div>
          <p className="mt-2 text-base font-semibold">{site.contacts.phone.display}</p>
          <p className="mt-2 text-sm text-muted-foreground">Chiamate / SMS</p>
        </a>

        <a
          className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-colors hover:bg-muted"
          href={site.contacts.instagram.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <IconInstagram className="h-5 w-5" />
            </span>
            <p className="text-sm text-muted-foreground">Instagram</p>
          </div>
          <p className="mt-2 text-base font-semibold">{site.contacts.instagram.handle}</p>
          <p className="mt-2 text-sm text-muted-foreground">Contenuti e disponibilità</p>
        </a>
      </section>

      <section className="mt-10 rounded-2xl bg-muted p-6">
        <h2 className="text-lg font-semibold">Dove lavoro</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Online coaching e, se disponibile, sessioni in presenza nella tua zona. Indicami città e giorni preferiti.
        </p>
      </section>
    </div>
  );
}
