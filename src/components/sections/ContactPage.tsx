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
      {/* FORM — visual mockup, disabled inputs, wire Sprint 6 GHL          */}
      {/* ---------------------------------------------------------------- */}
      <section aria-label={t(contactCopy.form.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(contactCopy.form.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(contactCopy.form.title)}</MaskRevealHeading>
            <p className="text-sm text-silver/50 italic text-pretty max-w-[55ch]">
              {t(contactCopy.form.sub)}
            </p>
          </div>

          <form
            className="flex flex-col gap-md max-w-[55ch] mx-auto"
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

            {/* Email */}
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

            {/* Phone */}
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
                rows={5}
                disabled
                placeholder={t(contactCopy.form.fields.message.placeholder)}
                className="px-md py-sm bg-elevated border border-silver/15 rounded-lg text-body text-primary placeholder:text-silver/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:border-silver/40 resize-none"
              />
            </div>

            {/* Consent */}
            <p className="text-xs text-silver/50 text-pretty">{t(contactCopy.form.consentLabel)}</p>

            {/* Submit */}
            <button
              type="submit"
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-sm text-eyebrow uppercase tracking-wider font-display bg-silver text-base disabled:cursor-not-allowed disabled:opacity-50 mt-sm"
            >
              {t(contactCopy.form.fields.submit)}
              <ArrowRight className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CALENDLY placeholder card                                        */}
      {/* ---------------------------------------------------------------- */}
      <section
        aria-label={t(contactCopy.calendly.eyebrow)}
        className="py-2xl bg-elevated border-y border-silver/10"
      >
        <div className="max-w-content mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-lg">
            <Eyebrow>{t(contactCopy.calendly.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">{t(contactCopy.calendly.title)}</MaskRevealHeading>
          </div>

          <div className="border border-dashed border-silver/20 rounded-lg p-xl bg-base/50 text-center">
            <p className="text-sm text-silver/50 italic text-pretty">
              {t(contactCopy.calendly.placeholder)}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CONTACT ALTERNATIVES — 3 coordinates                            */}
      {/* ---------------------------------------------------------------- */}
      <section aria-label={t(contactCopy.contactAlternatives.eyebrow)} className="py-2xl bg-base">
        <div className="max-w-default mx-auto px-md">
          <div className="text-center flex flex-col items-center gap-sm mb-xl">
            <Eyebrow>{t(contactCopy.contactAlternatives.eyebrow)}</Eyebrow>
            <MaskRevealHeading as="h2">
              {t(contactCopy.contactAlternatives.title)}
            </MaskRevealHeading>
          </div>

          <ul
            className="grid grid-cols-1 md:grid-cols-3 gap-md"
            aria-label={t(contactCopy.contactAlternatives.title)}
          >
            {contactCopy.contactAlternatives.items.map((item) => {
              const Icon = item.type === 'email' ? Mail : item.type === 'phone' ? Phone : MapPin;
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
                  className="flex flex-col items-center text-center gap-sm p-md bg-elevated border border-silver/15 rounded-lg"
                >
                  <span
                    aria-hidden="true"
                    className="h-8 w-8 max-w-none shrink-0 text-gold/70 flex items-center justify-center"
                  >
                    <Icon className="h-5 w-5 max-w-none" />
                  </span>
                  <p className="text-eyebrow uppercase tracking-widest text-silver/60 font-display text-xs">
                    {t(item.label)}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-body text-primary font-display font-medium hover:text-gold transition-colors duration-base text-pretty"
                    >
                      {display}
                    </a>
                  ) : (
                    <span className="text-body text-primary font-display font-medium text-pretty">
                      {display}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

          <p className="text-sm text-silver/50 text-center mt-lg text-pretty">
            {t(contactCopy.contactAlternatives.responseTime)}
          </p>
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
