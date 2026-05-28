import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { useT } from '@/lib/i18n/useT';

/**
 * PourQuiSection — Home "Pour qui / Le problème" block (brief v3 addition).
 * Position : between TrustedLogosBar and AboutPreviewSection.
 *
 * Frames the 3 structural problems entrepreneurs hit before discovering CDT™ /
 * Game Changer Protocol. Tone: direct, tutoyé, root-cause framed.
 *
 * Composition :
 *   Eyebrow → H2 (mask reveal) → Sub → 3 problem cards (StaggerReveal) → close line.
 */

interface ProblemCard {
  readonly id: string;
  readonly title: { readonly fr: string; readonly en: string };
  readonly body: { readonly fr: string; readonly en: string };
}

const PROBLEM_CARDS: readonly ProblemCard[] = [
  {
    id: 'time-leaks',
    title: { fr: 'Ton temps fuit', en: 'Your time leaks' },
    body: {
      fr: "Tu travailles 60+ heures par semaine sans plus de levier. Chaque heure investie produit moins de résultat qu'il y a deux ans.",
      en: 'You are working 60+ hours a week with no more leverage. Every hour invested produces less output than two years ago.'
    }
  },
  {
    id: 'offer-ceiling',
    title: { fr: 'Ton offre plafonne', en: 'Your offer has hit a ceiling' },
    body: {
      fr: 'Tu sens que tu pourrais facturer plus, livrer mieux — mais sans système pour passer du chiffre à la marge, le plafond ne bouge pas.',
      en: 'You sense you could charge more, deliver better — but without a system to convert revenue into margin, the ceiling does not move.'
    }
  },
  {
    id: 'team-idle',
    title: { fr: 'Ton équipe tourne à vide', en: 'Your team runs idle' },
    body: {
      fr: "Sans toi, rien n'avance. Tu es devenu le goulot d'étranglement de ton propre business — et tu le sais.",
      en: 'Without you, nothing moves. You have become the bottleneck of your own business — and you know it.'
    }
  }
] as const;

export function PourQuiSection() {
  const { t } = useT();
  return (
    <section
      aria-label={t({ fr: 'Pour qui — le problème', en: 'Who this is for — the problem' })}
      className="relative py-2xl bg-section-base overflow-hidden"
    >
      <FiligraneNumber number="01" position="left" />
      <div className="relative max-w-default mx-auto px-md">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
          <Eyebrow>{t({ fr: 'Pour qui · Le problème', en: 'For whom · The problem' })}</Eyebrow>
          <MaskRevealHeading
            as="h2"
            className="text-h2 text-primary font-display text-balance leading-[1.1]"
          >
            {t({
              fr: 'Tu es coach, expert ou entrepreneur. Et tu plafonnes.',
              en: 'You are a coach, expert or entrepreneur. And you have hit a ceiling.'
            })}
          </MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[58ch]">
            {t({
              fr: "Pas faute d'effort. Pas faute d'ambition. Le problème, c'est ton architecture.",
              en: 'Not for lack of effort. Not for lack of ambition. The problem is your architecture.'
            })}
          </p>
        </div>

        {/* 3 problem cards */}
        <StaggerReveal
          as="div"
          className="grid grid-cols-1 md:grid-cols-3 gap-md"
          staggerMs={120}
          data-card-group="problems"
        >
          {PROBLEM_CARDS.map((card, idx) => (
            <article
              key={card.id}
              className="group relative flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card hover:border-silver/30 transition-colors duration-base overflow-hidden"
            >
              {/* Subtle gold sheen on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,oklch(0.74_0.085_75/0.05)_50%,transparent_70%)] bg-[length:200%_200%] bg-[position:200%_0] transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[position:-50%_0]"
              />
              <span
                aria-hidden="true"
                className="text-gold font-display text-eyebrow uppercase tracking-widest text-xs opacity-80"
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-h3 text-primary font-display text-balance">{t(card.title)}</h3>
              <p className="text-body text-silver opacity-80 text-pretty">{t(card.body)}</p>
            </article>
          ))}
        </StaggerReveal>

        {/* Closing line */}
        <p className="mt-xl text-center text-body-lg text-silver opacity-85 text-pretty max-w-[58ch] mx-auto italic font-display">
          {t({
            fr: "Ce n'est pas un problème de motivation. C'est un problème d'architecture.",
            en: 'This is not a motivation problem. It is an architecture problem.'
          })}
        </p>
      </div>
    </section>
  );
}
