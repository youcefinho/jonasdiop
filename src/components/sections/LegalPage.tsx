import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import type { BilingualLax } from '@/lib/i18n/types';
import { useT } from '@/lib/i18n/useT';

interface LegalSection {
  readonly id: string;
  readonly title: BilingualLax<string>;
  readonly body: BilingualLax<string>;
}

export interface LegalCopy {
  readonly meta?: {
    readonly title: BilingualLax<string>;
    readonly description: BilingualLax<string>;
  };
  readonly hero: {
    readonly eyebrow: BilingualLax<string>;
    readonly h1: BilingualLax<string>;
    readonly sub: BilingualLax<string>;
  };
  readonly sections: ReadonlyArray<LegalSection>;
  readonly lastUpdate?: BilingualLax<string>;
}

interface LegalPageProps {
  copy: LegalCopy;
}

/**
 * Naive markdown subset renderer for legal copy.
 *
 * Supports : **bold** → <strong>. Preserves line breaks inside a paragraph as
 * <br/> for nested numbered items. Sufficient for Loi 25 / standard legal text.
 *
 * Sanitization : the bold regex captures any character inside `**...**` and
 * emits a <strong> tag ; the surrounding HTML is escaped before this step so
 * authored copy cannot inject markup. dangerouslySetInnerHTML is safe here
 * because the source is our own static TypeScript copy files (not user input).
 */
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderParagraph(raw: string): string {
  const escaped = escapeHtml(raw);
  const withBold = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  return withBold.replace(/\n/g, '<br />');
}

/**
 * LegalPage — Reusable template for /mentions-legales, /politique-confidentialite,
 * and /conditions-utilisation (FR + EN).
 *
 * Sections : Hero (eyebrow + H1 + sub) → ordered list of <article> per section
 * (sticky table of contents on desktop) → optional lastUpdate footer line.
 *
 * DA Platinum Executive Authority — dense single-column reading layout with
 * generous typography (max-w-65ch body, text-pretty, leading-relaxed).
 */
export function LegalPage({ copy }: LegalPageProps) {
  const { t } = useT();

  return (
    <>
      {/* HERO */}
      <section
        aria-label={t(copy.hero.eyebrow)}
        className="relative min-h-[40vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(copy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">{t(copy.hero.h1)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[65ch]">
            {t(copy.hero.sub)}
          </p>
        </div>
      </section>

      {/* TABLE OF CONTENTS — desktop only, sticky */}
      <section
        aria-label={t({ fr: 'Sommaire', en: 'Table of contents' })}
        className="py-xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md">
          <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs mb-md">
            {t({ fr: 'Sommaire', en: 'Table of contents' })}
          </p>
          <ol
            data-legal-toc
            className="flex flex-col gap-2 text-sm"
            aria-label={t({ fr: 'Sommaire', en: 'Table of contents' })}
          >
            {copy.sections.map((section, idx) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-silver hover:text-gold transition-colors duration-base"
                >
                  <span className="text-gold/60 font-display font-medium mr-2">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  {t(section.title)}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTIONS */}
      <article data-legal-body className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md flex flex-col gap-2xl">
          {copy.sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              aria-label={t(section.title)}
              className="scroll-mt-[100px]"
            >
              <div className="flex items-baseline gap-md mb-md">
                <span
                  aria-hidden="true"
                  className="text-eyebrow uppercase tracking-widest text-gold/50 font-display text-xs shrink-0"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-h2 text-primary font-display text-balance">
                  {t(section.title)}
                </h2>
              </div>
              <div className="flex flex-col gap-md max-w-[65ch]">
                {t(section.body)
                  .split('\n\n')
                  .map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-body text-silver opacity-85 text-pretty leading-relaxed"
                      // biome-ignore lint/security/noDangerouslySetInnerHtml: source is static TS copy, escapeHtml + restricted **bold** substitution.
                      dangerouslySetInnerHTML={{ __html: renderParagraph(para) }}
                    />
                  ))}
              </div>
            </section>
          ))}

          {copy.lastUpdate && (
            <p className="text-sm text-silver/50 italic text-pretty mt-xl pt-lg border-t border-silver/10">
              {t(copy.lastUpdate)}
            </p>
          )}
        </div>
      </article>
    </>
  );
}
