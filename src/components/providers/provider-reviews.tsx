import type { Provider, Review as ReviewType } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MessageSquare, User } from 'lucide-react';
import { format } from 'date-fns';

interface ProviderReviewsProps {
  provider: Provider;
}

function ReviewCard({ review }: { review: ReviewType }) {
  return (
    <Card className="bg-background shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={`https://placehold.co/40x40.png?text=${review.reviewerName.substring(0,1)}`} alt={review.reviewerName} data-ai-hint="person avatar" />
            <AvatarFallback>{review.reviewerName.substring(0, 1).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{review.reviewerName}</p>
            <p className="text-xs text-muted-foreground">
              {format(new Date(review.date), 'MMMM d, yyyy')}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 leading-relaxed">{review.comment}</p>
      </CardContent>
    </Card>
  );
}

export default function ProviderReviews({ provider }: ProviderReviewsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <MessageSquare className="mr-2 h-6 w-6 text-primary" />
          Patient Reviews & Ratings
        </CardTitle>
        <div className="flex items-center mt-2">
          <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-2xl font-bold text-foreground">{provider.overallRating.toFixed(1)}</span>
          <span className="ml-2 text-muted-foreground">({provider.reviews.length} reviews)</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {provider.reviews.length > 0 ? (
          provider.reviews.map(review => <ReviewCard key={review.id} review={review} />)
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <User className="mx-auto h-12 w-12 mb-2" />
            <p>No reviews yet for {provider.name}.</p>
            <p className="text-sm">Be the first to share your experience!</p>
          </div>
        )}
        {/* Add Review Button/Form can be added here in future */}
      </CardContent>
    </Card>
  );
}
