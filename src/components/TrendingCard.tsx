import { Play } from "lucide-react";
import { Show } from "@/data/shows";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkIcon, CategoryMovie, CategoryTV } from "./icons";

interface TrendingCardProps {
  show: Show;
}

export function TrendingCard({ show }: TrendingCardProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(show.id);

  return (
    <div className="group relative flex-shrink-0 w-[240px] md:w-[470px] rounded-lg overflow-hidden">
      <img
        src={show.thumbnail.trending?.large || show.thumbnail.regular.large}
        alt={show.title}
        className="w-full aspect-[2/1] object-cover"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="flex items-center gap-2 bg-foreground/25 rounded-full px-6 py-3">
          <Play className="w-7 h-7 text-foreground fill-foreground" />
          <span className="text-foreground text-lg font-medium">Play</span>
        </div>
      </div>
      {/* Bookmark */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleBookmark(show.id); }}
        className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 rounded-full bg-background/50 hover:bg-foreground flex items-center justify-center transition-colors group/bm"
      >
        <BookmarkIcon filled={bookmarked} className="group-hover/bm:text-background" />
      </button>
      {/* Bottom info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
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
