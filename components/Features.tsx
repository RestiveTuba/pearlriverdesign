"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Minimal stroke icon, single path element, Heroicons-compatible */
function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
      {d2 && <path d={d2} />}
    </svg>
  );
}

const FEATURES = [
  {
    title: "Built around your work",
    body: "We write copy that names your services, your towns, and what sets you apart. Not boilerplate with your business name swapped in.",
    icon: (
      <Icon d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    ),
  },
  {
    title: "Loads on any phone",
    body: "We test on real devices at real connection speeds. A site that loads slow or breaks on mobile loses the customer before you get the call.",
    icon: (
      <Icon d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    ),
  },
  {
    title: "Ranks for your city and trade",
    body: "Title tags, structured data, and a Google Business link all set up for you. When someone searches for your trade in your town, your site shows up.",
    icon: (
      <Icon d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
    ),
  },
  {
    title: "Live the next morning",
    body: "One call to collect your info. We handle design, copy, and setup. Most clients have a live URL by the following morning.",
    icon: (
      <Icon d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    ),
  },
  {
    title: "Leads go straight to you",
    body: "The contact form sends to your email the moment someone submits it. No portal to log into, no leads sitting in a queue.",
    icon: (
      <Icon d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    ),
  },
  {
    title: "Nothing to manage",
    body: "Hosting, domain, and SSL are included. Renewals, server upkeep, and fixes are our problem, not yours.",
    icon: (
      <Icon d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    ),
  },
];

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function Features() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      style={{
        background: "var(--warm-gray)",
        padding: "clamp(64px, 8vw, 128px) 0",
      }}
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
          Everything your business needs online
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
          {FEATURES.map(({ title, body, icon }, i) => (
            <motion.div
              key={title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: shouldReduceMotion ? 0 : i * 0.08 }}
            >
              {/* Icon */}
              <div
                className="mb-4"
                style={{ color: "var(--navy)" }}
              >
                {icon}
              </div>

              {/* Title */}
              <h3
                className="font-heading mb-2"
                style={{ color: "var(--charcoal)", fontSize: "16px", lineHeight: 1.3 }}
              >
                {title}
              </h3>

              {/* Body */}
              <p
                className="font-sans"
                style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.7" }}
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
