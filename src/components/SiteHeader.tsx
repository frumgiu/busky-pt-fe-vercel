"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-2 z-50 w-full px-4">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative flex items-center justify-between rounded-2xl border border-border bg-background/70 px-6 py-4 shadow-sm backdrop-blur-md backdrop-saturate-150">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/LOGO-COLORATO.png"
              alt="Logo"
              width={44}
              height={44}
              className="h-11 w-11"
              priority
            />
            <span className="flex flex-col leading-tight text-center">
              <span className="text-base font-semibold tracking-tight text-primary hover:opacity-90">
                {site.name}
              </span>
              <span className="mt-0.5 text-xs font-medium text-muted-foreground">
                {site.title}
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-4 text-sm font-medium text-muted-foreground md:flex">
            <Link href="/metodologia" className="hover:text-primary">
              Metodologia
            </Link>
            <Link href="/presentazione" className="hover:text-primary">
              Chi sono
            </Link>
            <Link href="/contatti" className="hover:text-primary">
              Contatti
            </Link>
            <ThemeToggle />
          </nav>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/60 text-foreground shadow-sm transition-colors hover:bg-muted md:hidden"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>

          {isOpen ? (
            <div className="absolute right-4 top-[calc(100%+10px)] w-56 rounded-2xl border border-border bg-background/90 p-2 shadow-lg backdrop-blur-md">
              <Link
                href="/metodologia"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Metodologia
              </Link>
              <Link
                href="/contatti"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Contatti
              </Link>
              <Link
                href="/presentazione"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                Chi sono
              </Link>
              <div className="mt-1 flex items-center justify-between rounded-xl px-3 py-2 text-sm text-muted-foreground">
                <span>Tema</span>
                <ThemeToggle />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
