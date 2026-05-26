import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { FAQHomeSection } from '@/components/sections/FAQHomeSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Hero } from '@/components/sections/Hero';
import { MethodologieCDTPreviewSection } from '@/components/sections/MethodologieCDTPreviewSection';
import { PodcastPreviewSection } from '@/components/sections/PodcastPreviewSection';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { RessourcesPreviewSection } from '@/components/sections/RessourcesPreviewSection';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';

function HomeEN() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <AboutPreviewSection />
        <MethodologieCDTPreviewSection />
        <ProgramsGrid />
        <TestimonialGrid />
        <RessourcesPreviewSection />
        <PodcastPreviewSection />
        <FAQHomeSection />
        <FinalCTASection />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/en/')({
  component: HomeEN
});
