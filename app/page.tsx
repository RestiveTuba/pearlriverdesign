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

async function getHeroData(): Promise<{ videoUrl: string | null; imageUrl: string | null }> {
  try {
    const apiKey = process.env.PEXELS_API_KEY;
    if (!apiKey) return { videoUrl: null, imageUrl: null };
    const res = await fetch(
      "https://api.pexels.com/videos/search?query=web+design+laptop+screen&per_page=1&orientation=landscape",
      {
        headers: { Authorization: apiKey },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return { videoUrl: null, imageUrl: null };
    const data: {
      videos?: Array<{
        image?: string;
        video_files?: Array<{ quality: string | null; file_type: string; width: number; link: string }>;
      }>;
    } = await res.json();
    const video = data.videos?.[0];
    if (!video) return { videoUrl: null, imageUrl: null };
    const mp4Files = (video.video_files ?? []).filter(
      (f) => f.file_type === "video/mp4"
    );
    // Pick HD (1280w) or next-best; Pexels quality field is null in current API
    const preferred = mp4Files.find((f) => f.width === 1280)
      ?? mp4Files.find((f) => f.width >= 1920)
      ?? mp4Files.find((f) => f.width >= 960)
      ?? mp4Files[0];
    return {
      videoUrl: preferred?.link ?? null,
      imageUrl: video.image ?? null,
    };
  } catch {
    return { videoUrl: null, imageUrl: null };
  }
}

export default async function Home() {
  const { videoUrl: heroVideoUrl, imageUrl: heroImageUrl } = await getHeroData();

  return (
    <>
      <Navbar />
      <main>
        <Hero videoUrl={heroVideoUrl} imageUrl={heroImageUrl} />
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
