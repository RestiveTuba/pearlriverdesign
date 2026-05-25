"use client";

import { motion, useReducedMotion } from "framer-motion";

const WEBSITE_FEATURES = [
  "Custom site built around your trade and service area",
  "Mobile-first, loads in under 2 seconds",
  "SEO setup for your city and zip codes",
  "Contact form routed to your email",
  "Hosting, SSL, and domain management included",
  "Live within 24 hours of your first call",
];

const GROWTH_FEATURES = [
  "Everything in the Website plan",
  "3 posts per week on Instagram and Facebook, designed, written, and posted for you",
  "Static graphics plus short video Reels",
  "Monthly content calendar",
  "Captions and hashtags on every post",
  "Text us your updates and we handle the rest",
];

function Check({ faint }: { faint?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: "3px" }}
    >
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke={faint ? "var(--muted)" : "rgba(255,255,255,0.55)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="bg-white"
      style={{ padding: "clamp(64px, 8vw, 128px) 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="font-heading mb-16 md:mb-20"
          style={{
            color: "var(--charcoal)",
            fontSize: "clamp(26px, 3.5vw, 42px)",
          }}
        >
          Simple, honest pricing
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Starter — website */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: shouldReduceMotion ? 0 : 0.04 }}
            style={{ background: "var(--navy)", padding: "clamp(32px, 4vw, 48px)" }}
          >
            <span
              className="font-label text-xs block mb-8"
              style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em" }}
            >
              STARTER
            </span>

            <div className="mb-1">
              <span
                className="font-mono"
                style={{
                  color: "#fff",
                  fontSize: "clamp(48px, 5vw, 64px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                $1,000
              </span>
            </div>
            <p
              className="font-sans mb-10"
              style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}
            >
              one-time payment
            </p>

            <ul className="space-y-3 mb-10">
              {WEBSITE_FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <Check />
                  <span
                    className="font-sans"
                    style={{ color: "rgba(255,255,255,0.82)", fontSize: "15px", lineHeight: 1.5 }}
                  >
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block text-center font-heading transition-transform duration-150 active:scale-[0.97]"
              style={{
                background: "#fff",
                color: "var(--navy)",
                padding: "15px 24px",
                fontSize: "15px",
                letterSpacing: "0.02em",
              }}
            >
              Get started
            </a>
          </motion.div>

          {/* Growth — website + social */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: shouldReduceMotion ? 0 : 0.12 }}
            style={{
              background: "var(--navy)",
              padding: "clamp(32px, 4vw, 48px)",
              outline: "2px solid rgba(255,255,255,0.18)",
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <span
                className="font-label text-xs"
                style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em" }}
              >
                GROWTH
              </span>
              <span
                className="font-label text-xs"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.1em",
                  background: "rgba(255,255,255,0.12)",
                  padding: "3px 8px",
                }}
              >
                MOST POPULAR
              </span>
            </div>

            <div className="mb-1 flex items-end gap-2">
              <span
                className="font-mono"
                style={{
                  color: "#fff",
                  fontSize: "clamp(48px, 5vw, 64px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                $300
              </span>
              <span
                className="font-sans pb-2"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px" }}
              >
                /month
              </span>
            </div>
            <p
              className="font-sans mb-10"
              style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.6 }}
            >
              Everything in Starter, plus 3x/week social content for Instagram and Facebook, monthly content calendar, and captions — all posted for you.
            </p>

            <ul className="space-y-3 mb-10">
              {GROWTH_FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <Check />
                  <span
                    className="font-sans"
                    style={{ color: "rgba(255,255,255,0.82)", fontSize: "15px", lineHeight: 1.5 }}
                  >
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block text-center font-heading transition-transform duration-150 active:scale-[0.97]"
              style={{
                background: "#fff",
                color: "var(--navy)",
                padding: "15px 24px",
                fontSize: "15px",
                letterSpacing: "0.02em",
              }}
            >
              Get started
            </a>
          </motion.div>

        </div>

        {/* Footnote */}
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="font-label text-xs mt-8 text-center"
          style={{ color: "var(--muted)", letterSpacing: "0.08em" }}
        >
          No contracts. No surprise renewals.
        </motion.p>

      </div>
    </section>
  );
}
