import { Play } from "lucide-react";
import { Show } from "@/data/shows";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkIcon, CategoryMovie, CategoryTV } from "./icons";
import { useState } from "react";

interface TrendingCardProps {
  show: Show;
  index?: number;
}

export function TrendingCard({ show, index = 0 }: TrendingCardProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(show.id);
  const [justToggled, setJustToggled] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(show.id);
    setJustToggled(true);
    setTimeout(() => setJustToggled(false), 300);
  };

  return (
    <div
      className="group relative flex-shrink-0 w-[240px] md:w-[470px] rounded-lg overflow-hidden cursor-pointer animate-fade-in"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
    >
      <img
        src={show.thumbnail.trending?.large || show.thumbnail.regular.large}
        alt={show.title}
        className="w-full aspect-[2/1] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const fallback = target.parentElement?.querySelector(".img-fallback") as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="img-fallback hidden absolute inset-0 bg-gradient-to-br from-muted to-card aspect-[2/1] items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 6 4-6 4Z"/></svg>
          <span className="text-sm font-medium">{show.title}</span>
        </div>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <div className="flex items-center gap-2 bg-foreground/25 backdrop-blur-sm rounded-full px-6 py-3 scale-75 group-hover:scale-100 transition-transform duration-300 ease-out">
          <Play className="w-7 h-7 text-foreground fill-foreground" />
          <span className="text-foreground text-lg font-medium">Play</span>
        </div>
      </div>
      {/* Bookmark */}
      <button
        onClick={handleBookmark}
        className={`absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 rounded-full bg-background/50 hover:bg-foreground flex items-center justify-center transition-all duration-200 group/bm ${justToggled ? "animate-bookmark-pop" : ""}`}
      >
        <BookmarkIcon filled={bookmarked} className="transition-colors duration-200 group-hover/bm:text-background" />
      </button>
      {/* Bottom info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 via-background/40 to-transparent transition-opacity duration-300">
        <div className="flex items-center gap-1.5 text-[12px] md:text-[15px] text-foreground/75">
          <span>{show.year}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            {show.category === "Movie" ? <CategoryMovie /> : <CategoryTV />}
            {show.category}
          </span>
          <span>•</span>
          <span>{show.rating}</span>
        </div>
        <h3 className="text-sm md:text-2xl font-medium text-foreground">{show.title}</h3>
      </div>
    </div>
  );
}
