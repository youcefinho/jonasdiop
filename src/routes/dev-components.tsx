import { createFileRoute } from '@tanstack/react-router';
import { ArticleRenderer } from '@/components/articles/ArticleRenderer';
import { CookieBanner } from '@/components/consent/CookieBanner';
import { CookieSettingsLink } from '@/components/consent/CookieSettingsLink';
import { CookieSettingsModal } from '@/components/consent/CookieSettingsModal';
import { FooterRich } from '@/components/layout/FooterRich';
import { ContactPage } from '@/components/sections/ContactPage';
import { EvenementsPage } from '@/components/sections/EvenementsPage';
import { FAQHomeSection } from '@/components/sections/FAQHomeSection';
import { FAQPage } from '@/components/sections/FAQPage';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Hero } from '@/components/sections/Hero';
import { LegalPage } from '@/components/sections/LegalPage';
import { LivrePage } from '@/components/sections/LivrePage';
import { LPConsultationsTemplate } from '@/components/sections/LPConsultationsTemplate';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { NotFoundPage } from '@/components/sections/NotFoundPage';
import { PodcastPageLive, PodcastPageWaitlist } from '@/components/sections/PodcastPage';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { RessourcesPage } from '@/components/sections/RessourcesPage';
import { TemoignagesPage } from '@/components/sections/TemoignagesPage';
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
import { conditionsUtilisationCopy } from '@/data/copy/conditions-utilisation';
import { mentionsLegalesCopy } from '@/data/copy/mentions-legales';
import { politiqueConfidentialiteCopy } from '@/data/copy/politique-confidentialite';
import { consultationsPriveesCopy } from '@/data/copy/services-consultations-privees';
import { gamechangerScalingCopy } from '@/data/copy/services-gamechanger-scaling';
import { CookieConsentProvider } from '@/lib/consent/CookieConsentContext';
import type { Article } from '@/lib/content/types';

const devSampleArticle: Article = {
  id: 'art-dev-001',
  slug: 'pourquoi-cdt-fonctionne',
  locale: 'fr',
  title: 'Pourquoi la CDT™ fonctionne quand les frameworks classiques échouent.',
  excerpt: 'Trois piliers, une seule méthode. Voici ce qui fait la différence.',
  bodyMarkdown:
    "La plupart des entrepreneurs essaient de scaler sans toucher à leur architecture. Résultat : plus de chiffre d'affaires, mais aussi plus de chaos.\n\nLa CDT™ part d'un constat simple : votre architecture détermine 80% de votre trajectoire. Le reste, c'est de l'exécution.\n\nVoici comment on s'y prend.",
  publishedAt: '2026-06-01T10:00:00.000Z',
  updatedAt: null,
  author: { name: 'Jonas Diop', title: "Architecte d'affaires" },
  category: { id: 'architecture', label: 'Architecture' },
  coverImage: null,
  readingMinutes: 4,
  source: 'ghl'
};

