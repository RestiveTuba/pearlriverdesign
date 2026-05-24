"use client";

import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "We learn your business",
    body: "A short call. We collect your info, photos, and services.",
  },
  {
    num: "02",
    title: "We build your site",
    body: "Custom site built and deployed same day, no templates.",
  },
  {
    num: "03",
    title: "You start getting found",
    body: "Live on Google, mobile-ready, accepting customers.",
  },
];

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
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
          className="font-heading mb-16 md:mb-20 max-w-lg"
          style={{
            color: "var(--charcoal)",
            fontSize: "clamp(26px, 3.5vw, 42px)",
            lineHeight: 1.15,
          }}
        >
          From first call to live site in 24 hours
        </motion.h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {STEPS.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: shouldReduceMotion ? 0 : i * 0.08 }}
            >
              {/* Top rule */}
              <div
                className="w-full mb-7"
                style={{ height: "2px", background: "var(--navy)" }}
              />

              {/* Step number */}
              <span
                className="font-label text-xs block mb-5"
                style={{ color: "var(--navy)", letterSpacing: "0.12em" }}
              >
                {num}
              </span>

              {/* Title */}
              <h3
                className="font-heading mb-3"
                style={{ color: "var(--charcoal)", fontSize: "19px" }}
              >
                {title}
              </h3>

              {/* Body */}
              <p
                className="font-sans"
                style={{
                  color: "var(--muted)",
                  fontSize: "15px",
                  lineHeight: "1.7",
                }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
