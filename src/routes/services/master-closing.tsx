import { createFileRoute } from '@tanstack/react-router';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { masterClosingCopy } from '@/data/copy/services-master-closing';

function MasterClosingPage() {
  return <LPProgramTemplate copy={masterClosingCopy} routeKey="services-master-closing" />;
}

export const Route = createFileRoute('/services/master-closing')({
  component: MasterClosingPage
});
