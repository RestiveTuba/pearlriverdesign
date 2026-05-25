"use client";

import Logo from "@/components/Logo";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Examples", href: "#examples" },
  { label: "Contact", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--navy)", padding: "clamp(48px, 6vw, 80px) 0 40px" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo variant="inverse" height={33} />
            <p
              className="font-sans"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.7, maxWidth: "240px" }}
            >
              Custom websites for local businesses in Rockland County, NY.
            </p>
          </div>

          {/* Nav */}
          <div>
            <span
              className="font-label text-xs block mb-5"
              style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em" }}
            >
              NAVIGATE
            </span>
            <ul className="flex flex-col">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans inline-flex items-center py-2"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 150ms ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span
              className="font-label text-xs block mb-5"
              style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em" }}
            >
              CONTACT
            </span>
            <ul className="flex flex-col">
              <li>
                <a
                  href="tel:+19143548647"
                  className="font-sans inline-flex items-center py-2"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  (914) 354-8647
                </a>
              </li>
              <li>
                <a
                  href="mailto:jackson@pearlriverdesign.dev"
                  className="font-sans inline-flex items-center py-2"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  jackson@pearlriverdesign.dev
                </a>
              </li>
              <li
                className="font-sans"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px" }}
              >
                Pearl River, NY 10965
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8"
        >
          <p
            className="font-sans text-xs"
            style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}
          >
            &copy; {year} Pearl River Design. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sans text-xs inline-flex items-center py-2.5"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
