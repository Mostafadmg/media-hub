import { useState, useRef, useEffect, useCallback } from "react";
import { Show } from "@/data/shows";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkIcon, CategoryMovie, CategoryTV } from "./icons";

interface TrendingCarouselProps {
  shows: Show[];
}

export function TrendingCarousel({ shows }: TrendingCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 0.8;

  // Duplicate items for infinite scroll effect
  const items = [...shows, ...shows, ...shows];

  const animate = useCallback(() => {
    if (!scrollRef.current || isPaused) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    scrollRef.current.scrollLeft += scrollSpeed;

    // Reset scroll position seamlessly when we've scrolled past one full set
    const singleSetWidth = scrollRef.current.scrollWidth / 3;
    if (scrollRef.current.scrollLeft >= singleSetWidth * 2) {
      scrollRef.current.scrollLeft -= singleSetWidth;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    // Start from the middle set
    if (scrollRef.current) {
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = singleSetWidth;
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 md:gap-6 overflow-x-hidden py-3 px-1 -mx-1 scrollbar-hide"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredId(null);
      }}
    >
      {items.map((show, i) => (
        <TrendingItem
          key={`${show.id}-${i}`}
          show={show}
          isHovered={hoveredId === `${show.id}-${i}`}
          onHover={() => setHoveredId(`${show.id}-${i}`)}
          onLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
}

function TrendingItem({
  show,
  isHovered,
  onHover,
  onLeave,
}: {
  show: Show;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(show.id);
  const [justToggled, setJustToggled] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(show.id);
    setJustToggled(true);
    setTimeout(() => setJustToggled(false), 300);
  };

  useEffect(() => {
    if (isHovered) {
      hoverTimer.current = setTimeout(() => setShowVideo(true), 600);
    } else {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      setShowVideo(false);
    }
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, [isHovered]);

  return (
    <>
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
        className={`group relative flex-shrink-0 w-[240px] md:w-[470px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ${
          isHovered
            ? "ring-2 ring-primary shadow-lg shadow-primary/30 scale-105"
            : "ring-0 ring-transparent scale-100"
        }`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative w-full aspect-[2/1]">
          {showVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${show.youtubeTrailerId}?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${show.youtubeTrailerId}`}
              title={`${show.title} trailer`}
              className="absolute inset-0 w-full h-full animate-fade-in"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <img
              src={show.thumbnail.trending?.large || show.thumbnail.regular.large}
              alt={show.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              loading="lazy"
            />
          )}
        </div>

        {/* Bookmark */}
        <button
          onClick={handleBookmark}
          className={`absolute top-2 right-2 md:top-4 md:right-4 z-10 w-8 h-8 rounded-full bg-background/50 hover:bg-foreground flex items-center justify-center transition-all duration-200 group/bm ${
            justToggled ? "animate-bookmark-pop" : ""
          }`}
        >
          <BookmarkIcon filled={bookmarked} className="transition-colors duration-200 group-hover/bm:text-background" />
        </button>

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
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
    </>
  );
}
