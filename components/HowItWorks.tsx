"use client";

import { motion, useReducedMotion } from "framer-motion";

function WrenchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0D1F3C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3z" />
      <path d="M6.05 19.05a7 7 0 109.9-9.9l-9.9 9.9z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0D1F3C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0D1F3C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const STEPS = [
  {
    num: "01",
    icon: <WrenchIcon />,
    title: "We learn your business",
    body: "After one 20-minute call, you have a clear scope: your services, your towns, your price. Nothing left to figure out.",
  },
  {
    num: "02",
    icon: <MonitorIcon />,
    title: "We build your site",
    body: "By the next morning you have a live URL with your name, your work, and a contact form that sends directly to your phone.",
  },
  {
    num: "03",
    icon: <MapPinIcon />,
    title: "You start getting found",
    body: "Within days your site appears in Google searches for your trade and your town. Leads come to you instead of going to a competitor.",
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
          {STEPS.map(({ num, icon, title, body }, i) => (
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
                className="font-label text-xs block mb-4"
                style={{ color: "var(--navy)", letterSpacing: "0.12em" }}
              >
                {num}
              </span>

              {/* Icon */}
              <div className="mb-5">{icon}</div>

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
