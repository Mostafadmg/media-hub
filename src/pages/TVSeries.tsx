import { useState, useMemo } from "react";
import { shows } from "@/data/shows";
import { SearchBar } from "@/components/SearchBar";
import { ShowGrid } from "@/components/ShowGrid";

const TVSeries = () => {
  const [search, setSearch] = useState("");
  const series = useMemo(() => shows.filter((s) => s.category === "TV Series"), []);

  const filtered = useMemo(() => {
    if (!search.trim()) return series;
    const q = search.toLowerCase();
    return series.filter((s) => s.title.toLowerCase().includes(q));
  }, [search, series]);

  return (
    <div className="space-y-6 md:space-y-10">
      <SearchBar placeholder="Search for TV series" value={search} onChange={setSearch} />
      {search.trim() ? (
        <div>
          <p className="text-xl md:text-[32px] font-light text-foreground mb-6">
            Found {filtered.length} result{filtered.length !== 1 ? "s" : ""} for '{search}'
          </p>
          <ShowGrid shows={filtered} />
        </div>
      ) : (
        <ShowGrid shows={filtered} title="TV Series" />
      )}
    </div>
  );
};

export default TVSeries;
