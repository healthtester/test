
import { Lightbulb, Target, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Breadcrumbs from '@/components/common/breadcrumbs';

export default function DecisionSupportPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Decision Support' },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbItems} />
      <section className="text-center py-8 bg-card shadow-md rounded-lg">
        <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary">Decision Support Tools</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Empowering you with the right information at the right time to make informed health decisions.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Target className="mr-3 h-7 w-7 text-primary" />
            Our Goal: Enhancing Your Health Journey
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p className="text-foreground/90">
            The aim of our decision support features is to provide you with personalized knowledge and 
            information, intelligently filtered and presented at appropriate times. This helps you, 
            in collaboration with your healthcare providers, to enhance your health and healthcare outcomes.
          </p>
          <p className="text-muted-foreground">
            Inspired by principles from organizations like the Centers for Medicare & Medicaid Services (CMS), 
            we strive to deliver tools that simplify complex health information, help you understand your options, 
            and support you in creating actionable plans for your well-being.
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
            We are actively developing a suite of decision support tools, which may include:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/80">
            <li>Personalized health action plan creators.</li>
            <li>Information on treatment options and their implications.</li>
            <li>Tools to compare potential medications (under guidance of a professional).</li>
            <li>Interactive guides for managing chronic conditions.</li>
          </ul>
          <p className="text-sm text-primary font-semibold pt-2">
            Stay tuned as we roll out these features to further empower your health journey!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
