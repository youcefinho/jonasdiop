import { createFileRoute } from '@tanstack/react-router';
import { LPProgramTemplate } from '@/components/sections/LPProgramTemplate';
import { gamechangerScalingCopy } from '@/data/copy/services-gamechanger-scaling';

function GamechangerScalingENPage() {
  return (
    <LPProgramTemplate copy={gamechangerScalingCopy} routeKey="services-gamechanger-scaling" />
  );
}

export const Route = createFileRoute('/en/services/gamechanger-scaling')({
  component: GamechangerScalingENPage
});
