import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { Navbar } from '@/components/layout/Navbar';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Hero } from '@/components/sections/Hero';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { VslPlaceholderSection } from '@/components/sections/VslPlaceholderSection';

function HomeFR() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        {/* Hero includes inline stats (3 gold numbers) per Stitch board 13 —
            replaces the standalone <TrustBand /> previously rendered below Hero. */}
        <Hero />
        <VslPlaceholderSection id="methodologie" />
        <ProgramsGrid />
        <TestimonialGrid />
        <FinalCTASection />
      </main>
      <FooterRich />
    </>
  );
}

export const Route = createFileRoute('/')({
  component: HomeFR
});
