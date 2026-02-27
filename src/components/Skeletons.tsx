export function ShowCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="rounded-lg bg-card aspect-[7/5] w-full" />
      <div className="mt-2 space-y-2">
        <div className="flex gap-2">
          <div className="h-3 w-8 bg-card rounded" />
          <div className="h-3 w-12 bg-card rounded" />
          <div className="h-3 w-6 bg-card rounded" />
        </div>
        <div className="h-4 w-3/4 bg-card rounded" />
      </div>
    </div>
  );
}

export function TrendingCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-[240px] md:w-[470px] animate-pulse">
      <div className="rounded-lg bg-card aspect-[2/1] w-full" />
    </div>
  );
}

export function ShowGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10">
      {Array.from({ length: count }).map((_, i) => (
        <ShowCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function TrendingCarouselSkeleton() {
  return (
    <div className="flex gap-4 md:gap-6 overflow-hidden py-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <TrendingCardSkeleton key={i} />
      ))}
    </div>
  );
}
