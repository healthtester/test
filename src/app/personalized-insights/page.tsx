
import { UserCog, Info, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Breadcrumbs from '@/components/common/breadcrumbs';

export default function PersonalizedInsightsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Personalized Insights' },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbItems} />
      <section className="text-center py-8 bg-card shadow-md rounded-lg">
        <UserCog className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary">Personalized Health Insights</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Leveraging your unique health data to provide tailored guidance and understanding.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <ShieldCheck className="mr-3 h-7 w-7 text-primary" />
            Your Data, Your Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p className="text-foreground/90">
            My Health Navigator aims to securely integrate with your existing health records and data sources. 
            By understanding your specific health profile, we can offer personalized insights, track progress 
            towards your health goals, and highlight information that is most relevant to you.
          </p>
          <p className="text-muted-foreground">
            Imagine having a clear view of your health trends, understanding what your data means, and receiving 
            proactive suggestions based on your individual needs. That's the power of personalized insights.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-secondary/50 border-primary/30 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Info className="mr-3 h-6 w-6 text-primary" />
            What to Expect (Coming Soon)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground">
            We are working on features that will allow you to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/80">
            <li>Securely connect various health data sources (e.g., patient portals, wearables).</li>
            <li>View personalized dashboards summarizing your key health metrics.</li>
            <li>Receive tailored educational content based on your conditions or goals.</li>
            <li>Track your progress and identify areas for improvement.</li>
          </ul>
          <p className="text-sm text-primary font-semibold pt-2">
            Our commitment is to your privacy and data security. All data integration will be handled with the utmost care.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
