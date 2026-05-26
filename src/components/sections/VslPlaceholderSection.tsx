import { PlayCircle } from 'lucide-react';
import { FiligraneNumber } from '@/components/ui/FiligraneNumber';
import { useT } from '@/lib/i18n/useT';

interface VslPlaceholderSectionProps {
  id: string;
}

/**
 * Placeholder section for VSL embed (real embed Sprint 2).
 * Serves as anchor target for ScrollCue and CTA secondary smooth-scroll.
 * 16:9 dark card, border silver-subtle, play icon center.
 */
export function VslPlaceholderSection({ id }: VslPlaceholderSectionProps) {
  const { t } = useT();
  return (
    <section
      id={id}
      className="relative min-h-[60vh] flex items-center justify-center px-md py-2xl bg-base"
      aria-label={t({ fr: 'Vidéo méthodologie', en: 'Methodology video' })}
    >
      <FiligraneNumber number="03" position="right" />
      <div className="relative aspect-video w-full max-w-content bg-elevated border border-silver/15 rounded-lg flex flex-col items-center justify-center gap-md text-silver/60">
        <PlayCircle className="h-12 w-12" aria-hidden="true" />
        <p className="text-eyebrow uppercase tracking-widest font-display">
          {t({ fr: 'VSL bientôt disponible', en: 'VSL coming soon' })}
        </p>
      </div>
    </section>
  );
}
