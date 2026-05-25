"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EXAMPLE = {
  src: "/examples/peak-ridge-roofing.png",
  alt: "Peak Ridge Roofing website built by Pearl River Design",
  caption: "Peak Ridge Roofing",
  location: "Pearl River, NY",
  url: "peak-ridge-roofing.vercel.app",
};

function BrowserChrome({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url: string;
}) {
  return (
    <div style={{ border: "1px solid var(--border)", overflow: "hidden" }}>
      {/* Top bar */}
      <div
        className="flex items-center gap-3 px-3"
        style={{
          height: "34px",
          background: "#ECEAE6",
          borderBottom: "1px solid var(--border)",
          flexShrink: 0,
        }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F57", display: "block", flexShrink: 0 }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FEBC2E", display: "block", flexShrink: 0 }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28C840", display: "block", flexShrink: 0 }} />
        </div>
        {/* URL bar */}
        <div
          className="flex-1 font-mono truncate"
          style={{ background: "#fff", padding: "3px 8px", color: "var(--muted)", fontSize: "11px" }}
        >
          {url}
        </div>
      </div>
      {/* Screenshot */}
      <div style={{ lineHeight: 0 }}>
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={800}
          sizes="(max-width: 768px) 100vw, 720px"
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </div>
    </div>
  );
}

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function ExampleSites() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="examples"
      style={{
        background: "var(--warm-gray)",
        padding: "clamp(64px, 8vw, 128px) 0",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="mb-16 md:mb-20"
        >
          <h2
            className="font-heading"
            style={{ color: "var(--charcoal)", fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.15 }}
          >
            What we&apos;ve built
          </h2>
          <p
            className="font-sans mt-4"
            style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.6 }}
          >
            Real sites, live on Google, built for local contractors like you.
          </p>
        </motion.div>

        {/* Single example, centered */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={spring}
          className="max-w-2xl"
        >
          <BrowserChrome src={EXAMPLE.src} alt={EXAMPLE.alt} url={EXAMPLE.url} />
          <p className="font-sans mt-4 text-sm" style={{ color: "var(--charcoal)", lineHeight: 1.5 }}>
            {EXAMPLE.caption}
            <span style={{ color: "var(--muted)", margin: "0 5px" }}>·</span>
            <span style={{ color: "var(--muted)" }}>{EXAMPLE.location}</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
