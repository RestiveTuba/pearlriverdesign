import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Used by the inline text inside lockup SVGs (e.g. <text font-family="Plus Jakarta Sans">).
// We don't apply it globally to avoid changing typography/metrics across the site.
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pearl River Design: Websites for Local Businesses in Rockland County",
  description:
    "Professional websites for contractors, barbershops, restaurants, and local businesses in Rockland County, NY. Built in 24 hours. Starting at $1,000.",
  keywords: [
    "website design Rockland County NY",
    "contractor website design Pearl River",
    "small business website Suffern NY",
    "web design Nyack NY",
    "local business website builder",
  ],
  openGraph: {
    title: "Pearl River Design: Websites Built for Local Businesses",
    description: "Fast, professional websites for Rockland County businesses. Starting at $1,000.",
    url: "https://pearlriverdesign.dev",
    siteName: "Pearl River Design",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "https://pearlriverdesign.dev" },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pearl River Design",
  description: "Web design agency for local businesses in Rockland County, NY",
  url: "https://pearlriverdesign.dev",
  email: "jackson@pearlriverdesign.dev",
  telephone: "(914) 354-8647",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pearl River",
    addressRegion: "NY",
    postalCode: "10965",
    addressCountry: "US",
  },
  areaServed: [
    "Pearl River",
    "Suffern",
    "Nyack",
    "Nanuet",
    "Spring Valley",
    "Rockland County",
  ],
  priceRange: "$$",
  serviceType: "Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <span
          aria-hidden="true"
          className={plusJakartaSans.className}
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            whiteSpace: "nowrap",
          }}
        >
          .
        </span>
        {children}
      </body>
    </html>
  );
}
