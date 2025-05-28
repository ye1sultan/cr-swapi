import { Skeleton } from '@/src/components/ui/skeleton';

export function PersonModalSkeleton() {
  return (
    <>
      <Skeleton className="mb-4 h-[200px] w-full rounded-lg" />
      <Skeleton className="mb-2 h-6 w-1/2" /> {/* Title */}
      <div className="mt-2 flex w-full flex-col gap-2">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/5" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-2/4" />
      </div>
    </>
  );
}
