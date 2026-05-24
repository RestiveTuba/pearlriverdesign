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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
