import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { FAQHomeSection } from '@/components/sections/FAQHomeSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Hero } from '@/components/sections/Hero';
import { HowItWorksTimeline } from '@/components/sections/HowItWorksTimeline';
import { MarqueeTestimonials } from '@/components/sections/MarqueeTestimonials';
import { MethodologieCDTPreviewSection } from '@/components/sections/MethodologieCDTPreviewSection';
import { PodcastPreviewSection } from '@/components/sections/PodcastPreviewSection';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { RessourcesPreviewSection } from '@/components/sections/RessourcesPreviewSection';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { TrustedLogosBar } from '@/components/sections/TrustedLogosBar';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

function HomeEN() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <TrustedLogosBar />
        <ScrollReveal>
          <AboutPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <MethodologieCDTPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProgramsGrid />
        </ScrollReveal>
        <ScrollReveal>
          <HowItWorksTimeline />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialGrid />
        </ScrollReveal>
        <MarqueeTestimonials />
        <ScrollReveal>
          <RessourcesPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <PodcastPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQHomeSection />
        </ScrollReveal>
        <ScrollReveal>
          <FinalCTASection />
        </ScrollReveal>
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/en/')({
  component: HomeEN
});
