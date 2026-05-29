import { createFileRoute } from '@tanstack/react-router';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { cashScaleCopy } from '@/data/copy/services-cash-scale';

function CashScalePage() {
  return <LPProgramTemplate copy={cashScaleCopy} routeKey="services-cash-scale" />;
}

export const Route = createFileRoute('/services/cash-scale')({
  component: CashScalePage
});
