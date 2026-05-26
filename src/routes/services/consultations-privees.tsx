import { createFileRoute } from '@tanstack/react-router';
import { LPConsultationsTemplate } from '@/components/sections/LPConsultationsTemplate';
import { consultationsPriveesCopy } from '@/data/copy/services-consultations-privees';

function ConsultationsPriveesPage() {
  return <LPConsultationsTemplate copy={consultationsPriveesCopy} ctaVariant="gold-primary" />;
}

export const Route = createFileRoute('/services/consultations-privees')({
  component: ConsultationsPriveesPage
});
