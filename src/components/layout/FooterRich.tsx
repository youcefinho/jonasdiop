import { Link } from '@tanstack/react-router';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CookieSettingsLink } from '@/components/consent/CookieSettingsLink';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { LogoWordmark } from '@/components/ui/LogoWordmark';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { clientConfig } from '@/config/clientConfig';
import { ROUTES } from '@/config/routes';
import { programmes } from '@/data/programmes';
import { useT } from '@/lib/i18n/useT';

export function FooterRich() {
  const { t, locale } = useT();
  const { client } = clientConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base border-t border-silver/10 pt-2xl pb-md relative">
      {/* Gold thread accent at top of footer — draws horizontally on viewport
          enter. Layered over the border-t silver line for premium signature. */}
      <SectionDivider variant="gold" className="absolute top-0 left-0 right-0 -translate-y-px" />

      {/* Newsletter capture — brief v3 §3.1 + §5 + §8 lead magnet principal.
          Form disabled : pending Jonas plateforme decision (Mailchimp/Beehiiv/GHL).
          Wire Sprint 6 via /api/newsletter custom field upsert. Tutoiement FR. */}
      <section
        aria-label={t({ fr: 'Inscription newsletter', en: 'Newsletter signup' })}
        className="max-w-wide mx-auto px-md mb-xl"
      >
        <div className="rounded-lg border border-silver/15 bg-elevated/40 px-md py-lg md:px-lg md:py-xl flex flex-col gap-md md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 max-w-2xl">
            <Eyebrow goldDot variant="plain">
              {t({ fr: 'Newsletter', en: 'Newsletter' })}
            </Eyebrow>
            <h2 className="font-display text-h3 text-primary text-balance">
              {t({
                fr: 'Reçois chaque semaine 1 stratégie de scaling actionnable',
                en: 'Get one actionable scaling strategy each week'
              })}
            </h2>
            <p className="text-body text-silver opacity-85 text-pretty">
              {t({
                fr: 'Pas de spam. Désabonnement 1 clic.',
                en: 'No spam. 1-click unsubscribe.'
              })}
            </p>
          </div>

          <form
            action="#"
            method="post"
            aria-label={t({
              fr: 'Inscription à la newsletter hebdomadaire',
              en: 'Subscribe to the weekly newsletter'
            })}
            className="flex flex-col sm:flex-row gap-sm w-full md:w-auto md:min-w-[26rem] md:shrink-0"
          >
            <label htmlFor="footer-newsletter-email" className="sr-only">
              {t({ fr: 'Adresse email', en: 'Email address' })}
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={t({ fr: 'ton@email.com', en: 'your@email.com' })}
              disabled
              className="flex-1 min-w-0 px-md py-sm rounded-pill bg-base border border-silver/20 text-body text-primary placeholder:text-silver/40 focus:outline-none focus-visible:border-gold/40 focus-visible:ring-2 focus-visible:ring-gold/20 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center gap-2 px-md py-sm rounded-pill bg-gold/10 border border-gold/30 text-eyebrow uppercase tracking-wider text-gold font-display font-medium hover:bg-gold/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Mail className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              {t({ fr: "S'abonner", en: 'Subscribe' })}
            </button>
          </form>
        </div>
        <p className="text-sm text-silver/55 mt-sm md:text-right">
          {t({
            fr: 'Plateforme email en cours d’intégration · disponible au lancement',
            en: 'Email platform integration in progress · available at launch'
          })}
        </p>
      </section>

      <div className="max-w-wide mx-auto px-md pt-lg border-t border-silver/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {/* Col 1 — Logo + tagline + socials */}
        <div className="flex flex-col gap-sm">
          <LogoWordmark size="md" />
          <p className="text-body text-silver opacity-80">
            {t({ fr: "Architecte d'affaires.", en: 'Business architect.' })}
          </p>
          <p className="text-sm text-silver/65 text-pretty">
            {t({
              fr: 'Architecture systémique pour entrepreneurs ambitieux.',
              en: 'Systemic architecture for ambitious entrepreneurs.'
            })}
          </p>
          <div className="flex gap-3 mt-sm text-silver">
            {client.socials.facebook && (
              <a
                href={client.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <SocialIcon name="facebook" className="h-5 w-5 max-w-none shrink-0" />
              </a>
            )}
            {client.socials.instagram && (
              <a
                href={client.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <SocialIcon name="instagram" className="h-5 w-5 max-w-none shrink-0" />
              </a>
            )}
            {client.socials.linkedin && (
              <a
                href={client.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <SocialIcon name="linkedin" className="h-5 w-5 max-w-none shrink-0" />
              </a>
            )}
            {client.socials.x && (
              <a
                href={client.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-primary transition-colors"
              >
                <SocialIcon name="x" className="h-5 w-5 max-w-none shrink-0" />
              </a>
            )}
            {client.socials.tiktok && (
              <a
                href={client.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-primary transition-colors"
              >
                <SocialIcon name="tiktok" className="h-5 w-5 max-w-none shrink-0" />
              </a>
            )}
            {client.socials.youtube && (
              <a
                href={client.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-primary transition-colors"
              >
                <SocialIcon name="youtube" className="h-5 w-5 max-w-none shrink-0" />
              </a>
            )}
          </div>
        </div>

        {/* Col 2 — Programmes */}
        <div className="flex flex-col gap-sm">
          <p className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display">
            {t({ fr: 'Programmes', en: 'Programs' })}
          </p>
          <nav
            aria-label={t({ fr: 'Programmes', en: 'Programs' })}
            className="flex flex-col gap-2 text-body text-silver"
          >
            {programmes.map((p) => (
              <Link
                key={p.id}
                to={ROUTES[p.hrefKey][locale]}
                className="link-sweep hover:text-primary transition-colors"
              >
                {t(p.name)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Ressources */}
        <div className="flex flex-col gap-sm">
          <p className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display">
            {t({ fr: 'Ressources', en: 'Resources' })}
          </p>
          <nav
            aria-label={t({ fr: 'Ressources', en: 'Resources' })}
            className="flex flex-col gap-2 text-body text-silver"
          >
            <Link
              to={ROUTES['methodologie-cdt'][locale]}
              className="link-sweep hover:text-primary transition-colors"
            >
              {t({ fr: 'Méthodologie CDT™', en: 'CDT™ Methodology' })}
            </Link>
            <Link
              to={ROUTES.conferences[locale]}
              className="link-sweep hover:text-primary transition-colors"
            >
              {t({ fr: 'Conférences B2B', en: 'B2B Speaking' })}
            </Link>
            <Link
              to={ROUTES.ressources[locale]}
              className="link-sweep hover:text-primary transition-colors"
            >
              {t({ fr: 'Articles', en: 'Articles' })}
            </Link>
            <Link
              to={ROUTES.podcast[locale]}
              className="link-sweep hover:text-primary transition-colors"
            >
              {t({ fr: 'Podcast The Game Changer', en: 'The Game Changer Podcast' })}
            </Link>
            <Link
              to={ROUTES.livre[locale]}
              className="link-sweep hover:text-primary transition-colors"
            >
              {t({ fr: 'Livre (à venir)', en: 'Book (coming)' })}
            </Link>
            <Link
              to={ROUTES.evenements[locale]}
              className="link-sweep hover:text-primary transition-colors"
            >
              {t({ fr: 'Événements', en: 'Events' })}
            </Link>
          </nav>
        </div>

        {/* Col 4 — Contact & légal */}
        <div className="flex flex-col gap-sm">
          <p className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display">
            {t({ fr: 'Contact & légal', en: 'Contact & legal' })}
          </p>
          <div className="flex flex-col gap-2 text-body text-silver">
            <a
              href={`mailto:${client.email}`}
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              {client.email}
            </a>
            <a
              href={`tel:${client.phone}`}
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              +1 438 356 7746
            </a>
            <span className="inline-flex items-center gap-2 text-tertiary">
              <MapPin className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              {t({ fr: 'Montréal & Worldwide', en: 'Montréal & Worldwide' })}
            </span>
          </div>
          <div className="mt-sm">
            <CTAPill variant="silver-outline" href={ROUTES.contact[locale]}>
              {t({ fr: 'Réserver mon appel stratégique', en: 'Book my strategy call' })}
            </CTAPill>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-wide mx-auto px-md mt-xl pt-md border-t border-silver/10 flex flex-col md:flex-row justify-between items-center gap-sm text-sm text-silver/65">
        <p>
          © {year} {client.legalName}
          {' · '}
          {t({ fr: 'Cabinet de conseil stratégique', en: 'Strategic consulting firm' })}
          {client.neq && <> · NEQ {client.neq}</>}
        </p>
        <nav
          aria-label={t({ fr: 'Liens légaux', en: 'Legal links' })}
          className="flex gap-md text-eyebrow uppercase tracking-widest"
        >
          <Link
            to={ROUTES['mentions-legales'][locale]}
            className="hover:text-silver transition-colors"
          >
            {t({ fr: 'Mentions légales', en: 'Legal notice' })}
          </Link>
          <Link
            to={ROUTES['politique-confidentialite'][locale]}
            className="hover:text-silver transition-colors"
          >
            {t({ fr: 'Confidentialité', en: 'Privacy' })}
          </Link>
          <Link
            to={ROUTES['conditions-utilisation'][locale]}
            className="hover:text-silver transition-colors"
          >
            {t({ fr: 'Conditions', en: 'Terms' })}
          </Link>
          <CookieSettingsLink />
        </nav>
        <p>
          {t({ fr: 'Site par', en: 'Made by' })}{' '}
          <a
            href="https://intralys.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-silver transition-colors"
          >
            Intralys
          </a>
        </p>
      </div>
    </footer>
  );
}
