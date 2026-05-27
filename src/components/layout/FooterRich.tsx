import { Link } from '@tanstack/react-router';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CookieSettingsLink } from '@/components/consent/CookieSettingsLink';
import { CTAPill } from '@/components/ui/CTAPill';
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
      <div className="max-w-wide mx-auto px-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {/* Col 1 — Logo + tagline + socials */}
        <div className="flex flex-col gap-sm">
          <LogoWordmark size="md" />
          <p className="text-body text-silver opacity-80">
            {t({ fr: "Architecte d'affaires.", en: 'Business architect.' })}
          </p>
          <p className="text-sm text-tertiary opacity-70 text-pretty">
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
                className="hover:text-primary transition-colors"
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
              className="hover:text-primary transition-colors"
            >
              {t({ fr: 'Méthodologie CDT™', en: 'CDT™ Methodology' })}
            </Link>
            <Link to={ROUTES.ressources[locale]} className="hover:text-primary transition-colors">
              {t({ fr: 'Articles', en: 'Articles' })}
            </Link>
            <Link to={ROUTES.podcast[locale]} className="hover:text-primary transition-colors">
              {t({ fr: 'Podcast The Game Changer', en: 'The Game Changer Podcast' })}
            </Link>
            <Link to={ROUTES.livre[locale]} className="hover:text-primary transition-colors">
              {t({ fr: 'Livre (à venir)', en: 'Book (coming)' })}
            </Link>
            <Link to={ROUTES.evenements[locale]} className="hover:text-primary transition-colors">
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
              {t({ fr: 'Prendre rendez-vous', en: 'Book a call' })}
            </CTAPill>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-wide mx-auto px-md mt-xl pt-md border-t border-silver/10 flex flex-col md:flex-row justify-between items-center gap-sm text-sm text-tertiary opacity-70">
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
