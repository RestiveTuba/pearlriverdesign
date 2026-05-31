import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import NicheHero from "@/components/NicheHero";
import NicheWhy from "@/components/NicheWhy";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import { NICHE_SLUGS, getNiche } from "@/lib/niches";

export function generateStaticParams() {
  return NICHE_SLUGS.map((slug) => ({ niche: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string }>;
}): Promise<Metadata> {
  const { niche: slug } = await params;
  const niche = getNiche(slug);
  if (!niche) return {};
  return {
    title: niche.metaTitle,
    description: niche.metaDescription,
    alternates: { canonical: `https://pearlriverdesign.dev/${niche.slug}` },
    openGraph: {
      title: niche.metaTitle,
      description: niche.metaDescription,
      url: `https://pearlriverdesign.dev/${niche.slug}`,
      siteName: "Pearl River Design",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function NichePage({
  params,
}: {
  params: Promise<{ niche: string }>;
}) {
  const { niche: slug } = await params;
  const niche = getNiche(slug);
  if (!niche) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${niche.tradeProper} Website Design`,
    description: niche.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Pearl River Design",
      url: "https://pearlriverdesign.dev",
      telephone: "(914) 354-8647",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Rockland County, NY",
    },
    offers: {
      "@type": "Offer",
      price: "1000",
      priceCurrency: "USD",
      description: "One-time flat fee. No monthly charges.",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: niche.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <NicheHero headline={niche.headline} sub={niche.sub} />
        <NicheWhy
          heading={niche.why.heading}
          body={niche.why.body}
          trade={niche.trade}
        />
        <HowItWorks />
        <Features />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
