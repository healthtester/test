
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, UserCheck, DollarSign } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center text-center space-y-10">
      <section className="space-y-4 mt-8">
        <h1 className="text-5xl font-bold text-primary">Welcome to Healthcare Marketplace</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your trusted partner in finding quality healthcare. Easily search, compare, and connect with providers that meet your needs.
        </p>
      </section>

      <Image
        src="https://placehold.co/700x350.png"
        alt="Healthcare professionals collaborating"
        width={700}
        height={350}
        className="rounded-lg shadow-xl object-cover"
        data-ai-hint="healthcare team"
        priority // Good for LCP on a welcome page
      />

      <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow !text-lg !py-6 !px-8">
        <Link href="/directory">
          Find Your Provider
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>

      <section className="w-full max-w-5xl pt-10 pb-8">
        <h2 className="text-3xl font-semibold text-center mb-10 text-foreground">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center pt-6">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Search className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl">Easy Search</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-muted-foreground">Quickly find providers by specialty, location, and insurance coverage.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center pt-6">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <UserCheck className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl">Verified Profiles</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-muted-foreground">Access detailed and trustworthy information about healthcare professionals.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center pt-6">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <DollarSign className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl">Transparent Info</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-muted-foreground">Gain insights into services, costs, and quality metrics for informed decisions.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
