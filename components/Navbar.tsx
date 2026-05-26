"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 ease-out",
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b"
            : "bg-transparent",
        ].join(" ")}
        style={{
          borderColor: scrolled ? "var(--border)" : "transparent",
        }}
      >
        <nav
          className="max-w-6xl mx-auto px-6 flex items-center justify-between"
          style={{ height: "64px" }}
        >
          {/* Logo */}
          <a
            href="/"
            aria-label="Pearl River Design home"
            className="shrink-0 flex items-center self-stretch"
          >
            <Image
              src="/images/lockup-primary.svg"
              alt="Pearl River Design"
              height={44}
              width={280}
              priority
              style={{ objectFit: 'contain' }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={[
                  "text-sm font-medium tracking-tight transition-colors duration-200",
                  scrolled
                    ? "text-[var(--charcoal)] hover:text-[var(--navy)]"
                    : "text-white/80 hover:text-white",
                ].join(" ")}
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              className={[
                "text-sm font-medium px-5 py-2.5 rounded transition-all duration-150",
                "active:scale-[0.97]",
                scrolled
                  ? "bg-[var(--navy)] text-white hover:bg-[#0a1a30]"
                  : "bg-white text-[var(--navy)] hover:bg-white/90",
              ].join(" ")}
            >
              Get your site
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center gap-[5px] px-2 -mr-2 min-h-[44px]"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-px transition-all duration-200 origin-center"
                style={{
                  backgroundColor: scrolled ? "var(--charcoal)" : "white",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                  transform:
                    i === 0 && menuOpen
                      ? "translateY(6px) rotate(45deg)"
                      : i === 2 && menuOpen
                      ? "translateY(-6px) rotate(-45deg)"
                      : "none",
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b md:hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <nav className="flex flex-col px-6 py-5 gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[var(--charcoal)] font-medium py-3 border-b text-base"
                  style={{ borderColor: "var(--border)" }}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-[var(--navy)] text-white text-center text-sm font-medium py-3 rounded active:scale-[0.97] transition-transform"
              >
                Get your site
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
