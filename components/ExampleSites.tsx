"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EXAMPLES = [
  {
    src: "/examples/brooks-plumbing.png",
    alt: "Brooks Plumbing Services website",
    caption: "Brooks Plumbing",
    location: "Pearl River, NY",
    url: "brooks-plumbing-services.vercel.app",
  },
  {
    src: "/examples/chen-electrical.png",
    alt: "Chen Electrical Solutions website",
    caption: "Chen Electrical",
    location: "Nanuet, NY",
    url: "chen-electrical-solutions.vercel.app",
  },
  {
    src: "/examples/martinez-roofing.png",
    alt: "Martinez Roofing and Repairs website",
    caption: "Martinez Roofing",
    location: "Spring Valley, NY",
    url: "martinez-roofing-and-repairs.vercel.app",
  },
];

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
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#FF5F57",
              display: "block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#FEBC2E",
              display: "block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#28C840",
              display: "block",
              flexShrink: 0,
            }}
          />
        </div>

        {/* URL bar */}
        <div
          className="flex-1 font-mono truncate"
          style={{
            background: "#fff",
            padding: "3px 8px",
            color: "var(--muted)",
            fontSize: "11px",
          }}
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
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ width: "100%", height: "auto", display: "block" }}
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
            style={{
              color: "var(--charcoal)",
              fontSize: "clamp(26px, 3.5vw, 42px)",
              lineHeight: 1.15,
            }}
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {EXAMPLES.map(({ src, alt, caption, location, url }, i) => (
            <motion.div
              key={src}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...spring, delay: shouldReduceMotion ? 0 : i * 0.1 }}
            >
              <BrowserChrome src={src} alt={alt} url={url} />
              <p className="font-sans mt-4 text-sm" style={{ color: "var(--charcoal)", lineHeight: 1.5 }}>
                {caption}
                <span style={{ color: "var(--muted)", margin: "0 5px" }}>·</span>
                <span style={{ color: "var(--muted)" }}>{location}</span>
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
