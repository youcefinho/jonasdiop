import { AlertCircle, Lock } from 'lucide-react';
import { type FormEvent, useId, useState } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { MaskRevealHeading } from '@/components/ui/MaskRevealHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface RevenueBucket {
  readonly value: string;
  readonly label: string;
}

interface EdgeApplicationFormShellProps {
  /** Eyebrow (déjà traduit). */
  readonly eyebrow: string;
  /** Headline H2 (déjà traduit). */
  readonly headline: string;
  /** Sous-titre court (déjà traduit). */
  readonly subtitle?: string;
  /** Bannière haut de form — ex. "Application examinée sous 48h après activation." */
  readonly banner: string;
  /** 5 buckets de revenus (déjà traduits côté parent). */
  readonly revenueBuckets: readonly RevenueBucket[];
  /** Labels formulaire (verbatim PDF Edge §15). */
  readonly labels: {
    readonly activity: string;
    readonly activityPlaceholder?: string;
    readonly revenue: string;
    readonly revenuePlaceholder?: string;
    readonly change: string;
    readonly changePlaceholder?: string;
    readonly why: string;
    readonly whyPlaceholder?: string;
    readonly name: string;
    readonly namePlaceholder?: string;
    readonly email: string;
    readonly emailPlaceholder?: string;
    readonly phone: string;
    readonly phonePlaceholder?: string;
    readonly submit: string;
    readonly notifyEmail: string;
    readonly notifyEmailPlaceholder: string;
    readonly notifySubmit: string;
    readonly notifySuccess: string;
    readonly required: string;
  };
  /** Optionnel — handler de la mini-form de notification (capture email).
   * Si fourni, on l'invoque ; sinon on simule succès local visuel. */
  readonly onNotifySubmit?: (email: string) => Promise<void> | void;
}

/**
 * EdgeApplicationFormShell — visuel placeholder application form pour /the-edge.
 *
 * Mode pré-lancement : backend GHL non câblé. Le form principal (4 champs +
 * coordonnées) est rendu en VISUEL DÉSACTIVÉ derrière un voile sobre — l'user
 * voit la structure complète mais ne peut rien soumettre. Le submit principal
 * est inactif (disabled, type=button, message clair).
 *
 * À côté, une mini-form "Sois notifié de l'activation" reste FONCTIONNELLE
 * pour capturer l'email — c'est l'unique action valide en pré-lancement,
 * cohérent §3.6 brief v3.
 *
 * Pas de fake submit success sur le gros form. Honnête.
 *
 * Style : dark luxe, accent gold uniquement sur la mini-form CTA + banner
 * icon. Le gros form garde un look premium mais explicitement "non actif".
 */