const devSampleMarkdownArticle: Article = {
  id: 'art-dev-002',
  slug: 'sample-rich-markdown',
  locale: 'fr',
  title: 'Démo markdown — features react-markdown + rehype-sanitize.',
  excerpt: 'Vérification visuelle des composants forcés DA Silver Platinum.',
  bodyMarkdown: `## Architecture en 3 piliers

La méthodologie CDT™ repose sur trois axes structurels :

- **Architecture de l'offre** : repositionnement et levier
- **Architecture de l'équipe** : délégation sans friction
- **Compression des systèmes** : ce qui tourne sans vous

### Pourquoi cet ordre

1. L'offre conditionne le revenu *immédiat*
2. L'équipe conditionne la *capacité* à scaler
3. Les systèmes conditionnent la *durabilité*

> Architecture détermine 80% de votre trajectoire. Le reste, c'est de l'exécution.

| Phase | Durée | Levier |
|-------|-------|--------|
| Diagnostic | 2 semaines | Repérage |
| Restructuration | 4 semaines | Action |
| Scaling | Continu | Mesure |

Utiliser \`getArticle(slug)\` côté code pour fetch les articles depuis GHL.
Détails : [docs](https://example.com).`,
  publishedAt: '2026-06-15T10:00:00.000Z',
  updatedAt: null,
  author: { name: 'Jonas Diop', title: "Architecte d'affaires" },
  category: { id: 'architecture', label: 'Architecture' },
  coverImage: null,
  readingMinutes: 5,
  source: 'ghl'
};

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

      {/* Sprint 5 — Secondary pages + GHL Blog scaffolding + 404 */}
      <section>
        <h2 className="text-h3 text-primary mb-md">ContactPage (Sprint 5) — full secondary page</h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <ContactPage />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          FAQPage (Sprint 5) — full 14 Q/A standalone page
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <FAQPage />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          FAQHomeSection (Sprint 9) — preview 3-5 top questions on Home
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <FAQHomeSection />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          TemoignagesPage (Sprint 5) — 3 shells pending H3
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <TemoignagesPage />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">LivrePage (Sprint 5) — 7 chapters + waitlist</h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <LivrePage />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          EvenementsPage (Sprint 5) — calendar empty state pending H7
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <EvenementsPage />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          PodcastPageLive (Sprint 5, Scenario A) — H17 confirmé live
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <PodcastPageLive />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          PodcastPageWaitlist (Sprint 5, Scenario B) — H17 default coming_soon
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <PodcastPageWaitlist />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          RessourcesPage (Sprint 5) — GHL Blog scaffolding empty state
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <RessourcesPage />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          ArticleRenderer (Sprint 5) — sample article DA blindé
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <ArticleRenderer article={devSampleArticle} />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">NotFoundPage (Sprint 5) — 404 fallback</h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <NotFoundPage />
        </div>
      </section>

      {/* Sprint 6 — Legal pages + cookie consent + ArticleRenderer markdown */}
      <section>
        <h2 className="text-h3 text-primary mb-md">
          LegalPage / mentions-legales (Sprint 6) — Loi 25 compliant
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <LegalPage copy={mentionsLegalesCopy} />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          LegalPage / politique-confidentialite (Sprint 6)
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <LegalPage copy={politiqueConfidentialiteCopy} />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          LegalPage / conditions-utilisation (Sprint 6)
        </h2>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <LegalPage copy={conditionsUtilisationCopy} />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          ArticleRenderer (Sprint 6) — react-markdown + rehype-sanitize
        </h2>
        <p className="text-body text-silver opacity-70 mb-md max-w-[65ch]">
          Sample article with rich markdown : ## h2 / ### h3 / bullet lists / numbered lists /
          blockquotes / **bold** / *italic* / `code` / [external link](https://example.com) / GFM
          table. Strict allow-list strips raw HTML and inline styles.
        </p>
        <div className="border border-silver/15 rounded-lg overflow-hidden">
          <ArticleRenderer article={devSampleMarkdownArticle} />
        </div>
      </section>

      <section>
        <h2 className="text-h3 text-primary mb-md">
          Cookie consent (Sprint 6) — Loi 25 banner + modal
        </h2>
        <p className="text-body text-silver opacity-70 mb-md max-w-[65ch]">
          Banner renders fixed at the viewport bottom-right ; click "Personnaliser" to open the
          granular modal. Decision persists 13 months via localStorage. Footer link re-opens
          settings anytime.
        </p>
        <div className="relative border border-silver/15 rounded-lg overflow-visible min-h-[200px] bg-base p-md">
          <CookieConsentProvider>
            <p className="text-sm text-silver/60 italic">
              ↘ Banner appears bottom-right of the viewport. Footer link below opens the modal.
            </p>
            <div className="mt-md">
              <CookieSettingsLink />
            </div>
            <CookieBanner />
            <CookieSettingsModal />
          </CookieConsentProvider>
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
