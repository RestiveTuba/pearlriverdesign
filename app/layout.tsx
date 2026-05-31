import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
  title: {
    default: 'Pearl River Design | Contractor Websites for Rockland County',
    template: '%s | Pearl River Design',
  },
  description:
    'Pearl River Design builds fast, professional websites for contractors and local businesses in Rockland County, NY. Live in 2 minutes. Starting at $1,000.',
  metadataBase: new URL('https://pearlriverdesign.dev'),
  keywords: [
    'contractor website Rockland County',
    'website design Pearl River NY',
    'small business website Rockland County',
    'local business website New York',
    'roofer website',
    'landscaper website',
    'plumber website',
    'Rockland County web design',
  ],
  authors: [{ name: 'Pearl River Design' }],
  openGraph: {
    title: 'Pearl River Design | Contractor Websites for Rockland County',
    description:
      'Fast, professional websites for contractors in Rockland County, NY. Deployed in minutes. Starting at $1,000.',
    url: 'https://pearlriverdesign.dev',
    siteName: 'Pearl River Design',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Pearl River Design — Contractor Websites for Rockland County',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pearl River Design | Contractor Websites for Rockland County',
    description:
      'Fast, professional websites for contractors in Rockland County, NY.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://pearlriverdesign.dev',
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pearl River Design",
  url: "https://pearlriverdesign.dev",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Pearl River Design",
  description: "Web design agency for local businesses in Rockland County, NY",
  url: "https://pearlriverdesign.dev",
  email: "jackson@pearlriverdesign.dev",
  telephone: "(914) 354-8647",
  image: "https://pearlriverdesign.dev/opengraph-image",
  sameAs: ["https://share.google/18E6Yq6Nep7UOOW26"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pearl River",
    addressRegion: "NY",
    postalCode: "10965",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0584,
    longitude: -74.0221,
  },
  openingHours: "Mo-Fr 09:00-18:00",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contractor Website",
          description: "Professional website for local contractors. Live in 1–2 business days.",
        },
        price: "1000",
        priceCurrency: "USD",
      },
    ],
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
