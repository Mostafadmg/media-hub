import { useState, useRef, useCallback } from "react";
import { Show } from "@/services/tmdb";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkIcon, CategoryMovie, CategoryTV } from "./icons";

interface VideoCardProps {
  show: Show;
  index?: number;
}

export function VideoCard({ show, index = 0 }: VideoCardProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(show.id);
  const [justToggled, setJustToggled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(show.id);
    setJustToggled(true);
    setTimeout(() => setJustToggled(false), 300);
  };

  const handleMouseEnter = useCallback(() => {
    hoverTimer.current = setTimeout(() => {
      setIsHovering(true);
    }, 400);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setIsHovering(false);
  }, []);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Expanded overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/20 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${show.youtubeTrailerId}?autoplay=1&rel=0`}
              title={`${show.title} trailer`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div
        ref={cardRef}
        className="group animate-card-appear cursor-pointer"
        style={{ animationDelay: `${Math.min(index * 50, 400)}ms` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className="relative rounded-lg overflow-hidden bg-card">
          {/* Thumbnail or Video */}
          <div className="relative w-full aspect-[7/5]">
            {isHovering ? (
              <iframe
                src={`https://www.youtube.com/embed/${show.youtubeTrailerId}?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${show.youtubeTrailerId}`}
                title={`${show.title} trailer`}
                className="absolute inset-0 w-full h-full animate-fade-in"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={show.thumbnail.regular.large}
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.parentElement?.querySelector(".img-fallback") as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="img-fallback hidden absolute inset-0 bg-gradient-to-br from-muted to-card items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 6 4-6 4Z"/></svg>
                    <span className="text-xs font-medium">{show.title}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Bookmark button */}
          <button
            onClick={handleBookmark}
            className={`absolute top-2 right-2 md:top-4 md:right-4 z-10 w-8 h-8 rounded-full bg-background/50 hover:bg-foreground flex items-center justify-center transition-all duration-200 group/bm ${justToggled ? "animate-bookmark-pop" : ""}`}
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
          <h3 className="text-sm md:text-lg font-medium text-foreground mt-1 transition-colors duration-200 group-hover:text-primary">
            {show.title}
          </h3>
        </div>
      </div>
    </>
  );
}
