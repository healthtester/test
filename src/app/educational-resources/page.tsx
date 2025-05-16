
import { BookOpenCheck, Info, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Breadcrumbs from '@/components/common/breadcrumbs';

export default function EducationalResourcesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Educational Resources' },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbItems} />
      <section className="text-center py-8 bg-card shadow-md rounded-lg">
        <BookOpenCheck className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary">Educational Resources</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Access relevant, evidence-based information and tools to manage your health effectively.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Info className="mr-3 h-7 w-7 text-primary" />
            Knowledge is Power
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p className="text-foreground/90">
            My Health Navigator is committed to providing you with high-quality educational materials. 
            We believe that understanding your health conditions, treatment options, and preventive care 
            is crucial for making informed decisions and achieving better health outcomes.
          </p>
          <p className="text-muted-foreground">
            Our resources will be curated to ensure they are evidence-based, easy to understand, and 
            relevant to your needs.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-secondary/50 border-primary/30 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <MessageCircle className="mr-3 h-6 w-6 text-primary" />
            What to Expect (Coming Soon)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground">
            We are developing a range of educational features, which may include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/80">
            <li>A library of articles and guides on various health topics and conditions.</li>
            <li>Information on understanding medical tests and lab results.</li>
            <li>Tips for healthy living, nutrition, and exercise.</li>
            <li>Tools for communication between patients and providers to discuss educational materials.</li>
          </ul>
          <p className="text-sm text-primary font-semibold pt-2">
            Stay informed and empowered with My Health Navigator!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
