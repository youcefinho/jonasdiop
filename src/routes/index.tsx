import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { FAQHomeSection } from '@/components/sections/FAQHomeSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { GameChangerProtocolPreview } from '@/components/sections/GameChangerProtocolPreview';
import { Hero } from '@/components/sections/Hero';
import { HowItWorksTimeline } from '@/components/sections/HowItWorksTimeline';
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

function HomeFR() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        {/* Below-fold sections : `cv-defer` (content-visibility:auto) — browser
            skips paint/layout off-screen, dramatically reducing initial DOMSize
            cost. See globals.css for details. */}
        <ScrollReveal className="cv-defer">
          <VslPlaceholderSection id="vsl-methode" />
        </ScrollReveal>
        <div className="cv-defer">
          <TrustedLogosBar />
        </div>
        <ScrollReveal className="cv-defer">
          <PourQuiSection />
        </ScrollReveal>
        <ScrollReveal className="cv-defer">
          <AboutPreviewSection />
        </ScrollReveal>
        <ScrollReveal className="cv-defer">
          <PullQuote source={jonasQuotes.system} variant="panel" />
        </ScrollReveal>
        <SectionDivider variant="gold" />
        <ScrollReveal className="cv-defer">
          <MethodologieCDTPreviewSection />
        </ScrollReveal>
        <ScrollReveal className="cv-defer">
          <GameChangerProtocolPreview />
        </ScrollReveal>
        <ScrollReveal className="cv-defer">
          <ProgramsGrid />
        </ScrollReveal>
        <ScrollReveal className="cv-defer">
          <HowItWorksTimeline />
        </ScrollReveal>
        <SectionDivider variant="silver" />
        <ScrollReveal className="cv-defer">
          <TestimonialGrid />
        </ScrollReveal>
        <div className="cv-defer">
          <MarqueeTestimonials />
        </div>
        <ScrollReveal className="cv-defer">
          <RessourcesPreviewSection />
        </ScrollReveal>
        <ScrollReveal className="cv-defer">
          <PodcastPreviewSection />
        </ScrollReveal>
        <ScrollReveal className="cv-defer">
          <FAQHomeSection />
        </ScrollReveal>
        <SectionDivider variant="gold" />
        <ScrollReveal className="cv-defer">
          <FinalCTASection />
        </ScrollReveal>
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/')({
  component: HomeFR
});
