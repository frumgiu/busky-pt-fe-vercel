"use client";

import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void;
      };
    };
  }
}

function loadInstagramEmbedScript() {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") return resolve();

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://www.instagram.com/embed.js";

    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Instagram embed script"));

    document.body.appendChild(script);
  });
}

export default function InstagramEmbedsCarousel({
  profileHref,
  permalinks,
}: {
  profileHref: string;
  permalinks: string[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const items = useMemo(
    () => permalinks.map((p) => p.trim()).filter(Boolean).slice(0, 6),
    [permalinks],
  );

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        await loadInstagramEmbedScript();
        if (cancelled) return;
        window.instgrm?.Embeds?.process?.();
      } catch {
        return;
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [items.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-ig-index]"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (!visible.length) return;
        const idxRaw = (visible[0].target as HTMLElement).dataset.igIndex;
        const idx = idxRaw ? Number(idxRaw) : NaN;
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      { root: container, threshold: [0.35, 0.5, 0.65, 0.8] },
    );

    for (const card of cards) observer.observe(card);

    return () => observer.disconnect();
  }, [items.length]);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-background/70 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Instagram</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Aggiungi 6 link di post/reel per mostrarli qui.
            </p>
          </div>
          <a
            href={profileHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Apri profilo
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-background/70 p-6 shadow-sm backdrop-blur">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Instagram</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Alcuni contenuti in evidenza.
          </p>
        </div>
        <a
          href={profileHref}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-primary hover:opacity-90"
        >
          Vedi tutto
        </a>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-px-6 snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:thin]"
      >
        {items.map((permalink, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={permalink}
              data-ig-index={index}
              className={
                "snap-center shrink-0 transition-all " +
                "w-[96%] sm:w-[76%] md:w-[36%] " +
                (isActive ? "scale-[1.02]" : "opacity-90")
              }
            >
              <div className="flex justify-center overflow-hidden">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={permalink}
                  data-instgrm-version="14"
                  style={{
                    background: "transparent",
                    border: 0,
                    margin: "0 auto",
                    padding: 0,
                    width: "100%",
                    maxWidth: "540px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
