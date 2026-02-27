import { Play } from "lucide-react";
import { Show } from "@/data/shows";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkIcon, CategoryMovie, CategoryTV } from "./icons";

interface ShowCardProps {
  show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(show.id);

  return (
    <div className="group">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={show.thumbnail.regular.large}
          alt={show.title}
          className="w-full aspect-[7/5] object-cover"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex items-center gap-2 bg-foreground/25 rounded-full px-4 py-2 md:px-6 md:py-3">
            <Play className="w-5 h-5 md:w-7 md:h-7 text-foreground fill-foreground" />
            <span className="text-foreground text-sm md:text-lg font-medium">Play</span>
          </div>
        </div>
        {/* Bookmark button */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleBookmark(show.id); }}
          className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 rounded-full bg-background/50 hover:bg-foreground flex items-center justify-center transition-colors group/bm"
        >
          <BookmarkIcon filled={bookmarked} className="group-hover/bm:text-background" />
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
        <h3 className="text-sm md:text-lg font-medium text-foreground mt-1">{show.title}</h3>
      </div>
    </div>
  );
}
