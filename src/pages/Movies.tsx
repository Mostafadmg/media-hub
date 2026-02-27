import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ShowGrid } from "@/components/ShowGrid";
import { ShowGridSkeleton } from "@/components/Skeletons";
import { useTopMovies, useSearch } from "@/hooks/useTMDB";

const Movies = () => {
  const [search, setSearch] = useState("");
  const { data: movies, isLoading } = useTopMovies();
  const { data: searchResults, isLoading: searchLoading } = useSearch(search);

  const isSearching = search.trim().length > 0;
  // Filter search results to movies only
  const filteredSearch = searchResults?.filter((s) => s.category === "Movie") ?? [];

  return (
    <div className="space-y-6 md:space-y-10">
      <SearchBar placeholder="Search for movies" value={search} onChange={setSearch} />

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
        <ShowGrid shows={movies ?? []} title="Movies" />
      )}
    </div>
  );
};

export default Movies;
