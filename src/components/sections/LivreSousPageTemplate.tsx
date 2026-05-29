import { ArrowRight, BookOpen, Download } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

/**
 * LivreSousPageTemplate — template de sous-page par livre.
 *
 * Brief v3 §3.7 mentionne « sous-page par livre — même structure adaptée au
 * livre spécifique ». Ce template démontre le pattern : une route enfant
 * `/livre/$slug` charge ce composant avec un payload `LivreSousPageData`
 * qui suit la même shape que le parent LivrePage mais centré sur 1 ouvrage.
 *
 * Sections proposées :
 *   1. HERO (visuel + 2 CTAs)
 *   2. POURQUOI CE LIVRE (résumé + bénéfices)
 *   3. CHAPITRES (sommaire détaillé)
 *   4. OPTIONS D'ACHAT (3 formats)
 *   5. CTA FINAL
 *
 * Données passées en prop — le shell `/livre/$slug` mappe le slug à un
 * payload statique ou un fetch CMS. À ce stade : 1 livre exemple
 * (manuel-architecture) qui réutilise la copy parent comme placeholder.
 *
 * Tone : TU (audience entrepreneurs, cohérent avec LivrePage).
 *
 * Garde-fou : aucun lien externe en dur. lienAcheter / lienChapitreGratuit
 * = '#' par défaut (Sprint 6 wire Shopify/Amazon).
 */

export interface LivreSousPageData {
  readonly slug: string;
  readonly eyebrow: BilingualLax<string>;
  readonly title: BilingualLax<string>;
  readonly sub: BilingualLax<string>;
  readonly visuelTeaser: BilingualLax<string>;
  readonly visuelDescription: BilingualLax<string>;
  readonly ctaAcheter: BilingualLax<string>;
  readonly ctaAcheterDisabledNote: BilingualLax<string>;
  readonly ctaChapitreGratuit: BilingualLax<string>;
  readonly lienAcheter: string;
  readonly lienChapitreGratuit: string;
  readonly pourquoi: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly body: BilingualLax<string>;
    readonly benefices: ReadonlyArray<{
      readonly id: string;
      readonly title: BilingualLax<string>;
      readonly body: BilingualLax<string>;
    }>;
  };
  readonly chapitres: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly intro: BilingualLax<string>;
    readonly items: ReadonlyArray<{
      readonly number: string;
      readonly title: BilingualLax<string>;
      readonly sub: BilingualLax<string>;
    }>;
  };
  readonly options: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly intro: BilingualLax<string>;
    readonly formats: ReadonlyArray<{
      readonly id: string;
      readonly format: string;
      readonly label: BilingualLax<string>;
      readonly prix: BilingualLax<string>;
      readonly description: BilingualLax<string>;
      readonly lien: string;
      readonly lienLabel: BilingualLax<string>;
    }>;
  };
  readonly finalCta: {
    readonly eyebrow: BilingualLax<string>;
    readonly title: BilingualLax<string>;
    readonly sub: BilingualLax<string>;
    readonly ctaPrincipal: BilingualLax<string>;
    readonly ctaSecondaire: BilingualLax<string>;
  };
}

interface LivreSousPageTemplateProps {
  readonly data: LivreSousPageData;
}

