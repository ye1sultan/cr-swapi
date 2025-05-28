'use client';

import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Skeleton } from '@/src/components/ui/skeleton';

interface IPeopleSkeletonProps {
  count: number;
}

export function PeopleSkeleton({ count }: IPeopleSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <Card key={idx}>
          <CardHeader>
            <Skeleton className="h-6 w-3/4 rounded-md" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
