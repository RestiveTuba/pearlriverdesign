"use client";

import { useState } from "react";

type Review = { text: string; name: string };
type Status = "idle" | "sending" | "success" | "error";

const INPUT =
  "w-full border border-black/[0.12] rounded bg-white px-4 py-3 font-sans text-[15px] text-charcoal placeholder:text-muted focus:outline-none focus:border-navy transition-colors disabled:opacity-50";
const LABEL =
  "font-label text-[11px] tracking-[0.1em] uppercase text-muted block mb-2";
const SECTION_HEADING =
  "font-heading text-[11px] tracking-[0.14em] uppercase text-muted mb-5";

export default function OnboardingPage() {
  const [businessName, setBusinessName] = useState("");
  const [ownerFirstName, setOwnerFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessLocation, setBusinessLocation] = useState("");
  const [yearsInBusiness, setYearsInBusiness] = useState("");
  const [towns, setTowns] = useState("");
  const [services, setServices] = useState("");
  const [notes, setNotes] = useState("");
  const [reviews, setReviews] = useState<Review[]>([
    { text: "", name: "" },
    { text: "", name: "" },
    { text: "", name: "" },
  ]);
  const [logoUrl, setLogoUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const sending = status === "sending";

  function setReview(i: number, field: keyof Review, val: string) {
    setReviews((prev) => prev.map((r, j) => (j === i ? { ...r, [field]: val } : r)));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!businessName.trim()) { setError("Business name is required."); return; }
    if (!email.trim()) { setError("Email address is required."); return; }

    setStatus("sending");
    setError("");

    const payload = {
      template: "a",
      businessName: businessName.trim(),
      ownerFirstName: ownerFirstName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      businessType: businessType.trim(),
      businessLocation: businessLocation.trim(),
      yearsInBusiness: yearsInBusiness.trim(),
      towns: towns.split(",").map((t) => t.trim()).filter(Boolean),
      services: services.split(",").map((s) => s.trim()).filter(Boolean),
      notes: notes.trim(),
      reviews: reviews
        .filter((r) => r.text.trim() || r.name.trim())
        .map((r) => ({ text: r.text.trim(), name: r.name.trim() })),
      logoUrl: logoUrl.trim(),
    };

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email jackson@pearlriverdesign.dev.");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-dvh bg-warm-gray flex items-start justify-center px-5 py-16">
        <div className="w-full max-w-lg bg-white rounded p-8 sm:p-10">
          <div
            className="font-label text-[12px] tracking-[0.1em] mb-5"
            style={{ color: "#28C840" }}
          >
            ✓ SUBMITTED
          </div>
          <h1 className="font-heading text-[24px] text-charcoal leading-snug mb-3">
            Your site is being built.
          </h1>
          <p className="font-sans text-[15px] leading-relaxed text-muted">
            You&apos;ll receive an email at{" "}
            <span className="text-charcoal font-medium">{email}</span> when
            it&apos;s live — usually within 1–2 business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-warm-gray">
      <div className="max-w-lg mx-auto px-5 py-10 pb-20">

        {/* Header */}
        <div className="mb-8">
          <p className="font-heading text-navy text-[15px] tracking-tight mb-3">
            Pearl River Design
          </p>
          <h1 className="font-heading text-[30px] sm:text-[36px] text-charcoal leading-[1.1] mb-3">
            Let&apos;s build your site.
          </h1>
          <p className="font-sans text-muted text-[15px] leading-relaxed">
            Fill this out and we&apos;ll handle the rest. Takes about 5 minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-3">

            {/* ── Section 1: Business basics ── */}
            <div className="bg-white rounded p-6 flex flex-col gap-5">
              <p className={SECTION_HEADING}>Your Business</p>

              <div>
                <label htmlFor="ob-businessName" className={LABEL}>
                  Business Name <span className="text-navy">*</span>
                </label>
                <input
                  id="ob-businessName"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="Smith Roofing LLC"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                />
              </div>

              <div>
                <label htmlFor="ob-ownerFirstName" className={LABEL}>
                  Your First Name
                </label>
                <input
                  id="ob-ownerFirstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Mike"
                  value={ownerFirstName}
                  onChange={(e) => setOwnerFirstName(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                />
              </div>

              <div>
                <label htmlFor="ob-phone" className={LABEL}>
                  Phone Number
                </label>
                <input
                  id="ob-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(845) 555-1234"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                />
              </div>

              <div>
                <label htmlFor="ob-email" className={LABEL}>
                  Email Address <span className="text-navy">*</span>
                </label>
                <input
                  id="ob-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="mike@smithroofing.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                />
              </div>

              <div>
                <label htmlFor="ob-businessType" className={LABEL}>
                  Business Type
                </label>
                <input
                  id="ob-businessType"
                  type="text"
                  placeholder="e.g. Roofing, Plumbing, HVAC"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                />
              </div>

              <div>
                <label htmlFor="ob-businessLocation" className={LABEL}>
                  City / Town
                </label>
                <input
                  id="ob-businessLocation"
                  type="text"
                  placeholder="e.g. Pearl River, NY"
                  value={businessLocation}
                  onChange={(e) => setBusinessLocation(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                />
              </div>

              <div>
                <label htmlFor="ob-yearsInBusiness" className={LABEL}>
                  Years in Business
                </label>
                <input
                  id="ob-yearsInBusiness"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="12"
                  value={yearsInBusiness}
                  onChange={(e) => setYearsInBusiness(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                />
              </div>
            </div>

            {/* ── Section 2: Market ── */}
            <div className="bg-white rounded p-6 flex flex-col gap-5">
              <p className={SECTION_HEADING}>Your Market</p>

              <div>
                <label htmlFor="ob-towns" className={LABEL}>
                  Towns You Serve
                </label>
                <input
                  id="ob-towns"
                  type="text"
                  placeholder="Pearl River, Nanuet, Suffern, Nyack"
                  value={towns}
                  onChange={(e) => setTowns(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                />
                <p className="font-sans text-[12px] text-muted mt-1.5">
                  Separate with commas
                </p>
              </div>

              <div>
                <label htmlFor="ob-services" className={LABEL}>
                  Services You Offer
                </label>
                <input
                  id="ob-services"
                  type="text"
                  placeholder="Roof repair, New roofs, Gutters, Inspections"
                  value={services}
                  onChange={(e) => setServices(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                />
                <p className="font-sans text-[12px] text-muted mt-1.5">
                  Separate with commas
                </p>
              </div>
            </div>

            {/* ── Section 3: About ── */}
            <div className="bg-white rounded p-6 flex flex-col gap-5">
              <p className={SECTION_HEADING}>About Your Business</p>

              <div>
                <label htmlFor="ob-notes" className={LABEL}>
                  Description{" "}
                  <span className="normal-case tracking-normal font-sans font-normal text-muted">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="ob-notes"
                  rows={3}
                  placeholder="Tell us anything you'd like on your site — years in business, licenses, what makes you different..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  disabled={sending}
                  className={`${INPUT} resize-none`}
                />
              </div>
            </div>

            {/* ── Section 4: Reviews ── */}
            <div className="bg-white rounded p-6 flex flex-col gap-6">
              <div>
                <p className={SECTION_HEADING}>Customer Reviews</p>
                <p className="font-sans text-[13px] text-muted -mt-3">
                  Up to 3. Skip any you don&apos;t have yet.
                </p>
              </div>

              {reviews.map((review, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <p className="font-label text-[11px] tracking-[0.1em] uppercase text-muted/70">
                    Review {i + 1}
                  </p>
                  <div>
                    <label
                      htmlFor={`ob-review-text-${i}`}
                      className={LABEL}
                    >
                      Review Text
                    </label>
                    <textarea
                      id={`ob-review-text-${i}`}
                      rows={3}
                      placeholder="They did an amazing job on our roof. On time, fair price, no mess left behind."
                      value={review.text}
                      onChange={(e) => setReview(i, "text", e.target.value)}
                      disabled={sending}
                      className={`${INPUT} resize-none`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`ob-review-name-${i}`}
                      className={LABEL}
                    >
                      Reviewer Name
                    </label>
                    <input
                      id={`ob-review-name-${i}`}
                      type="text"
                      placeholder="Linda M."
                      value={review.name}
                      onChange={(e) => setReview(i, "name", e.target.value)}
                      disabled={sending}
                      className={INPUT}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ── Section 5: Logo ── */}
            <div className="bg-white rounded p-6 flex flex-col gap-5">
              <p className={SECTION_HEADING}>Logo</p>

              <div>
                <label htmlFor="ob-logoUrl" className={LABEL}>
                  Logo URL{" "}
                  <span className="normal-case tracking-normal font-sans font-normal text-muted">
                    (optional)
                  </span>
                </label>
                <input
                  id="ob-logoUrl"
                  type="text"
                  placeholder="https://..."
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  disabled={sending}
                  className={INPUT}
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                />
                <p className="font-sans text-[12px] text-muted mt-1.5">
                  Paste a link to your logo image if you have one
                </p>
              </div>
            </div>

            {/* ── Error ── */}
            {error && (
              <p
                className="font-sans text-[14px] leading-relaxed px-1"
                style={{ color: "#c0392b" }}
                role="alert"
              >
                {error}
              </p>
            )}

            {/* ── Submit ── */}
            <button
              type="submit"
              disabled={sending}
              className="font-heading w-full rounded py-4 text-[15px] tracking-[0.03em] text-white transition-opacity active:scale-[0.98] disabled:opacity-60"
              style={{ background: "var(--navy)" }}
            >
              {sending ? "Submitting…" : "Submit"}
            </button>

            <p className="font-sans text-[12px] text-muted text-center px-4">
              Questions? Email{" "}
              <a
                href="mailto:jackson@pearlriverdesign.dev"
                className="text-charcoal underline underline-offset-2"
              >
                jackson@pearlriverdesign.dev
              </a>
            </p>

          </div>
        </form>
      </div>
    </div>
  );
}
