import { NextRequest, NextResponse } from "next/server";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const now = Date.now();
  const window = 10 * 60 * 1000;
  const entry = rateLimit.get(ip);

  if (entry && now < entry.resetAt) {
    if (entry.count >= 5) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + window });
  }
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: `Zapier error ${res.status}` }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
