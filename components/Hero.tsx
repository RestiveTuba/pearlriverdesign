"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const HEADLINE = "Your business deserves to be found online.";
const SUBHEADLINE =
  "Pearl River Design builds professional websites for contractors and local businesses in Rockland County. One flat fee. No surprises.";
const TRUST_TOWNS = ["Pearl River", "Suffern", "Nyack", "Nanuet", "Spring Valley"];

const words = HEADLINE.split(" ");
const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

interface HeroProps {
  videoUrl?: string | null;
  imageUrl?: string | null;
}

export default function Hero({ videoUrl, imageUrl }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const wordDelay = (i: number) => (shouldReduceMotion ? 0 : i * 0.06);
  const afterWords = shouldReduceMotion ? 0 : words.length * 0.06 + 0.08;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "var(--navy)" }}
      aria-label="Pearl River Design"
    >
      {/* Desktop: video background */}
      {!isMobile && videoUrl && !shouldReduceMotion && (
        <>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{ background: "rgba(13,31,60,0.72)", zIndex: 1 }}
          />
        </>
      )}

      {/* Mobile: static image fallback — avoids iOS Safari autoplay issues */}
      {isMobile && imageUrl && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{ background: "rgba(13,31,60,0.72)", zIndex: 1 }}
          />
        </>
      )}

      <div
        className="max-w-5xl mx-auto px-6 w-full pt-24 pb-20 relative"
        style={{ zIndex: 2 }}
      >
        {/* H1, word-by-word stagger */}
        <h1
          className="font-heading text-white mb-7 leading-[1.1] max-w-4xl"
          style={{ fontSize: "clamp(28px, 5.5vw, 64px)" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: wordDelay(i) }}
              className="inline-block mr-[0.28em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: afterWords }}
          className="font-sans max-w-xl mb-10"
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          {SUBHEADLINE}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: afterWords + 0.14 }}
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
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.72)")
            }
          >
            See how it works &darr;
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: afterWords + 0.32 }}
          className="font-label text-xs"
          style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.06em" }}
        >
          {"Serving \u00b7 " + TRUST_TOWNS.join(" \u00b7 ")}
        </motion.p>
      </div>
    </section>
  );
}
