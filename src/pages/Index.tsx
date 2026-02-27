import { useState, useMemo } from "react";
import { shows } from "@/data/shows";
import { SearchBar } from "@/components/SearchBar";
import { TrendingCarousel } from "@/components/TrendingCarousel";
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
        <div className="animate-fade-in">
          <p className="text-xl md:text-[32px] font-light text-foreground mb-6 animate-slide-up">
            Found {filtered.length} result{filtered.length !== 1 ? "s" : ""} for '{search}'
          </p>
          <ShowGrid shows={filtered} />
        </div>
      ) : (
        <>
          {/* Trending */}
          <section className="animate-fade-in">
            <h2 className="text-xl md:text-[32px] font-light text-foreground mb-4 md:mb-6">Trending</h2>
            <TrendingCarousel shows={trending} />
          </section>

          {/* Recommended */}
          <ShowGrid shows={recommended} title="Recommended for you" />
        </>
      )}
    </div>
  );
};

export default Index;
