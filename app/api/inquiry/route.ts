import { NextRequest, NextResponse } from "next/server";

const CRM_URL =
  "http://167.172.131.244:8000/api/website-inquiry?secret=REDACTED_SECRET";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  try {
    const upstream = await fetch(CRM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return NextResponse.json({ ok: upstream.ok }, { status: upstream.status });
  } catch (err) {
    console.error("inquiry proxy: upstream unreachable", err);
    return NextResponse.json({ error: "upstream unreachable" }, { status: 502 });
  }
}
