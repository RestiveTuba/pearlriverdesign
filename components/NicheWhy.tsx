"use client";

import { motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

interface NicheWhyProps {
  heading: string;
  body: string;
  trade: string;
}

export default function NicheWhy({ heading, body, trade }: NicheWhyProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      style={{
        background: "var(--warm-gray)",
        padding: "clamp(64px, 8vw, 112px) 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
          >
            <p
              className="font-label text-xs mb-4"
              style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
            >
              WHY IT MATTERS
            </p>
            <h2
              className="font-heading"
              style={{
                color: "var(--charcoal)",
                fontSize: "clamp(22px, 3vw, 36px)",
                lineHeight: 1.2,
              }}
            >
              {heading}
            </h2>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...spring, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <p
              className="font-sans"
              style={{ color: "var(--charcoal)", fontSize: "16px", lineHeight: 1.75 }}
            >
              {body}
            </p>
            <p
              className="font-sans mt-5"
              style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.7 }}
            >
              Every site we build is optimized for local search from day one. When someone in Rockland County searches for a {trade}, your name is there.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
