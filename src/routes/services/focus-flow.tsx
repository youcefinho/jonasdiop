import { createFileRoute } from '@tanstack/react-router';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { focusFlowCopy } from '@/data/copy/services-focus-flow';

function FocusFlowPage() {
  return <LPProgramTemplate copy={focusFlowCopy} />;
}

export const Route = createFileRoute('/services/focus-flow')({
  component: FocusFlowPage
});
