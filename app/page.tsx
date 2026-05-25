import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ExampleSites from "@/components/ExampleSites";
import LeadForm from "@/components/LeadForm";
import About from "@/components/About";
import Footer from "@/components/Footer";

async function getHeroVideoUrl(): Promise<string | null> {
  try {
    const apiKey = process.env.PEXELS_API_KEY;
    if (!apiKey) return null;
    const res = await fetch(
      "https://api.pexels.com/videos/search?query=contractor+home+renovation&per_page=1&orientation=landscape",
      {
        headers: { Authorization: apiKey },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return null;
    const data: {
      videos?: Array<{
        video_files?: Array<{ quality: string; file_type: string; link: string }>;
      }>;
    } = await res.json();
    const video = data.videos?.[0];
    if (!video) return null;
    const hdMp4 = video.video_files?.find(
      (f) => f.quality === "hd" && f.file_type === "video/mp4"
    );
    return hdMp4?.link ?? null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const heroVideoUrl = await getHeroVideoUrl();

  return (
    <>
      <Navbar />
      <main>
        <Hero videoUrl={heroVideoUrl} />
        <StatsBar />
        <HowItWorks />
        <Features />
        <Pricing />
        <ExampleSites />
        <LeadForm />
        <About />
      </main>
      <Footer />
    </>
  );
}
