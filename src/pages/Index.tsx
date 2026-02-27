import { useState, useMemo } from "react";
import { shows } from "@/data/shows";
import { SearchBar } from "@/components/SearchBar";
import { TrendingCard } from "@/components/TrendingCard";
import { ShowGrid } from "@/components/ShowGrid";

const Index = () => {
  const [search, setSearch] = useState("");
  const trending = useMemo(() => shows.filter((s) => s.isTrending), []);
  const recommended = useMemo(() => shows.filter((s) => !s.isTrending), []);

  const filtered = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return shows.filter((s) => s.title.toLowerCase().includes(q));
  }, [search]);

  return (
    <div className="space-y-6 md:space-y-10">
      <SearchBar placeholder="Search for movies or TV series" value={search} onChange={setSearch} />

      {filtered ? (
        <div>
          <p className="text-xl md:text-[32px] font-light text-foreground mb-6">
            Found {filtered.length} result{filtered.length !== 1 ? "s" : ""} for '{search}'
          </p>
          <ShowGrid shows={filtered} />
        </div>
      ) : (
        <>
          {/* Trending */}
          <section>
            <h2 className="text-xl md:text-[32px] font-light text-foreground mb-4 md:mb-6">Trending</h2>
            <div className="flex gap-4 md:gap-10 overflow-x-auto pb-4 scrollbar-hide">
              {trending.map((show) => (
                <TrendingCard key={show.id} show={show} />
              ))}
            </div>
          </section>

          {/* Recommended */}
          <ShowGrid shows={recommended} title="Recommended for you" />
        </>
      )}
    </div>
  );
};

export default Index;
