import { createFileRoute } from '@tanstack/react-router';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { focusFlowCopy } from '@/data/copy/services-focus-flow';

function FocusFlowENPage() {
  return <LPProgramTemplate copy={focusFlowCopy} />;
}

export const Route = createFileRoute('/en/services/focus-flow')({
  component: FocusFlowENPage
});
