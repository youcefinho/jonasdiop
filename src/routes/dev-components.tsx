import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '@/components/sections/Hero';
import { TrustBand } from '@/components/sections/TrustBand';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollCue } from '@/components/ui/ScrollCue';
import { StatNumber } from '@/components/ui/StatNumber';

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

      <div id="bottom" className="h-32" />
    </main>
  );
}

export const Route = createFileRoute('/dev-components')({
  component: DevComponents
});
