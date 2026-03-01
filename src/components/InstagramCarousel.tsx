"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

type InstagramMediaItem = {
  id: string;
  caption?: string;
  media_type: InstagramMediaType;
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp?: string;
};

type ApiResponse =
  | { ok: true; items: InstagramMediaItem[] }
  | { ok: false; items: InstagramMediaItem[]; error: string; details?: string };

function pickImageUrl(item: InstagramMediaItem) {
  if (item.media_type === "VIDEO") return item.thumbnail_url ?? item.media_url;
  return item.media_url;
}

export default function InstagramCarousel({
  profileHref,
}: {
  profileHref: string;
}) {
  const [items, setItems] = useState<InstagramMediaItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const res = await fetch("/api/instagram", { cache: "no-store" });
        const data = (await res.json()) as ApiResponse;

        if (!isMounted) return;

        if (!data.ok) {
          setItems([]);
          setError(data.error);
          return;
        }

        setItems(data.items);
        setError(null);
      } catch (e) {
        if (!isMounted) return;
        setItems([]);
        setError(e instanceof Error ? e.message : String(e));
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const ids = useMemo(() => (items ?? []).map((i) => i.id), [items]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-ig-id]"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (!visible.length) return;
        const id = (visible[0].target as HTMLElement).dataset.igId;
        if (id) setActiveId(id);
      },
      {
        root: container,
        threshold: [0.35, 0.5, 0.65, 0.8],
      },
    );

    for (const card of cards) observer.observe(card);

    return () => observer.disconnect();
  }, [ids]);

  if (items === null) {
    return (
      <div className="rounded-2xl border border-border bg-background/70 p-6 shadow-sm backdrop-blur">
        <div className="h-24 animate-pulse rounded-xl bg-muted" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-background/70 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Instagram</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {error ? "Impossibile caricare i post in questo momento." : "Nessun post disponibile."}
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
            Ultimi post dal profilo.
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
        {items.map((item) => {
          const src = pickImageUrl(item);
          const isActive = activeId ? activeId === item.id : false;

          return (
            <a
              key={item.id}
              href={item.permalink}
              target="_blank"
              rel="noreferrer"
              data-ig-id={item.id}
              className={
                "snap-center shrink-0 rounded-2xl border border-border bg-background shadow-sm transition-all " +
                "w-[70%] sm:w-[42%] md:w-[32%] " +
                (isActive ? "scale-[1.03] ring-1 ring-primary/30" : "opacity-80 hover:opacity-100")
              }
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                {src ? (
                  <Image
                    src={src}
                    alt={item.caption ? item.caption.slice(0, 80) : "Post Instagram"}
                    fill
                    sizes="(max-width: 768px) 70vw, (max-width: 1024px) 42vw, 32vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-muted" />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
