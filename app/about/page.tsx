import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "Pearl River Design is a one-person web studio based in Pearl River, NY, building websites for local contractors and service businesses in Rockland County.",
  alternates: { canonical: "https://pearlriverdesign.dev/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jackson O'Hara",
  jobTitle: "Founder",
  worksFor: {
    "@type": "LocalBusiness",
    name: "Pearl River Design",
    url: "https://pearlriverdesign.dev",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pearl River",
    addressRegion: "NY",
    addressCountry: "US",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero band */}
        <section
          style={{
            background: "var(--navy)",
            padding: "clamp(80px, 12vw, 160px) 0 clamp(64px, 8vw, 112px)",
          }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <span
              className="font-label text-xs block mb-6"
              style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em" }}
            >
              ABOUT
            </span>
            <h1
              className="font-heading text-white mb-3"
              style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.1 }}
            >
              Jackson O&apos;Hara
            </h1>
            <p
              className="font-sans"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px" }}
            >
              Pearl River, NY
            </p>
          </div>
        </section>

        {/* Body */}
        <section
          className="bg-white"
          style={{ padding: "clamp(64px, 8vw, 112px) 0" }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-xl">
              <p
                className="font-sans"
                style={{ color: "var(--charcoal)", fontSize: "18px", lineHeight: 1.8 }}
              >
                Pearl River Design builds websites for contractors and local
                service businesses in Rockland County — fast, professionally
                designed, and built to show up in Google.
              </p>

              <div
                className="mt-12"
                style={{ borderTop: "1px solid var(--border)", paddingTop: "32px" }}
              >
                <dl
                  className="font-sans"
                  style={{ fontSize: "14px", lineHeight: 2, color: "var(--muted)" }}
                >
                  <div className="flex gap-8">
                    <dt style={{ color: "var(--charcoal)", minWidth: 80 }}>Location</dt>
                    <dd>Pearl River, NY 10965</dd>
                  </div>
                  <div className="flex gap-8">
                    <dt style={{ color: "var(--charcoal)", minWidth: 80 }}>Email</dt>
                    <dd>
                      <a
                        href="mailto:jackson@pearlriverdesign.dev"
                        style={{ color: "var(--navy)", textDecoration: "underline", textUnderlineOffset: 3 }}
                      >
                        jackson@pearlriverdesign.dev
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-8">
                    <dt style={{ color: "var(--charcoal)", minWidth: 80 }}>Phone</dt>
                    <dd>
                      <a
                        href="tel:+19143548647"
                        style={{ color: "var(--navy)", textDecoration: "underline", textUnderlineOffset: 3 }}
                      >
                        (914) 354-8647
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
