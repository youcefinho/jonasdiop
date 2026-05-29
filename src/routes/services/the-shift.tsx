import { createFileRoute } from '@tanstack/react-router';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { theShiftCopy } from '@/data/copy/services-the-shift';

function TheShiftPage() {
  return <LPProgramTemplate copy={theShiftCopy} routeKey="services-the-shift" />;
}

export const Route = createFileRoute('/services/the-shift')({
  component: TheShiftPage
});
