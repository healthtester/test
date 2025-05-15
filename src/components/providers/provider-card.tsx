import Link from 'next/link';
import Image from 'next/image';
import type { Provider } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Star, BriefcaseMedical } from 'lucide-react';

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="relative">
        <Image
          src={provider.profilePictureUrl}
          alt={`Photo of ${provider.name}`}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
          data-ai-hint="doctor profile"
        />
        <CardTitle className="mt-4 text-xl font-semibold">{provider.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-muted-foreground">
          <BriefcaseMedical className="mr-2 h-5 w-5 text-primary" />
          <span>{provider.specialty}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="mr-2 h-5 w-5 text-primary" />
          <span>{provider.city}, {provider.state}</span>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < Math.round(provider.overallRating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">({provider.reviews.length} reviews)</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/providers/${provider.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
