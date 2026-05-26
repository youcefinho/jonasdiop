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

function HomeFR() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        {/* Hero typo-led centered + stats inline (Stitch board 13). */}
        <Hero />
        {/* Preview À propos — portrait direct Jonas + intro + lien /a-propos */}
        <AboutPreviewSection />
        {/* Méthodologie CDT preview + signature image speaking + 3 piliers */}
        <MethodologieCDTPreviewSection />
        {/* Programmes ecosystem (6 LPs grouped par variant) */}
        <ProgramsGrid />
        {/* Témoignages asymmetric focal */}
        <TestimonialGrid />
        {/* Ressources/Articles preview + categories chips + lien /ressources */}
        <RessourcesPreviewSection />
        {/* Podcast The Game Changer preview + 3 platforms + lien /podcast */}
        <PodcastPreviewSection />
        {/* FAQ full inline (migrated from removed /faq route) */}
        <FAQHomeSection />
        {/* FinalCTA — gold "Réserver mon appel" */}
        <FinalCTASection />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/')({
  component: HomeFR
});
