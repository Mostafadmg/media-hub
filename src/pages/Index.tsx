import { useState, useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { TrendingCarousel } from "@/components/TrendingCarousel";
import { ShowGrid } from "@/components/ShowGrid";
import { ShowGridSkeleton, TrendingCarouselSkeleton } from "@/components/Skeletons";
import { useTrending, useRecommended, useSearch } from "@/hooks/useTMDB";

const Index = () => {
  const [search, setSearch] = useState("");
  const { data: trending, isLoading: trendingLoading } = useTrending();
  const { data: recommended, isLoading: recommendedLoading } = useRecommended();
  const { data: searchResults, isLoading: searchLoading } = useSearch(search);

  const isSearching = search.trim().length > 0;

  return (
    <div className="space-y-6 md:space-y-10">
      <SearchBar placeholder="Search for movies or TV series" value={search} onChange={setSearch} />

      {isSearching ? (
        <div className="animate-fade-in">
          {searchLoading ? (
            <ShowGridSkeleton count={8} />
          ) : (
            <>
              <p className="text-xl md:text-[32px] font-light text-foreground mb-6 animate-slide-up">
                Found {searchResults?.length ?? 0} result{(searchResults?.length ?? 0) !== 1 ? "s" : ""} for '{search}'
              </p>
              <ShowGrid shows={searchResults ?? []} />
            </>
          )}
        </div>
      ) : (
        <>
          {/* Trending */}
          <section className="animate-fade-in">
            <h2 className="text-xl md:text-[32px] font-light text-foreground mb-4 md:mb-6">Trending</h2>
            {trendingLoading ? <TrendingCarouselSkeleton /> : <TrendingCarousel shows={trending ?? []} />}
          </section>

          {/* Recommended */}
          <section className="animate-fade-in">
            <h2 className="text-xl md:text-[32px] font-light text-foreground mb-4 md:mb-6">Recommended for you</h2>
            {recommendedLoading ? <ShowGridSkeleton count={16} /> : <ShowGrid shows={recommended ?? []} />}
          </section>
        </>
      )}
    </div>
  );
};

export default Index;
