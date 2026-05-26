import { createFileRoute } from '@tanstack/react-router';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { masterClosingCopy } from '@/data/copy/services-master-closing';

function MasterClosingENPage() {
  return <LPProgramTemplate copy={masterClosingCopy} />;
}

export const Route = createFileRoute('/en/services/master-closing')({
  component: MasterClosingENPage
});
