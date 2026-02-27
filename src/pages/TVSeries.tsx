import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ShowGrid } from "@/components/ShowGrid";
import { ShowGridSkeleton } from "@/components/Skeletons";
import { useTopTVSeries, useSearch } from "@/hooks/useTMDB";

const TVSeries = () => {
  const [search, setSearch] = useState("");
  const { data: series, isLoading } = useTopTVSeries();
  const { data: searchResults, isLoading: searchLoading } = useSearch(search);

  const isSearching = search.trim().length > 0;
  const filteredSearch = searchResults?.filter((s) => s.category === "TV Series") ?? [];

  return (
    <div className="space-y-6 md:space-y-10">
      <SearchBar placeholder="Search for TV series" value={search} onChange={setSearch} />

      {isSearching ? (
        <div className="animate-fade-in">
          {searchLoading ? (
            <ShowGridSkeleton />
          ) : (
            <>
              <p className="text-xl md:text-[32px] font-light text-foreground mb-6">
                Found {filteredSearch.length} result{filteredSearch.length !== 1 ? "s" : ""} for '{search}'
              </p>
              <ShowGrid shows={filteredSearch} />
            </>
          )}
        </div>
      ) : isLoading ? (
        <ShowGridSkeleton count={16} />
      ) : (
        <ShowGrid shows={series ?? []} title="TV Series" />
      )}
    </div>
  );
};

export default TVSeries;
