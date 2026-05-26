import { ArrowRight, Check, Mail, MapPin, Phone, X } from 'lucide-react';
import { CTAPill } from '@/components/ui/CTAPill';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { contactCopy } from '@/data/copy/contact';
import { useT } from '@/lib/i18n/useT';

/**
 * ContactPage — composite landing page section for /contact (FR) and /en/contact.
 *
 * 8 sections : Hero → HowItWorks (3 steps) → CallExplore (5 items) → NotForWho (4 disqualif)
 *           → Form (mockup, wire Sprint 6) → Calendly placeholder → ContactAlternatives → FinalCta
 *
 * DA Platinum Executive Authority. Form + Calendly = visual placeholders, GHL/Calendly wire Sprint 6.
 */
export function ContactPage() {
  const { t } = useT();

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section
        aria-label={t(contactCopy.hero.eyebrow)}
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-md py-2xl bg-base"
      >
        <div className="flex flex-col items-center gap-md max-w-content mx-auto">
          <Eyebrow>{t(contactCopy.hero.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h1">{t(contactCopy.hero.h1)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-80 text-pretty max-w-[55ch]">
            {t(contactCopy.hero.sub)}
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* HOW IT WORKS — 3 steps with gold filigrane numbers               */}
      {/* ---------------------------------------------------------------- */}
      <section
        aria-label={t(contactCopy.howItWorks.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(contactCopy.howItWorks.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(contactCopy.howItWorks.title)}</MaskRevealHeading>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {contactCopy.howItWorks.steps.map((step) => (
              <li
                key={step.number}
                className="flex flex-col gap-sm p-md bg-base border border-silver/15 rounded-lg"
              >
                <span
                  aria-hidden="true"
                  className="text-[2.5rem] font-display font-bold text-gold/15 leading-none select-none"
                >
                  {step.number}
                </span>
                <h3 className="text-h3 text-primary font-display text-balance">{t(step.title)}</h3>
                <p className="text-body text-silver opacity-70 text-pretty">{t(step.body)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CALL EXPLORE — 5 items with gold checks                          */}
      {/* ---------------------------------------------------------------- */}
      <section aria-label={t(contactCopy.callExplore.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(contactCopy.callExplore.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(contactCopy.callExplore.title)}</MaskRevealHeading>
          </div>

          <ul
            data-call-explore-list
            className="flex flex-col gap-sm max-w-[65ch] mx-auto"
            aria-label={t(contactCopy.callExplore.eyebrow)}
          >
            {contactCopy.callExplore.items.map((item) => (
              <li
                key={item.fr.slice(0, 40)}
                className="flex items-start gap-3 text-body text-silver"
              >
                <span aria-hidden="true" className="mt-0.5 h-5 w-5 max-w-none shrink-0 text-gold">
                  <Check className="h-5 w-5 max-w-none" />
                </span>
                <span className="text-pretty">{t(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* NOT FOR WHO — 4 disqualif items                                  */}
      {/* ---------------------------------------------------------------- */}
      <section
        aria-label={t(contactCopy.notForWho.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md">
          <div className="flex flex-col gap-sm mb-lg">
            <Eyebrow>{t(contactCopy.notForWho.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(contactCopy.notForWho.title)}</MaskRevealHeading>
            <p className="text-body text-silver opacity-80 text-pretty max-w-[65ch]">
              {t(contactCopy.notForWho.body)}
            </p>
          </div>

          <ul
            data-disqualif-list
            className="flex flex-col gap-sm"
            aria-label={t(contactCopy.notForWho.title)}
          >
            {contactCopy.notForWho.disqualif.map((item) => (
              <li
                key={item.fr.slice(0, 40)}
                className="flex items-start gap-3 text-body text-silver opacity-60"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 max-w-none shrink-0 text-silver/50"
                >
                  <X className="h-5 w-5 max-w-none" />
                </span>
                <span className="text-pretty">{t(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FORM + COORDS sidebar split — Stitch board 20 layout              */}
      {/* Form 60% LEFT (col-span-7) + Coords 40% RIGHT (col-span-5) on lg+ */}
      {/* Stacked on mobile/tablet                                          */}
      {/* ---------------------------------------------------------------- */}
      <section aria-label={t(contactCopy.form.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(contactCopy.form.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(contactCopy.form.title)}</MaskRevealHeading>
            <p className="text-sm text-silver/50 italic text-pretty max-w-[55ch]">
              {t(contactCopy.form.sub)}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
            {/* Form — 7 cols on lg+ */}
            <form
              className="lg:col-span-7 flex flex-col gap-md"
              aria-label={t(contactCopy.form.title)}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
                >
                  {t(contactCopy.form.fields.name.label)}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  disabled
                  placeholder={t(contactCopy.form.fields.name.placeholder)}
                  className="px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
                />
              </div>

              {/* Email + Phone side-by-side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
                  >
                    {t(contactCopy.form.fields.email.label)}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    disabled
                    placeholder={t(contactCopy.form.fields.email.placeholder)}
                    className="px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-phone"
                    className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
                  >
                    {t(contactCopy.form.fields.phone.label)}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    disabled
                    placeholder={t(contactCopy.form.fields.phone.placeholder)}
                    className="px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
                  />
                </div>
              </div>

              {/* Revenue range */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-revenue"
                  className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
                >
                  {t(contactCopy.form.fields.revenueRange.label)}
                </label>
                <select
                  id="contact-revenue"
                  name="revenueRange"
                  disabled
                  className="px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40"
                >
                  {contactCopy.form.fields.revenueRange.options.map((opt) => (
                    <option key={opt.fr} value={opt.fr}>
                      {t(opt)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-eyebrow uppercase tracking-widest text-silver/70 font-display text-xs"
                >
                  {t(contactCopy.form.fields.message.label)}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  disabled
                  placeholder={t(contactCopy.form.fields.message.placeholder)}
                  className="px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40 resize-none"
                />
              </div>

              {/* Consent */}
              <p className="text-xs text-silver/50 text-pretty">
                {t(contactCopy.form.consentLabel)}
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-silver text-base disabled:cursor-not-allowed disabled:opacity-50 mt-sm self-start"
              >
                {t(contactCopy.form.fields.submit)}
                <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
              </button>
            </form>

            {/* Coords sidebar — 5 cols on lg+, stacked below form on smaller.
                <div> instead of <aside> so the complementary landmark isn't
                nested inside the parent <section> landmark (WCAG
                landmark-complementary-is-top-level). */}
            <div data-contact-coords className="lg:col-span-5 flex flex-col gap-md">
              <div className="flex flex-col gap-sm mb-2">
                <Eyebrow>{t(contactCopy.contactAlternatives.eyebrow)}</Eyebrow>
                <h3 className="text-h3 text-primary font-display text-balance">
                  {t(contactCopy.contactAlternatives.title)}
                </h3>
              </div>

              <ul
                className="flex flex-col gap-md"
                aria-label={t(contactCopy.contactAlternatives.title)}
              >
                {contactCopy.contactAlternatives.items.map((item) => {
                  const Icon =
                    item.type === 'email' ? Mail : item.type === 'phone' ? Phone : MapPin;
                  const display = typeof item.value === 'string' ? item.value : t(item.value);
                  const href =
                    item.type === 'email'
                      ? `mailto:${item.value}`
                      : item.type === 'phone'
                        ? `tel:${(item.value as string).replace(/\s/g, '')}`
                        : undefined;
                  return (
                    <li
                      key={item.type}
                      className="flex items-start gap-md p-md bg-elevated border border-silver/15 rounded-lg"
                    >
                      <span
                        aria-hidden="true"
                        className="h-10 w-10 max-w-none shrink-0 flex items-center justify-center rounded-full bg-base border border-silver/15 text-silver"
                      >
                        <Icon className="h-4 w-4 max-w-none" />
                      </span>
                      <div className="flex flex-col gap-1 min-w-0">
                        <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs">
                          {t(item.label)}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-body text-primary font-display font-medium hover:text-silver transition-colors duration-base text-pretty break-words"
                          >
                            {display}
                          </a>
                        ) : (
                          <span className="text-body text-primary font-display font-medium text-pretty">
                            {display}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <p className="text-sm text-silver/50 italic text-pretty mt-2">
                {t(contactCopy.contactAlternatives.responseTime)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CAL.COM embed section — confirmed via audit jonasdiop.com         */}
      {/* (template CoachVerse utilise Cal.com embed, pas Calendly).        */}
      {/* Iframe-shaped placeholder + POWERED BY CAL.COM note.              */}
      {/* When H8 (Cal.com URL Jonas) reçu, swap pour iframe :              */}
      {/*   <iframe src="https://cal.com/jonas-diop/15min"                  */}
      {/*           data-cal-config='{"theme":"dark","layout":"month_view", */}
      {/*                             "timeZone":"America/Toronto"}'/>      */}
      {/* Note timezone : Jonas site live a Africa/Lagos par défaut (bug    */}
      {/* template), set explicitement America/Toronto.                     */}
      {/* ---------------------------------------------------------------- */}
      <section
        aria-label={t(contactCopy.calendly.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(contactCopy.calendly.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(contactCopy.calendly.title)}</MaskRevealHeading>
            <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
              {t({
                fr: 'Sélectionnez un créneau qui vous convient. Réservation instantanée, sans frais, et sans engagement.',
                en: 'Pick a slot that works for you. Instant booking, no fees, no commitment.'
              })}
            </p>
          </div>

          {/* Calendly-shaped placeholder card (aspect mimicking real embed) */}
          <div
            className={[
              'relative mx-auto max-w-[820px] rounded-[clamp(0.75rem,0.8vw+0.4rem,1.5rem)] overflow-hidden',
              'ring-1 ring-silver/15 bg-base',
              'shadow-[0_32px_80px_-16px_oklch(0_0_0/0.5),_inset_0_1px_1px_oklch(1_0_0/0.04)]'
            ].join(' ')}
          >
            {/* Header bar — mimics Cal.com toolbar (15-Min Meeting, timezone Montréal) */}
            <div className="flex items-center justify-between px-md py-sm border-b border-silver/10 bg-elevated/60 backdrop-blur-sm">
              <div className="flex items-center gap-sm">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse"
                />
                <span className="text-eyebrow uppercase tracking-widest text-silver opacity-70 font-display text-xs">
                  {t({ fr: 'Cal.com · en direct', en: 'Cal.com · live' })}
                </span>
              </div>
              <span className="text-eyebrow uppercase tracking-widest text-silver opacity-50 font-display text-xs">
                {t({
                  fr: 'Appel de qualification · 30 min · America/Toronto',
                  en: 'Qualification call · 30 min · America/Toronto'
                })}
              </span>
            </div>

            {/* Embed area — aspect 4:3 mimics Calendly month view */}
            <div className="relative aspect-[4/3] bg-base">
              {/* Decorative grid pattern (placeholder Calendly month grid) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-7 grid-rows-5 gap-[1px] p-md opacity-30"
              >
                {Array.from({ length: 35 }).map((_, idx) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: static decorative grid
                    key={idx}
                    className="rounded-sm bg-elevated/60 ring-1 ring-silver/5"
                  />
                ))}
              </div>

              {/* Center loading state */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-md gap-sm">
                <div
                  aria-hidden="true"
                  className={[
                    'relative h-14 w-14 rounded-full',
                    'ring-1 ring-gold/30',
                    'bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.085_75/0.25)_0%,transparent_70%)]',
                    'flex items-center justify-center'
                  ].join(' ')}
                >
                  <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                </div>
                <p className="text-body text-primary font-display tracking-tight max-w-[42ch] text-pretty">
                  {t({
                    fr: 'Le calendrier interactif est en cours de connexion.',
                    en: 'The interactive calendar is connecting.'
                  })}
                </p>
                <p className="text-sm text-silver opacity-60 text-pretty max-w-[48ch]">
                  {t(contactCopy.calendly.placeholder)}
                </p>
              </div>
            </div>

            {/* Footer note — POWERED BY CAL.COM */}
            <div className="flex items-center justify-between px-md py-sm border-t border-silver/10 bg-elevated/60 backdrop-blur-sm">
              <span className="text-eyebrow uppercase tracking-widest text-silver opacity-50 font-display text-xs">
                {t({ fr: 'Propulsé par Cal.com', en: 'Powered by Cal.com' })}
              </span>
              <span className="text-eyebrow uppercase tracking-widest text-silver opacity-50 font-display text-xs">
                {t({
                  fr: 'Réservation instantanée · Sans frais',
                  en: 'Instant booking · No fees'
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FINAL CTA — scroll up to Calendly                                */}
      {/* ---------------------------------------------------------------- */}
      <section
        aria-label={t(contactCopy.finalCta.eyebrow)}
        className="py-2xl bg-elevated border-t border-silver/10"
      >
        <div className="max-w-content mx-auto px-md text-center flex flex-col items-center gap-md">
          <Eyebrow>{t(contactCopy.finalCta.eyebrow)}</Eyebrow>
          <MaskRevealHeading as="h2">{t(contactCopy.finalCta.title)}</MaskRevealHeading>
          <p className="text-body-lg text-silver opacity-75 text-pretty max-w-[55ch]">
            {t(contactCopy.finalCta.sub)}
          </p>
          <div className="mt-md">
            <CTAPill
              variant="silver-primary"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {t(contactCopy.finalCta.ctaLabel)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </CTAPill>
          </div>
        </div>
      </section>
    </>
  );
}
