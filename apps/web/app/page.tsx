import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { StatsBar } from "@/components/landing/stats-bar";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { CTASection } from "@/components/landing/cta-section";

export default function LandingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0B1020", color: "#fff", overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <Features />
      <CTASection />
    </main>
  );
}