export function LivreSousPageTemplate({ data }: LivreSousPageTemplateProps) {
  const { t } = useT();

  return (
    <>
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label={t(data.eyebrow)}
        className="relative min-h-[60vh] flex items-center px-md py-2xl bg-section-base overflow-hidden"
      >
        <FiligraneNumber number="01" position="right" />
        <div className="relative max-w-default mx-auto w-full px-md grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div
              aria-hidden="true"
              className={[
                'relative aspect-[3/4] w-full max-w-[300px] rounded-[clamp(0.5rem,0.5vw+0.3rem,1rem)]',
                'bg-gradient-to-br from-elevated via-base to-elevated',
                'border border-silver/15 ring-1 ring-gold/10',
                'shadow-haptic-focal',
                'flex flex-col items-center justify-center gap-md p-md'
              ].join(' ')}
            >
              <BookOpen aria-hidden="true" className="h-12 w-12 max-w-none text-gold/60 stroke-1" />
              <span className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-[10px] text-center">
                {t(data.visuelDescription)}
              </span>
              <span className="text-gold font-display text-xl tracking-tight text-center text-balance leading-tight whitespace-pre-line">
                {t(data.visuelTeaser)}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start gap-md">
            <Eyebrow>{t(data.eyebrow)}</Eyebrow>
            <MaskRevealHeading
              as="h1"
              className="font-normal tracking-[-0.04em] text-[clamp(2rem,1.4rem+2vw,3.75rem)] leading-[1.05] max-w-[24ch]"
            >
              <span className="text-shimmer">{t(data.title)}</span>
            </MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
              {t(data.sub)}
            </p>
            <div className="mt-md flex flex-col sm:flex-row gap-sm">
              <CTAPill variant="gold-primary" href={data.lienAcheter}>
                {t(data.ctaAcheter)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
              <CTAPill variant="silver-outline" href={data.lienChapitreGratuit}>
                {t(data.ctaChapitreGratuit)}
                <Download className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
            <p className="text-eyebrow uppercase tracking-widest text-silver/55 font-display text-[10px]">
              {t(data.ctaAcheterDisabledNote)}
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. POURQUOI CE LIVRE ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(data.pourquoi.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="02" position="left" />
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="flex flex-col gap-sm max-w-content">
              <Eyebrow>{t(data.pourquoi.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(data.pourquoi.title)}</MaskRevealHeading>
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[62ch]">
                {t(data.pourquoi.body)}
              </p>
            </div>
            <StaggerReveal
              as="div"
              className="grid grid-cols-1 md:grid-cols-2 gap-md"
              staggerMs={100}
              data-card-group="livre-sous-benefices"
            >
              {data.pourquoi.benefices.map((item, idx) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg shadow-haptic-card hover:border-gold/30 transition-colors duration-base"
                >
                  <span
                    aria-hidden="true"
                    className="text-gold font-display text-eyebrow uppercase tracking-widest text-xs opacity-80"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-h3 text-primary font-display text-balance">
                    {t(item.title)}
                  </h3>
                  <p className="text-body text-silver opacity-80 text-pretty">{t(item.body)}</p>
                </article>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 3. CHAPITRES ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section aria-label={t(data.chapitres.eyebrow)} className="relative py-2xl bg-section-base">
          <FiligraneNumber number="03" position="right" />
          <div className="relative max-w-default mx-auto px-md">
            <div className="text-center flex flex-col items-center gap-sm mb-xl max-w-content mx-auto">
              <Eyebrow>{t(data.chapitres.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(data.chapitres.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-80 text-pretty max-w-[62ch]">
                {t(data.chapitres.intro)}
              </p>
            </div>
            <StaggerReveal
              as="ol"
              data-chapters-list="true"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md"
              staggerMs={80}
            >
              {data.chapitres.items.map((chap) => (
                <li
                  key={chap.number}
                  className="hover-lift shadow-haptic-card shadow-haptic-card-hover transition-all duration-base flex flex-col gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                >
                  <span
                    aria-hidden="true"
                    className="text-[2.5rem] font-display font-bold text-gold/15 leading-none select-none"
                  >
                    {chap.number}
                  </span>
                  <h3 className="text-h3 text-primary font-display text-balance">
                    {t(chap.title)}
                  </h3>
                  <p className="text-body text-silver opacity-70 text-pretty">{t(chap.sub)}</p>
                </li>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 4. OPTIONS D'ACHAT ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(data.options.eyebrow)}
          className="relative py-2xl bg-section-elevated border-y border-silver/10"
        >
          <FiligraneNumber number="04" position="left" />
          <div className="relative max-w-default mx-auto px-md flex flex-col gap-xl">
            <div className="text-center flex flex-col items-center gap-sm max-w-content mx-auto">
              <Eyebrow>{t(data.options.eyebrow)}</Eyebrow>
              <MaskRevealHeading as="h2">{t(data.options.title)}</MaskRevealHeading>
              <p className="text-body text-silver opacity-80 text-pretty max-w-[62ch]">
                {t(data.options.intro)}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {data.options.formats.map((fmt) => (
                <article
                  key={fmt.id}
                  className="flex flex-col gap-sm p-md border border-silver/15 bg-base rounded-lg shadow-haptic-card"
                >
                  <header className="flex items-baseline justify-between gap-sm">
                    <span className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs">
                      {fmt.format}
                    </span>
                    <span className="text-xs text-silver/60 font-display">{t(fmt.prix)}</span>
                  </header>
                  <h3 className="text-h3 text-primary font-display text-balance">{t(fmt.label)}</h3>
                  <p className="text-body text-silver opacity-80 text-pretty">
                    {t(fmt.description)}
                  </p>
                  <div className="mt-auto pt-sm">
                    <a
                      href={fmt.lien}
                      aria-disabled={fmt.lien === '#'}
                      tabIndex={fmt.lien === '#' ? -1 : 0}
                      onClick={(e) => {
                        if (fmt.lien === '#') e.preventDefault();
                      }}
                      className={[
                        'inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest font-display text-xs',
                        fmt.lien === '#'
                          ? 'text-silver/55 cursor-not-allowed'
                          : 'text-gold hover:text-gold/80'
                      ].join(' ')}
                    >
                      {t(fmt.lienLabel)}
                      <ArrowRight className="h-3 w-3 max-w-none shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── 5. CTA FINAL ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section
          aria-label={t(data.finalCta.eyebrow)}
          className="relative py-2xl bg-section-base border-t border-silver/10"
        >
          <FiligraneNumber number="05" position="right" />
          <div className="relative max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
            <Eyebrow>{t(data.finalCta.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(data.finalCta.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
              {t(data.finalCta.sub)}
            </p>
            <div className="mt-md flex flex-col sm:flex-row gap-sm items-center justify-center">
              <CTAPill variant="silver-primary" href={data.lienAcheter}>
                {t(data.finalCta.ctaPrincipal)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
              <CTAPill variant="silver-outline" href={data.lienChapitreGratuit}>
                {t(data.finalCta.ctaSecondaire)}
                <Download className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </CTAPill>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}

/**
 * Demo data — un livre exemple "Architecture d'affaires : le manuel".
 * Réutilisé par /livre/$slug shell jusqu'à ce que Jonas confirme une vraie
 * bibliothèque de plusieurs livres.
 */
export const livreSousPageDemoData: LivreSousPageData = {
  slug: 'manuel-architecture',
  eyebrow: {
    fr: 'Livre · édition 2026',
    en: 'Book · 2026 edition'
  },
  title: {
    fr: "Architecture d'affaires : le manuel.",
    en: 'Business Architecture : the manual.'
  },
  sub: {
    fr: "L'édition complète de la méthodologie CDT™. 7 chapitres, frameworks, exercices appliqués sur ton architecture réelle.",
    en: 'The complete CDT™ methodology edition. 7 chapters, frameworks, exercises applied to your real architecture.'
  },
  visuelTeaser: {
    fr: 'AJOUTE\nUN ZÉRO',
    en: 'ADD\nA ZERO'
  },
  visuelDescription: {
    fr: 'Aperçu de la couverture · à venir',
    en: 'Cover preview · coming soon'
  },
  ctaAcheter: {
    fr: 'Acheter le livre',
    en: 'Buy the book'
  },
  ctaAcheterDisabledNote: {
    fr: 'Disponible à la publication',
    en: 'Available at publication'
  },
  ctaChapitreGratuit: {
    fr: 'Recevoir le 1er chapitre',
    en: 'Get the first chapter'
  },
  lienAcheter: '#',
  lienChapitreGratuit: '#',
  pourquoi: {
    eyebrow: {
      fr: 'Pourquoi ce livre',
      en: 'Why this book'
    },
    title: {
      fr: 'Le standard programme — en format livre.',
      en: 'The program standard — in book form.'
    },
    body: {
      fr: "Tu n'as pas accès à un programme et tu veux quand même appliquer la méthode CDT™ ? Ce livre est conçu pour toi. Pas un produit d'appel — un manuel de travail au même standard d'exigence que les programmes.",
      en: 'No access to a program but want to apply the CDT™ method anyway ? This book is built for you. Not a lead magnet — a working manual held to the same standard as the programs.'
    },
    benefices: [
      {
        id: 'cdt-complete',
        title: {
          fr: 'CDT™ complète et appliquée',
          en: 'CDT™ complete and applied'
        },
        body: {
          fr: 'Les 3 piliers, les frameworks détaillés, les diagrammes en double page. Rien de dilué pour le grand public.',
          en: 'The 3 pillars, detailed frameworks, double-page diagrams. Nothing diluted for a mass audience.'
        }
      },
      {
        id: 'exercices-pratiques',
        title: {
          fr: "Exercices d'application",
          en: 'Application exercises'
        },
        body: {
          fr: "Fin de chaque chapitre : un exercice d'audit sur ton architecture réelle. Tu repars avec un plan d'action.",
          en: 'At the end of each chapter : an audit exercise on your real architecture. You leave with an action plan.'
        }
      }
    ]
  },
  chapitres: {
    eyebrow: {
      fr: 'Sommaire détaillé',
      en: 'Detailed outline'
    },
    title: {
      fr: 'Les 7 chapitres.',
      en: 'The 7 chapters.'
    },
    intro: {
      fr: 'Sommaire prévisionnel — version définitive confirmée à la finalisation.',
      en: 'Provisional outline — final version confirmed at completion.'
    },
    items: [
      {
        number: '01',
        title: {
          fr: 'Pourquoi ton architecture te ralentit',
          en: 'Why your architecture is slowing you down'
        },
        sub: {
          fr: 'Patterns récurrents observés sur 857 mandats',
          en: 'Recurring patterns observed across 857 engagements'
        }
      },
      {
        number: '02',
        title: {
          fr: 'La CDT™ — Compression Dynamique du Temps',
          en: 'CDT™ — Dynamic Time Compression'
        },
        sub: {
          fr: 'Fondements, principes, pourquoi ça fonctionne',
          en: 'Foundations, principles, why it works'
        }
      },
      {
        number: '03',
        title: {
          fr: "Pilier 1 : Architecture de l'offre",
          en: 'Pillar 1 : Offer architecture'
        },
        sub: {
          fr: 'Repositionner, simplifier, tarifer pour le levier',
          en: 'Reposition, simplify, price for leverage'
        }
      }
    ]
  },
  options: {
    eyebrow: {
      fr: "Options d'achat",
      en: 'Buying options'
    },
    title: {
      fr: 'Print, ebook, audiobook.',
      en: 'Print, ebook, audiobook.'
    },
    intro: {
      fr: "Liens d'achat activés au lancement officiel.",
      en: 'Purchase links activate at official launch.'
    },
    formats: [
      {
        id: 'fmt-print',
        format: 'Print',
        label: {
          fr: 'Édition physique',
          en: 'Physical edition'
        },
        prix: {
          fr: 'Prix au lancement',
          en: 'Price at launch'
        },
        description: {
          fr: 'Couverture rigide · papier premium · diagrammes en double page.',
          en: 'Hardcover · premium paper · double-page diagrams.'
        },
        lien: '#',
        lienLabel: {
          fr: 'Disponible à la publication',
          en: 'Available at publication'
        }
      },
      {
        id: 'fmt-ebook',
        format: 'Ebook',
        label: {
          fr: 'Format numérique',
          en: 'Digital format'
        },
        prix: {
          fr: 'Prix au lancement',
          en: 'Price at launch'
        },
        description: {
          fr: "PDF + ePub · accès immédiat à l'achat.",
          en: 'PDF + ePub · instant access on purchase.'
        },
        lien: '#',
        lienLabel: {
          fr: 'Disponible à la publication',
          en: 'Available at publication'
        }
      },
      {
        id: 'fmt-audio',
        format: 'Audiobook',
        label: {
          fr: 'Version audio',
          en: 'Audio version'
        },
        prix: {
          fr: 'Prix au lancement',
          en: 'Price at launch'
        },
        description: {
          fr: 'Narration confirmée au lancement · livret PDF inclus.',
          en: 'Narration confirmed at launch · companion PDF included.'
        },
        lien: '#',
        lienLabel: {
          fr: 'Disponible à la publication',
          en: 'Available at publication'
        }
      }
    ]
  },
  finalCta: {
    eyebrow: {
      fr: 'Commande ton exemplaire',
      en: 'Order your copy'
    },
    title: {
      fr: "Rejoindre la liste d'attente.",
      en: 'Join the waitlist.'
    },
    sub: {
      fr: 'Accès prioritaire à la publication. Codes early-reader réservés à la liste.',
      en: 'Priority access at publication. Early-reader codes reserved for the list.'
    },
    ctaPrincipal: {
      fr: "Rejoindre la liste d'attente",
      en: 'Join the waitlist'
    },
    ctaSecondaire: {
      fr: 'Recevoir le chapitre gratuit',
      en: 'Get the free chapter'
    }
  }
};
