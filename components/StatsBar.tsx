"use client";

import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { number: "100+",  label: "Businesses Contacted" },
  { number: "5",     label: "Towns Covered" },
  { number: "2-Min", label: "Deploy Time" },
];

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function StatsBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="stats"
      style={{ background: "var(--warm-gray)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {STATS.map(({ number, label }, i) => (
            <motion.div
              key={label}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: shouldReduceMotion ? 0 : i * 0.1 }}
              className={[
                "flex flex-col items-center text-center py-12 px-10",
                i > 0 ? "border-t md:border-t-0 md:border-l" : "",
              ].join(" ")}
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="font-mono block leading-none mb-3"
                style={{
                  color: "var(--charcoal)",
                  fontSize: "clamp(44px, 4.5vw, 58px)",
                  letterSpacing: "-0.03em",
                }}
              >
                {number}
              </span>
              <span
                className="font-sans text-sm"
                style={{ color: "var(--muted)", letterSpacing: "0.02em" }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
