import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { MethodologySection } from "@/components/methodology-section";
import { AlgorithmsSection } from "@/components/algorithms-section";
import { SampleDataSection } from "@/components/sample-data-section";
import { ResultsSection } from "@/components/results-section";
import { ComplexitySection } from "@/components/complexity-section";
import { NoveltySection } from "@/components/novelty-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <AlgorithmsSection />
      <SampleDataSection />
      <ResultsSection />
      <ComplexitySection />
      <NoveltySection />
      <Footer />
    </main>
  );
}
