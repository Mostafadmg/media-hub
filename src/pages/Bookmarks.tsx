import { useState, useMemo } from "react";
import { shows } from "@/data/shows";
import { useBookmarks } from "@/context/BookmarkContext";
import { SearchBar } from "@/components/SearchBar";
import { ShowGrid } from "@/components/ShowGrid";

const Bookmarks = () => {
  const [search, setSearch] = useState("");
  const { isBookmarked } = useBookmarks();

  const bookmarkedShows = useMemo(() => shows.filter((s) => isBookmarked(s.id)), [isBookmarked]);

  const bookmarkedMovies = useMemo(() => bookmarkedShows.filter((s) => s.category === "Movie"), [bookmarkedShows]);
  const bookmarkedSeries = useMemo(() => bookmarkedShows.filter((s) => s.category === "TV Series"), [bookmarkedShows]);

  const filtered = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return bookmarkedShows.filter((s) => s.title.toLowerCase().includes(q));
  }, [search, bookmarkedShows]);

  return (
    <div className="space-y-6 md:space-y-10">
      <SearchBar placeholder="Search for bookmarked shows" value={search} onChange={setSearch} />

      {filtered ? (
        <div className="animate-fade-in">
          <p className="text-xl md:text-[32px] font-light text-foreground mb-6 animate-slide-up">
            Found {filtered.length} result{filtered.length !== 1 ? "s" : ""} for '{search}'
          </p>
          <ShowGrid shows={filtered} />
        </div>
      ) : (
        <>
          <ShowGrid shows={bookmarkedMovies} title="Bookmarked Movies" />
          <ShowGrid shows={bookmarkedSeries} title="Bookmarked TV Series" />
          {bookmarkedShows.length === 0 && (
            <div className="animate-fade-in text-center py-20">
              <p className="text-muted-foreground text-lg">No bookmarks yet. Start adding some!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Bookmarks;
