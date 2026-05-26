import { createFileRoute } from '@tanstack/react-router';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { cashScaleCopy } from '@/data/copy/services-cash-scale';

function CashScaleENPage() {
  return <LPProgramTemplate copy={cashScaleCopy} />;
}

export const Route = createFileRoute('/en/services/cash-scale')({
  component: CashScaleENPage
});
