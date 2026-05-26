import { createFileRoute } from '@tanstack/react-router';
import { FooterRich } from '@/components/layout/FooterRich';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Hero } from '@/components/sections/Hero';
import { LPConsultationsTemplate } from '@/components/sections/LPConsultationsTemplate';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { TrustBand } from '@/components/sections/TrustBand';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LogoWordmark } from '@/components/ui/LogoWordmark';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ProgramCard } from '@/components/ui/ProgramCard';
import { ScrollCue } from '@/components/ui/ScrollCue';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { StatNumber } from '@/components/ui/StatNumber';
import { TestimonialShellCard } from '@/components/ui/TestimonialShellCard';
import { consultationsPriveesCopy } from '@/data/copy/services-consultations-privees';
import { gamechangerScalingCopy } from '@/data/copy/services-gamechanger-scaling';

function DevComponents() {
  return (
    <main className="min-h-screen py-xl px-md flex flex-col gap-2xl">
      <header className="border-b border-silver/15 pb-md">
        <h1 className="text-h2 text-primary font-display">Dev components — isolation gallery</h1>
        <p className="text-body text-silver opacity-70 mt-sm">
          Non-public debug route. Each atomic + section rendered in isolation for visual + a11y
          testing.
        </p>
      </header>

      <section>
        <h2 className="text-h3 text-primary mb-md">Eyebrow</h2>
        <div className="flex flex-col gap-sm">
          <Eyebrow>With gold dot (default)</Eyebrow>
          <Eyebrow goldDot={false}>Without gold dot</Eyebrow>
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">LogoWordmark (Sprint 2)</h2>
        <div className="flex items-baseline gap-md flex-wrap">
          <LogoWordmark size="sm" />
          <LogoWordmark size="md" />
          <LogoWordmark size="lg" />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">SocialIcon (Sprint 2)</h2>
        <div className="flex items-center gap-md text-silver">
          <SocialIcon name="facebook" className="h-6 w-6" />
          <SocialIcon name="instagram" className="h-6 w-6" />
          <SocialIcon name="linkedin" className="h-6 w-6" />
          <SocialIcon name="x" className="h-6 w-6" />
          <SocialIcon name="tiktok" className="h-6 w-6" />
          <SocialIcon name="youtube" className="h-6 w-6" />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">MaskRevealHeading</h2>
        <MaskRevealHeading as="h1">H1 mask reveal example</MaskRevealHeading>
        <MaskRevealHeading as="h2">H2 mask reveal example</MaskRevealHeading>
        <MaskRevealHeading as="h3">H3 mask reveal example</MaskRevealHeading>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">CTAPill</h2>
        <div className="flex flex-col sm:flex-row gap-sm">
          <CTAPill variant="gold-primary" href="#none">
            Gold primary →
          </CTAPill>
          <CTAPill variant="silver-secondary" onClick={() => {}}>
            Silver secondary
          </CTAPill>
          <CTAPill variant="silver-outline" href="#none">
            Silver outline
          </CTAPill>
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">ProgramCard (Sprint 2) — 3 variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <ProgramCard
            variant="groupe"
            href="#none"
            eyebrow={{ fr: 'Programme de groupe · 12 semaines', en: 'Group program · 12 weeks' }}
            title={{ fr: 'Variant Groupe', en: 'Group variant' }}
            description={{
              fr: 'Border silver, link "En savoir plus".',
              en: 'Silver border, "Learn more" link.'
            }}
          />
          <ProgramCard
            variant="formation"
            href="#none"
            eyebrow={{ fr: 'Formation spécialisée', en: 'Specialized training' }}
            title={{ fr: 'Variant Formation', en: 'Formation variant' }}
            description={{
              fr: 'Same silver style as groupe, different semantic.',
              en: 'Same silver style, different semantic.'
            }}
          />
          <ProgramCard
            variant="accompagnement"
            href="#none"
            eyebrow={{ fr: 'Accompagnement 1:1', en: '1:1 advisory' }}
            title={{ fr: 'Variant Accompagnement', en: 'Advisory variant' }}
            description={{
              fr: 'Border gold, link "Postuler" (premium tier).',
              en: 'Gold border, "Apply" link (premium tier).'
            }}
          />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">TestimonialShellCard (Sprint 2)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <TestimonialShellCard />
          <TestimonialShellCard centerElevated />
          <TestimonialShellCard />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          StatNumber (no countup visible until scroll-into-view)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <StatNumber value={857} suffix="+" label={{ fr: 'Entrepreneurs', en: 'Entrepreneurs' }} />
          <StatNumber value={31} suffix="M$+" label={{ fr: 'Généré', en: 'Generated' }} />
          <StatNumber value={15} suffix=" ANS" label={{ fr: 'Expérience', en: 'Experience' }} />
        </div>
      </section>

      <section className="relative min-h-[300px] border border-silver/15 rounded-lg">
        <h2 className="text-h3 text-primary mb-md p-md">
          ScrollCue (positioned absolute bottom-center)
        </h2>
        <ScrollCue href="#bottom" ariaLabel="Scroll cue example" />
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">Hero (composed)</h2>
        <div className="border border-silver/15 rounded-lg">
          <Hero />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">TrustBand (composed)</h2>
        <TrustBand />
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">ProgramsGrid (Sprint 2 — composed)</h2>
        <ProgramsGrid />
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">TestimonialGrid (Sprint 2 — composed)</h2>
        <TestimonialGrid />
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">FinalCTASection (Sprint 2 — composed)</h2>
        <FinalCTASection />
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">FooterRich (Sprint 2 — composed)</h2>
        <FooterRich />
      </section>

      {/* Sprint 4 — LP templates */}
      <section>
        <h2 className="text-h3 text-primary mb-md">
          LPProgramTemplate (Sprint 4) — Gamechanger sample
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <LPProgramTemplate copy={gamechangerScalingCopy} />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          LPConsultationsTemplate (Sprint 4) — Consultations Privées
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <LPConsultationsTemplate copy={consultationsPriveesCopy} />
        </div>
      </section>

      <p className="text-sm text-silver opacity-50 text-center mt-xl">
        Note : Navbar is fixed top-0 z-40 — visible on the actual Home route `/`, not isolated here
        (would overlap dev gallery).
      </p>

      <div id="bottom" className="h-32" />
    </main>
  );
}

export const Route = createFileRoute('/dev-components')({
  component: DevComponents
});
