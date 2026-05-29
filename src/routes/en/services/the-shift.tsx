import { createFileRoute } from '@tanstack/react-router';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { theShiftCopy } from '@/data/copy/services-the-shift';

function TheShiftENPage() {
  return <LPProgramTemplate copy={theShiftCopy} routeKey="services-the-shift" />;
}

export const Route = createFileRoute('/en/services/the-shift')({
  component: TheShiftENPage
});
