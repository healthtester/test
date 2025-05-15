import type { Provider } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign, ListChecks } from 'lucide-react';

interface ProviderServicesCostsProps {
  provider: Provider;
}

export default function ProviderServicesCosts({ provider }: ProviderServicesCostsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <DollarSign className="mr-2 h-6 w-6 text-primary" />
            Services & Cost Estimates
          </CardTitle>
        </CardHeader>
        <CardContent>
          {provider.costInformation.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service / Procedure</TableHead>
                  <TableHead className="text-right">Estimated Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {provider.costInformation.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.procedure}</TableCell>
                    <TableCell className="text-right">{item.costEstimate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground">Cost information is not available for this provider.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <ListChecks className="mr-2 h-6 w-6 text-primary" />
            Quality Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          {provider.qualityMetrics.length > 0 ? (
            <ul className="space-y-3">
              {provider.qualityMetrics.map((metric, index) => (
                <li key={index} className="p-3 bg-secondary/50 rounded-md">
                  <p className="font-semibold">{metric.metric}: <span className="font-normal text-primary">{metric.value}</span></p>
                  {metric.benchmark && <p className="text-sm text-muted-foreground">Benchmark: {metric.benchmark}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">Quality metrics are not available for this provider.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
