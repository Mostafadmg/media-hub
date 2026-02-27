import { useState, useMemo } from "react";
import { shows } from "@/data/shows";
import { SearchBar } from "@/components/SearchBar";
import { ShowGrid } from "@/components/ShowGrid";

const Movies = () => {
  const [search, setSearch] = useState("");
  const movies = useMemo(() => shows.filter((s) => s.category === "Movie"), []);

  const filtered = useMemo(() => {
    if (!search.trim()) return movies;
    const q = search.toLowerCase();
    return movies.filter((s) => s.title.toLowerCase().includes(q));
  }, [search, movies]);

  return (
    <div className="space-y-6 md:space-y-10">
      <SearchBar placeholder="Search for movies" value={search} onChange={setSearch} />
      {search.trim() ? (
        <div>
          <p className="text-xl md:text-[32px] font-light text-foreground mb-6">
            Found {filtered.length} result{filtered.length !== 1 ? "s" : ""} for '{search}'
          </p>
          <ShowGrid shows={filtered} />
        </div>
      ) : (
        <ShowGrid shows={filtered} title="Movies" />
      )}
    </div>
  );
};

export default Movies;
