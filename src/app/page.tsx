
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, UserCog, Lightbulb, BookOpenCheck, Search } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center text-center space-y-10">
      <section className="space-y-4 mt-8">
        <h1 className="text-5xl font-bold text-primary">Welcome to My Health Navigator</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your comprehensive guide to accessing patient data, making informed decisions, and improving your health journey.
        </p>
      </section>

      <Image
        src="https://placehold.co/700x350.png"
        alt="Person interacting with a health dashboard"
        width={700}
        height={350}
        className="rounded-lg shadow-xl object-cover"
        data-ai-hint="health dashboard user"
        priority
      />

      <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow !text-lg !py-6 !px-8">
        <Link href="/directory">
          Explore Providers
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>

      <section className="w-full max-w-5xl pt-10 pb-8">
        <h2 className="text-3xl font-semibold text-center mb-10 text-foreground">Key Features to Empower You</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center pt-6">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <UserCog className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl">Personalized Insights</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-muted-foreground">Securely connect with your health data for a tailored experience and insights.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center pt-6">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Lightbulb className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl">Decision Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-muted-foreground">Utilize tools to create action plans and understand treatment options.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center pt-6">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <BookOpenCheck className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl">Educational Resources</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-muted-foreground">Access relevant, evidence-based information to manage your health effectively.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">Still looking for a healthcare provider?</p>
             <Button asChild variant="link" className="text-lg text-primary">
                <Link href="/directory">
                    Search Our Provider Directory <Search className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}

