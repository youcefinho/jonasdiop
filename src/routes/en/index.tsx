import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { ConferencierPreviewSection } from '@/components/sections/ConferencierPreviewSection';
import { EvenementsUpcomingSection } from '@/components/sections/EvenementsUpcomingSection';
import { FAQHomeSection } from '@/components/sections/FAQHomeSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { GameChangerProtocolPreview } from '@/components/sections/GameChangerProtocolPreview';
import { Hero } from '@/components/sections/Hero';
import { HowItWorksTimeline } from '@/components/sections/HowItWorksTimeline';
import { LivrePreviewSection } from '@/components/sections/LivrePreviewSection';
import { MarqueeTestimonials } from '@/components/sections/MarqueeTestimonials';
import { MethodologieCDTPreviewSection } from '@/components/sections/MethodologieCDTPreviewSection';
import { PodcastPreviewSection } from '@/components/sections/PodcastPreviewSection';
import { PourQuiSection } from '@/components/sections/PourQuiSection';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { RessourcesPreviewSection } from '@/components/sections/RessourcesPreviewSection';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { TrustedLogosBar } from '@/components/sections/TrustedLogosBar';
import { VslPlaceholderSection } from '@/components/sections/VslPlaceholderSection';
import { PullQuote } from '@/components/ui/PullQuote';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { jonasQuotes } from '@/data/copy/quotes';

function HomeEN() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <ScrollReveal>
          <VslPlaceholderSection id="vsl-method" />
        </ScrollReveal>
        <TrustedLogosBar />
        <ScrollReveal>
          <PourQuiSection />
        </ScrollReveal>
        <ScrollReveal>
          <AboutPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <PullQuote source={jonasQuotes.system} variant="panel" />
        </ScrollReveal>
        <SectionDivider variant="gold" />
        <ScrollReveal>
          <MethodologieCDTPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <GameChangerProtocolPreview />
        </ScrollReveal>
        <ScrollReveal>
          <ProgramsGrid />
        </ScrollReveal>
        <ScrollReveal>
          <HowItWorksTimeline />
        </ScrollReveal>
        <SectionDivider variant="silver" />
        <ScrollReveal>
          <TestimonialGrid />
        </ScrollReveal>
        <MarqueeTestimonials />
        <ScrollReveal>
          <LivrePreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <RessourcesPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <PodcastPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <ConferencierPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <EvenementsUpcomingSection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQHomeSection />
        </ScrollReveal>
        <SectionDivider variant="gold" />
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
