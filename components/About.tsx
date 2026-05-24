"use client";

import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="bg-white"
      style={{ padding: "clamp(64px, 8vw, 128px) 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left: label + heading */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
          >
            <span
              className="font-label text-xs block mb-6"
              style={{ color: "var(--muted)", letterSpacing: "0.12em" }}
            >
              ABOUT
            </span>
            <h2
              className="font-heading"
              style={{
                color: "var(--charcoal)",
                fontSize: "clamp(26px, 3.5vw, 42px)",
                lineHeight: 1.15,
              }}
            >
              Built for the businesses that keep Rockland County running
            </h2>
          </motion.div>

          {/* Right: body copy */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="flex flex-col gap-5"
          >
            <p
              className="font-sans"
              style={{ color: "var(--charcoal)", fontSize: "16px", lineHeight: 1.75 }}
            >
              Pearl River Design is a one-person web studio based in Pearl River, NY. We build websites for local service businesses: contractors, tradespeople, and shops in the towns we grew up in.
            </p>
            <p
              className="font-sans"
              style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.75 }}
            >
              Most web agencies charge $5,000 and take two months. Most templates look the same. We do neither. One call, custom design, live in 24 hours.
            </p>
            <p
              className="font-sans"
              style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.75 }}
            >
              We serve Pearl River, Suffern, Nyack, Nanuet, Spring Valley, and the surrounding area. If that&apos;s your town, we&apos;d like to help.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
