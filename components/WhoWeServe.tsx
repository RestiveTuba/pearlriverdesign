"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

const TRADES = [
  { slug: "plumbing",     label: "Plumbers",              line: "Drain, pipe, and fixture work across Rockland County." },
  { slug: "roofing",      label: "Roofers",               line: "Repairs, replacements, and storm damage response." },
  { slug: "electrical",   label: "Electricians",          line: "Residential and light commercial electrical work." },
  { slug: "hvac",         label: "HVAC Contractors",      line: "Heating, cooling, and ventilation installs and repairs." },
  { slug: "landscaping",  label: "Landscapers",           line: "Lawn care, design, cleanup, and seasonal work." },
  { slug: "painting",     label: "Painters",              line: "Interior and exterior painting for homes and businesses." },
  { slug: "concrete",     label: "Concrete Contractors",  line: "Driveways, patios, walkways, and foundations." },
  { slug: "fencing",      label: "Fencing Contractors",   line: "Wood, vinyl, chain link, and ornamental fence installation." },
  { slug: "tree-service", label: "Tree Service",          line: "Removal, trimming, stump grinding, and emergency work." },
];

export default function WhoWeServe() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="who-we-serve"
      style={{
        background: "var(--warm-gray)",
        padding: "clamp(64px, 8vw, 112px) 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="mb-14"
        >
          <span
            className="font-label text-xs block mb-4"
            style={{ color: "var(--muted)", letterSpacing: "0.12em" }}
          >
            WHO WE SERVE
          </span>
          <h2
            className="font-heading max-w-lg"
            style={{
              color: "var(--charcoal)",
              fontSize: "clamp(24px, 3.5vw, 40px)",
              lineHeight: 1.15,
            }}
          >
            Websites for every trade in Rockland County
          </h2>
          <p
            className="font-sans mt-5 max-w-xl"
            style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.75 }}
          >
            We build sites for the contractors and tradespeople who keep the
            county running. One flat fee. No templates. No monthly charges.
            Live in 1-2 business days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-black/[0.07]">
          {TRADES.map(({ slug, label, line }, i) => (
            <motion.div
              key={slug}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...spring, delay: shouldReduceMotion ? 0 : i * 0.05 }}
              className="bg-white group"
            >
              <Link
                href={`/${slug}`}
                className="block p-7 h-full transition-colors duration-150 hover:bg-white"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-8 mb-5"
                  style={{ height: "2px", background: "var(--navy)", transition: "width 200ms ease" }}
                />
                <h3
                  className="font-heading mb-2"
                  style={{ color: "var(--charcoal)", fontSize: "17px", lineHeight: 1.3 }}
                >
                  {label}
                </h3>
                <p
                  className="font-sans"
                  style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.65 }}
                >
                  {line}
                </p>
                <span
                  className="font-label text-xs mt-5 block"
                  style={{ color: "var(--navy)", letterSpacing: "0.08em" }}
                >
                  See pricing &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
