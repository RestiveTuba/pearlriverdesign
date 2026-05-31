import { NextRequest, NextResponse } from "next/server";

const DEPLOY_URL = `http://167.172.131.244:8000/api/webhook/google-form?secret=${process.env.DEPLOY_SECRET}`;
const NOTIFY_EMAIL = "jackson@pearlriverdesign.dev";

async function sendNotification(body: Record<string, unknown>) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return;

  const services = Array.isArray(body.services) ? (body.services as string[]).join(", ") : body.services;
  const towns = Array.isArray(body.towns) ? (body.towns as string[]).join(", ") : body.towns;
  const reviews = Array.isArray(body.reviews)
    ? (body.reviews as Array<{ text: string; name: string }>)
        .filter((r) => r.text)
        .map((r, i) => `Review ${i + 1}: "${r.text}" — ${r.name || "Anonymous"}`)
        .join("\n")
    : "";

  const text = [
    `NEW ONBOARDING SUBMISSION`,
    `${"─".repeat(40)}`,
    `Business : ${body.businessName || "—"}`,
    `Owner    : ${body.ownerFirstName || "—"}`,
    `Phone    : ${body.phone || "—"}`,
    `Email    : ${body.email || "—"}`,
    `Type     : ${body.businessType || "—"}`,
    `Location : ${body.businessLocation || "—"}`,
    `Years    : ${body.yearsInBusiness || "—"}`,
    `Towns    : ${towns || "—"}`,
    `Services : ${services || "—"}`,
    `Logo URL : ${body.logoUrl || "—"}`,
    body.notes ? `\nNotes:\n${body.notes}` : "",
    reviews ? `\nReviews:\n${reviews}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Pearl River Design <jackson@pearlriverdesign.me>",
      to: [NOTIFY_EMAIL],
      subject: `📋 New Onboarding: ${body.businessName || "Unknown"}`,
      text,
    }),
  }).catch((err) => console.error("onboarding notify: resend error", err));
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!process.env.DEPLOY_SECRET) {
    console.error("onboarding proxy: DEPLOY_SECRET not set");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  // Await notification before proxying — Vercel kills non-awaited work after response
  await sendNotification(body);

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
