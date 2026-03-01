import { NextResponse } from "next/server";

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

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !accessToken) {
    return NextResponse.json(
      {
        ok: false,
        error: "Missing INSTAGRAM_USER_ID or INSTAGRAM_ACCESS_TOKEN",
        items: [] as InstagramMediaItem[],
      },
      { status: 200 },
    );
  }

  const url = new URL(`https://graph.facebook.com/v19.0/${userId}/media`);
  url.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
  );
  url.searchParams.set("limit", "6");
  url.searchParams.set("access_token", accessToken);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const body = await res.text();
      return NextResponse.json(
        {
          ok: false,
          error: `Instagram API error: ${res.status} ${res.statusText}`,
          details: body,
          items: [] as InstagramMediaItem[],
        },
        { status: 200 },
      );
    }

    const data = (await res.json()) as { data?: InstagramMediaItem[] };

    return NextResponse.json({ ok: true, items: data.data ?? [] });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to fetch Instagram media",
        details: err instanceof Error ? err.message : String(err),
        items: [] as InstagramMediaItem[],
      },
      { status: 200 },
    );
  }
}
