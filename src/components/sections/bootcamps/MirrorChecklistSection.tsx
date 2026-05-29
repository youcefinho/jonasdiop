import { Check } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';

interface MirrorChecklistSectionProps {
  /** Eyebrow uppercase (déjà traduit). */
  readonly eyebrow: string;
  /** Headline H2 (déjà traduit). */
  readonly headline: string;
  /** 10 cases du miroir — verbatim PDF Trilogie §3. */
  readonly items: readonly string[];
  /** Phrase de transition placée sous la grille (sobre, italique). */
  readonly transitionPhrase: string;
}

/**
 * MirrorChecklistSection — "Le miroir : est-ce que c'est toi ?".
 *
 * Section signature commune aux 3 sous-pages Trilogie (PDF §3). 10 cases
 * cochables en grid 2-cols desktop / 1-col mobile. Chaque item = card premium
 * sobre avec check gold + ligne. Pas d'illustration, pas de drop cap, pas de
 * "magazine editorial" — pur Platinum Executive Authority.
 *
 * A11y : liste sémantique `<ul>` + `aria-label` section.
 */
export function MirrorChecklistSection({
  eyebrow,
  headline,
  items,
  transitionPhrase
}: MirrorChecklistSectionProps) {
  return (
    <ScrollReveal>
      <section
        aria-label={eyebrow}
        className="relative py-2xl bg-section-elevated border-y border-silver/10"
      >
        <div className="relative max-w-default mx-auto px-md">
          <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
            <Eyebrow>{eyebrow}</Eyebrow>
            <MaskRevealHeading as="h2">{headline}</MaskRevealHeading>
          </div>

          <StaggerReveal
            as="ul"
            className="grid grid-cols-1 md:grid-cols-2 gap-sm max-w-default mx-auto list-none"
            staggerMs={60}
            data-card-group="bootcamp-mirror"
          >
            {items.map((item) => (
              <li
                key={`mirror-${item.slice(0, 48)}`}
                className="group flex items-start gap-sm p-md bg-base border border-silver/15 rounded-lg shadow-haptic-card hover-lift hover:border-gold/30 transition-colors duration-base"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md border border-gold/30 bg-gold/5 text-gold/90 transition-colors duration-base group-hover:bg-gold/10 group-hover:border-gold/50"
                >
                  <Check className="h-3.5 w-3.5 max-w-none shrink-0" aria-hidden="true" />
                </span>
                <p className="text-body text-primary opacity-90 text-pretty min-w-0 leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </StaggerReveal>

          {transitionPhrase ? (
            <p className="mt-xl text-center text-body-lg text-silver opacity-80 text-pretty italic max-w-[58ch] mx-auto">
              {transitionPhrase}
            </p>
          ) : null}
        </div>
      </section>
    </ScrollReveal>
  );
}