export function EdgeApplicationFormShell({
  eyebrow,
  headline,
  subtitle,
  banner,
  revenueBuckets,
  labels,
  onNotifySubmit
}: EdgeApplicationFormShellProps) {
  const ids = {
    activity: useId(),
    revenue: useId(),
    change: useId(),
    why: useId(),
    name: useId(),
    email: useId(),
    phone: useId(),
    notifyEmail: useId()
  };

  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifyState, setNotifyState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleNotify = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!notifyEmail || notifyState === 'submitting') return;
    setNotifyState('submitting');
    try {
      if (onNotifySubmit) {
        await onNotifySubmit(notifyEmail);
      }
      setNotifyState('success');
    } catch {
      setNotifyState('idle');
    }
  };

  const fieldBase =
    'w-full px-md py-sm rounded-md bg-base border border-silver/15 text-body text-primary font-display placeholder:text-silver/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60 transition-colors duration-base disabled:opacity-60 disabled:cursor-not-allowed';
  const labelBase =
    'flex flex-col gap-2 text-eyebrow uppercase tracking-widest text-silver font-display text-xs';

  return (
    <ScrollReveal>
      <section aria-label={headline} className="relative py-2xl bg-section-base">
        <div className="relative max-w-default mx-auto px-md">
          <div className="flex flex-col items-center text-center gap-sm mb-xl max-w-content mx-auto">
            <Eyebrow>{eyebrow}</Eyebrow>
            <MaskRevealHeading as="h2">{headline}</MaskRevealHeading>
            {subtitle ? (
              <p className="text-body-lg text-silver opacity-85 text-pretty max-w-[58ch]">
                {subtitle}
              </p>
            ) : null}
          </div>

          {/* Banner — top of form */}
          <div
            role="note"
            className="max-w-[44rem] mx-auto mb-md flex items-start gap-sm p-md rounded-lg border border-gold/25 bg-gold/5"
          >
            <AlertCircle
              className="h-5 w-5 max-w-none shrink-0 mt-0.5 text-gold/90"
              aria-hidden="true"
            />
            <p className="text-body text-primary opacity-90 text-pretty">{banner}</p>
          </div>

          <article className="max-w-[44rem] mx-auto bg-elevated border border-silver/20 rounded-lg overflow-hidden shadow-haptic-card">
            <form
              aria-label={headline}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-md p-md sm:p-lg"
            >
              <fieldset disabled className="flex flex-col gap-md border-0 p-0 m-0">
                <legend className="sr-only">
                  {headline} · {labels.required}
                </legend>
                <label htmlFor={ids.activity} className={labelBase}>
                  <span>
                    {labels.activity}
                    <span aria-hidden="true" className="text-gold/80 ml-1">
                      *
                    </span>
                  </span>
                  <textarea
                    id={ids.activity}
                    name="activity"
                    required
                    rows={3}
                    placeholder={labels.activityPlaceholder}
                    className={`${fieldBase} resize-y min-h-[5.5rem] normal-case tracking-normal`}
                  />
                </label>

                <label htmlFor={ids.revenue} className={labelBase}>
                  <span>
                    {labels.revenue}
                    <span aria-hidden="true" className="text-gold/80 ml-1">
                      *
                    </span>
                  </span>
                  <select
                    id={ids.revenue}
                    name="revenue"
                    required
                    defaultValue=""
                    className={`${fieldBase} normal-case tracking-normal`}
                  >
                    <option value="" disabled>
                      {labels.revenuePlaceholder ?? '—'}
                    </option>
                    {revenueBuckets.map((bucket) => (
                      <option key={bucket.value} value={bucket.value}>
                        {bucket.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor={ids.change} className={labelBase}>
                  <span>
                    {labels.change}
                    <span aria-hidden="true" className="text-gold/80 ml-1">
                      *
                    </span>
                  </span>
                  <textarea
                    id={ids.change}
                    name="change"
                    required
                    rows={3}
                    placeholder={labels.changePlaceholder}
                    className={`${fieldBase} resize-y min-h-[5.5rem] normal-case tracking-normal`}
                  />
                </label>

                <label htmlFor={ids.why} className={labelBase}>
                  <span>
                    {labels.why}
                    <span aria-hidden="true" className="text-gold/80 ml-1">
                      *
                    </span>
                  </span>
                  <textarea
                    id={ids.why}
                    name="why"
                    required
                    rows={3}
                    placeholder={labels.whyPlaceholder}
                    className={`${fieldBase} resize-y min-h-[5.5rem] normal-case tracking-normal`}
                  />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <label htmlFor={ids.name} className={labelBase}>
                    <span>
                      {labels.name}
                      <span aria-hidden="true" className="text-gold/80 ml-1">
                        *
                      </span>
                    </span>
                    <input
                      id={ids.name}
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={labels.namePlaceholder}
                      className={`${fieldBase} normal-case tracking-normal`}
                    />
                  </label>

                  <label htmlFor={ids.phone} className={labelBase}>
                    <span>{labels.phone}</span>
                    <input
                      id={ids.phone}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={labels.phonePlaceholder}
                      className={`${fieldBase} normal-case tracking-normal`}
                    />
                  </label>
                </div>

                <label htmlFor={ids.email} className={labelBase}>
                  <span>
                    {labels.email}
                    <span aria-hidden="true" className="text-gold/80 ml-1">
                      *
                    </span>
                  </span>
                  <input
                    id={ids.email}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={labels.emailPlaceholder}
                    className={`${fieldBase} normal-case tracking-normal`}
                  />
                </label>
              </fieldset>

              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex items-center justify-center gap-2 rounded-pill px-md py-[0.75rem] text-eyebrow uppercase tracking-wider font-display bg-base border border-silver/20 text-silver/55 cursor-not-allowed"
              >
                <Lock className="h-4 w-4 max-w-none shrink-0" aria-hidden="true" />
                <span className="text-pretty normal-case tracking-normal text-sm">
                  {labels.submit}
                </span>
              </button>
            </form>
          </article>

          {/* Mini-form notification — la SEULE action active en pré-lancement */}
          <form
            onSubmit={handleNotify}
            aria-label={labels.notifyEmail}
            className="max-w-[44rem] mx-auto mt-md p-md rounded-lg border border-gold/25 bg-elevated shadow-haptic-card flex flex-col gap-sm"
          >
            <label
              htmlFor={ids.notifyEmail}
              className="text-eyebrow uppercase tracking-widest text-gold/80 font-display text-xs"
            >
              {labels.notifyEmail}
            </label>
            {notifyState === 'success' ? (
              <p
                role="status"
                aria-live="polite"
                className="text-body text-primary opacity-90 text-pretty"
              >
                {labels.notifySuccess}
              </p>
            ) : (
              <div className="flex flex-col sm:flex-row gap-sm">
                <input
                  id={ids.notifyEmail}
                  type="email"
                  required
                  autoComplete="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder={labels.notifyEmailPlaceholder}
                  className={`${fieldBase} flex-1 normal-case tracking-normal`}
                />
                <button
                  type="submit"
                  disabled={notifyState === 'submitting' || !notifyEmail}
                  className="relative isolate shrink-0 inline-flex items-center justify-center gap-2 rounded-pill px-md py-[0.65rem] text-eyebrow uppercase tracking-wider font-display transition-all duration-base bg-[linear-gradient(180deg,oklch(0.86_0.085_75)_0%,oklch(0.66_0.085_75)_100%)] text-base shadow-haptic-card hover:scale-[1.02] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>{labels.notifySubmit}</span>
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </ScrollReveal>
  );
}
