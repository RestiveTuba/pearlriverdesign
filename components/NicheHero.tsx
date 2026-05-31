"use client";

import { motion, useReducedMotion } from "framer-motion";

const TRUST_TOWNS = ["Pearl River", "Suffern", "Nyack", "Nanuet", "Spring Valley"];
const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

interface NicheHeroProps {
  headline: string;
  sub: string;
}

export default function NicheHero({ headline, sub }: NicheHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = headline.split(" ");
  const wordDelay = (i: number) => (shouldReduceMotion ? 0 : i * 0.05);
  const afterWords = shouldReduceMotion ? 0 : words.length * 0.05 + 0.08;

  return (
    <section
      className="min-h-[70vh] flex items-center relative overflow-hidden"
      style={{ background: "var(--navy)" }}
      aria-label={headline}
    >
      <div className="max-w-5xl mx-auto px-6 w-full pt-24 pb-20 relative">
        <h1
          className="font-heading text-white mb-7 leading-[1.1] max-w-4xl"
          style={{ fontSize: "clamp(26px, 5vw, 58px)" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: wordDelay(i) }}
              className="inline-block mr-[0.28em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: afterWords }}
          className="font-sans max-w-xl mb-10"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "18px", lineHeight: "1.7" }}
        >
          {sub}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: afterWords + 0.12 }}
          className="flex flex-wrap items-center gap-5 mb-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-white font-medium px-7 py-3.5 rounded text-sm transition-all duration-150 active:scale-[0.97] hover:bg-white/90"
            style={{ color: "var(--navy)" }}
          >
            Get your free demo &rarr;
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center py-2.5 text-sm font-medium underline-offset-4 hover:underline transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.72)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
          >
            See how it works &darr;
          </a>
        </motion.div>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: afterWords + 0.3 }}
          className="font-label text-xs"
          style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em" }}
        >
          {"Serving · " + TRUST_TOWNS.join(" · ")}
        </motion.p>
      </div>
    </section>
  );
}
