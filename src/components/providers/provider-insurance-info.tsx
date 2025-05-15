import type { Provider } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck } from 'lucide-react';

interface ProviderInsuranceInfoProps {
  provider: Provider;
}

export default function ProviderInsuranceInfo({ provider }: ProviderInsuranceInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
          Accepted Insurance Plans
        </CardTitle>
      </CardHeader>
      <CardContent>
        {provider.acceptedInsurancePlans.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {provider.acceptedInsurancePlans.map((plan, index) => (
              <Badge key={index} variant="default" className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                {plan}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Information on accepted insurance plans is not available. Please contact the provider directly.</p>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          It's always recommended to confirm coverage with your insurance provider and the clinic before scheduling an appointment.
        </p>
      </CardContent>
    </Card>
  );
}
