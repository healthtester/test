import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProviderById } from '@/data/mock-data';
import Breadcrumbs from '@/components/common/breadcrumbs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProviderDetailsOverview from '@/components/providers/provider-details-overview';
import ProviderServicesCosts from '@/components/providers/provider-services-costs';
import ProviderInsuranceInfo from '@/components/providers/provider-insurance-info';
import ProviderReviews from '@/components/providers/provider-reviews';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MapPin, Phone, Globe, Star, BriefcaseMedical } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProviderProfilePageProps {
  params: { id: string };
}

export default function ProviderProfilePage({ params }: ProviderProfilePageProps) {
  const provider = getProviderById(params.id);

  if (!provider) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Providers', href: '/' },
    { label: provider.name },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbItems} />

      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 p-0">
          <div className="relative h-48 md:h-64 w-full">
             <Image
                src={provider.profilePictureUrl.replace("300x300", "1200x400")} // Use a wider placeholder for banner
                alt={`${provider.name} - Clinic or Banner`}
                layout="fill"
                objectFit="cover"
                data-ai-hint="clinic building"
             />
             <div className="absolute inset-0 bg-black/30" /> {/* Overlay for text contrast */}
          </div>
        </CardHeader>
        <CardContent className="p-6 relative -mt-16 md:-mt-24">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <Image
              src={provider.profilePictureUrl}
              alt={`Profile of ${provider.name}`}
              width={160}
              height={160}
              className="rounded-full border-4 border-card object-cover aspect-square shadow-lg"
              data-ai-hint="doctor profile"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{provider.name}</h1>
              <div className="flex items-center justify-center md:justify-start text-muted-foreground mt-1">
                <BriefcaseMedical className="mr-2 h-5 w-5 text-primary" />
                <span>{provider.specialty}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${i < Math.round(provider.overallRating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`}
                  />
                ))}
                <span className="ml-2 text-lg text-foreground font-semibold">{provider.overallRating.toFixed(1)}</span>
                <span className="ml-1 text-sm text-muted-foreground">({provider.reviews.length} reviews)</span>
              </div>
            </div>
            <Button size="lg" className="mt-4 md:mt-0">Request Appointment</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t">
            <div className="flex items-center text-foreground/90">
              <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
              <span>{provider.location}</span>
            </div>
            <div className="flex items-center text-foreground/90">
              <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
              <a href={`tel:${provider.phoneNumber}`} className="hover:underline">{provider.phoneNumber}</a>
            </div>
            {provider.website && (
              <div className="flex items-center text-foreground/90">
                <Globe className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href={provider.website} target="_blank" rel="noopener noreferrer" className="hover:underline truncate">
                  {provider.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services & Costs</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <ProviderDetailsOverview provider={provider} />
        </TabsContent>
        <TabsContent value="services">
          <ProviderServicesCosts provider={provider} />
        </TabsContent>
        <TabsContent value="insurance">
          <ProviderInsuranceInfo provider={provider} />
        </TabsContent>
        <TabsContent value="reviews">
          <ProviderReviews provider={provider} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Generate static paths for mock providers
export async function generateStaticParams() {
  const { mockProviders } = await import('@/data/mock-data');
  return mockProviders.map((provider) => ({
    id: provider.id,
  }));
}
