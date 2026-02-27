import { Play } from "lucide-react";
import { Show } from "@/data/shows";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkIcon, CategoryMovie, CategoryTV } from "./icons";
import { useState } from "react";

interface ShowCardProps {
  show: Show;
  index?: number;
}

export function ShowCard({ show, index = 0 }: ShowCardProps) {
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
      className="group animate-card-appear"
      style={{ animationDelay: `${Math.min(index * 50, 400)}ms` }}
    >
      <div className="relative rounded-lg overflow-hidden cursor-pointer">
        <img
          src={show.thumbnail.regular.large}
          alt={show.title}
          className="w-full aspect-[7/5] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.parentElement?.querySelector(".img-fallback") as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div className="img-fallback hidden absolute inset-0 bg-gradient-to-br from-muted to-card aspect-[7/5] items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 6 4-6 4Z"/></svg>
            <span className="text-xs font-medium">{show.title}</span>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 bg-foreground/25 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 scale-75 group-hover:scale-100 transition-transform duration-300 ease-out">
            <Play className="w-5 h-5 md:w-7 md:h-7 text-foreground fill-foreground" />
            <span className="text-foreground text-sm md:text-lg font-medium">Play</span>
          </div>
        </div>
        {/* Bookmark button */}
        <button
          onClick={handleBookmark}
          className={`absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 rounded-full bg-background/50 hover:bg-foreground flex items-center justify-center transition-all duration-200 group/bm ${justToggled ? "animate-bookmark-pop" : ""}`}
        >
          <BookmarkIcon filled={bookmarked} className="transition-colors duration-200 group-hover/bm:text-background" />
        </button>
      </div>
      {/* Info */}
      <div className="mt-2">
        <div className="flex items-center gap-1.5 text-[11px] md:text-[13px] text-muted-foreground">
          <span>{show.year}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            {show.category === "Movie" ? <CategoryMovie /> : <CategoryTV />}
            {show.category}
          </span>
          <span>•</span>
          <span>{show.rating}</span>
        </div>
        <h3 className="text-sm md:text-lg font-medium text-foreground mt-1 transition-colors duration-200 group-hover:text-primary">{show.title}</h3>
      </div>
    </div>
  );
}
