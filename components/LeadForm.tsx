"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const BUSINESS_TYPES = [
  "Plumber",
  "Electrician",
  "Roofer",
  "HVAC",
  "Painter",
  "Landscaper",
  "Contractor (General)",
  "Barbershop / Salon",
  "Restaurant / Food",
  "Retailer",
  "Other",
];

type Status = "idle" | "sending" | "success" | "error";

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.18)",
  color: "#fff",
  padding: "13px 16px",
  fontSize: "15px",
  fontFamily: "inherit",
  outline: "none",
  appearance: "none",
  WebkitAppearance: "none",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,0.55)",
  fontSize: "12px",
  letterSpacing: "0.1em",
  marginBottom: "8px",
  fontFamily: "inherit",
};

export default function LeadForm() {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      business_name: fd.get("business_name") as string,
      business_type: fd.get("business_type") as string,
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or call us directly.");
    }
  }

  return (
    <section
      id="contact"
      style={{
        background: "var(--navy)",
        padding: "clamp(64px, 8vw, 128px) 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Left: copy */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
            className="flex flex-col justify-center"
          >
            <h2
              className="font-heading mb-6"
              style={{
                color: "#fff",
                fontSize: "clamp(26px, 3.5vw, 42px)",
                lineHeight: 1.15,
              }}
            >
              Ready to get online?
            </h2>
            <p
              className="font-sans mb-8"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              Fill out the form and we&apos;ll reach out within a few hours to schedule a short call. Your site can be live in 24 hours.
            </p>
            <div
              className="font-label text-xs"
              style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em" }}
            >
              NO CONTRACTS. NO SURPRISES.
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            {status === "success" ? (
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={spring}
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "40px 32px",
                }}
              >
                <div
                  className="font-mono mb-4"
                  style={{ color: "#28C840", fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  ✓ SUBMITTED
                </div>
                <p
                  className="font-heading"
                  style={{ color: "#fff", fontSize: "20px", lineHeight: 1.4 }}
                >
                  We&apos;ll be in touch soon.
                </p>
                <p
                  className="font-sans mt-3"
                  style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.6 }}
                >
                  Expect a call or text within a few hours. We look forward to building your site.
                </p>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="flex flex-col gap-5">

                  {/* Name */}
                  <div>
                    <label htmlFor="lf-name" className="font-label" style={LABEL_STYLE}>
                      YOUR NAME
                    </label>
                    <input
                      id="lf-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="John Smith"
                      disabled={status === "sending"}
                      style={INPUT_STYLE}
                    />
                  </div>

                  {/* Business name */}
                  <div>
                    <label htmlFor="lf-biz" className="font-label" style={LABEL_STYLE}>
                      BUSINESS NAME
                    </label>
                    <input
                      id="lf-biz"
                      name="business_name"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Smith Plumbing LLC"
                      disabled={status === "sending"}
                      style={INPUT_STYLE}
                    />
                  </div>

                  {/* Business type */}
                  <div>
                    <label htmlFor="lf-type" className="font-label" style={LABEL_STYLE}>
                      TYPE OF BUSINESS
                    </label>
                    <div style={{ position: "relative" }}>
                      <select
                        id="lf-type"
                        name="business_type"
                        required
                        defaultValue=""
                        disabled={status === "sending"}
                        style={{
                          ...INPUT_STYLE,
                          cursor: "pointer",
                          paddingRight: "40px",
                        }}
                      >
                        <option value="" disabled style={{ background: "var(--navy)" }}>
                          Select one…
                        </option>
                        {BUSINESS_TYPES.map((t) => (
                          <option key={t} value={t} style={{ background: "var(--navy)" }}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {/* Custom chevron */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          right: "14px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="lf-phone" className="font-label" style={LABEL_STYLE}>
                      PHONE NUMBER
                    </label>
                    <input
                      id="lf-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="(845) 555-1234"
                      disabled={status === "sending"}
                      style={INPUT_STYLE}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="lf-email" className="font-label" style={LABEL_STYLE}>
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="lf-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="john@smithplumbing.com"
                      disabled={status === "sending"}
                      style={INPUT_STYLE}
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && error && (
                    <p
                      className="font-sans text-sm"
                      style={{ color: "#FF6B6B", lineHeight: 1.5 }}
                      role="alert"
                    >
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="font-heading transition-transform duration-150 active:scale-[0.97]"
                    style={{
                      background: "#fff",
                      color: "var(--navy)",
                      padding: "15px 24px",
                      fontSize: "15px",
                      letterSpacing: "0.02em",
                      border: "none",
                      cursor: status === "sending" ? "wait" : "pointer",
                      opacity: status === "sending" ? 0.7 : 1,
                      marginTop: "4px",
                    }}
                  >
                    {status === "sending" ? "Sending…" : "Get my free quote"}
                  </button>

                  {/* JS-disabled fallback */}
                  <noscript>
                    <a
                      href="mailto:jackson@pearlriverdesign.dev?subject=Website%20Quote%20Request"
                      className="font-sans text-sm"
                      style={{ color: "rgba(255,255,255,0.65)", textDecoration: "underline" }}
                    >
                      No JavaScript? Email us instead
                    </a>
                  </noscript>

                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
