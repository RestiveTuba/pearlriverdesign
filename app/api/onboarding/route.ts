import { NextRequest, NextResponse } from "next/server";

const DEPLOY_URL = `http://167.172.131.244:8000/api/webhook/google-form?secret=${process.env.DEPLOY_SECRET}`;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!process.env.DEPLOY_SECRET) {
    console.error("onboarding proxy: DEPLOY_SECRET not set");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  try {
    const upstream = await fetch(DEPLOY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const text = await upstream.text();
    return new NextResponse(text, {
      status: upstream.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("onboarding proxy: upstream unreachable", err);
    return NextResponse.json({ error: "upstream unreachable" }, { status: 502 });
  }
}
