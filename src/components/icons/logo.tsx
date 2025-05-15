import type { SVGProps } from 'react';
import { HeartPulse } from 'lucide-react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return <HeartPulse {...props} />;
}
