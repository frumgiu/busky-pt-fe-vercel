import Link from "next/link";
import { site } from "@/config/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-base font-semibold tracking-tight text-primary hover:opacity-90">
          {site.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-muted-foreground">
          <Link href="/metodologia" className="hover:text-primary">
            Metodologia
          </Link>
          <Link href="/contatti" className="hover:text-primary">
            Contatti
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
