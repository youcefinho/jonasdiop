import { createFileRoute } from '@tanstack/react-router';
import { LPConsultationsTemplate } from '@/components/sections/LPConsultationsTemplate';
import { consultationsPriveesCopy } from '@/data/copy/services-consultations-privees';

function PrivateConsultationsENPage() {
  return <LPConsultationsTemplate copy={consultationsPriveesCopy} ctaVariant="gold-primary" />;
}

export const Route = createFileRoute('/en/services/private-consultations')({
  component: PrivateConsultationsENPage
});
