import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Show } from "@/services/tmdb";
import { useBookmarks } from "@/context/BookmarkContext";
import { BookmarkIcon, CategoryMovie, CategoryTV } from "./icons";

interface TrendingCarouselProps {
  shows: Show[];
}

export function TrendingCarousel({ shows }: TrendingCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="group/carousel relative -mx-4 md:-mx-6 px-4 md:px-6"
      onMouseEnter={() => setIsHoveringContainer(true)}
      onMouseLeave={() => setIsHoveringContainer(false)}
    >
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-0 bottom-0 z-20 w-12 md:w-16 flex items-center justify-center
          bg-gradient-to-r from-background/90 to-transparent
          transition-opacity duration-300
          ${isHoveringContainer && canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-8 h-8 text-foreground drop-shadow-lg" />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-0 bottom-0 z-20 w-12 md:w-16 flex items-center justify-center
          bg-gradient-to-l from-background/90 to-transparent
          transition-opacity duration-300
          ${isHoveringContainer && canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-8 h-8 text-foreground drop-shadow-lg" />
      </button>

      {/* Cards row */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {shows.map((show, i) => (
          <TrendingItem key={show.id} show={show} index={i} />
        ))}
      </div>
    </div>
  );
}

function TrendingItem({ show, index }: { show: Show; index: number }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(show.id);
  const [justToggled, setJustToggled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(show.id);
    setJustToggled(true);
    setTimeout(() => setJustToggled(false), 300);
  };

  return (
    <>
      {/* Fullscreen trailer modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 bg-background/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in cursor-pointer"
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
        className="relative flex-shrink-0 w-[260px] sm:w-[320px] md:w-[420px] lg:w-[470px] rounded-lg overflow-hidden cursor-pointer group"
        style={{ scrollSnapAlign: "start" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsExpanded(true)}
      >
        {/* Image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-card">
          <img
            src={show.thumbnail.trending?.large || show.thumbnail.regular.large}
            alt={show.title}
            className={`w-full h-full object-cover transition-all duration-500 ease-out ${
              isHovered ? "scale-110 brightness-[0.4]" : "scale-100 brightness-[0.7]"
            }`}
            loading={index < 4 ? "eager" : "lazy"}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const fallback = target.parentElement?.querySelector(".img-fallback") as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div className="img-fallback hidden absolute inset-0 bg-gradient-to-br from-muted/30 to-card items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 6 4-6 4Z"/></svg>
              <span className="text-sm font-medium">{show.title}</span>
            </div>
          </div>

          {/* Play button on hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`flex items-center gap-2 bg-foreground/20 backdrop-blur-sm rounded-full px-5 py-2.5 border border-foreground/20 transition-all duration-500 ${
                isHovered ? "scale-100 translate-y-0" : "scale-75 translate-y-4"
              }`}
            >
              <Play className="w-5 h-5 text-foreground fill-foreground" />
              <span className="text-foreground text-sm font-medium">Play Trailer</span>
            </div>
          </div>

          {/* Bookmark */}
          <button
            onClick={handleBookmark}
            className={`absolute top-2 right-2 md:top-3 md:right-3 z-10 w-8 h-8 rounded-full bg-background/60 hover:bg-foreground flex items-center justify-center transition-all duration-200 group/bm ${
              justToggled ? "animate-bookmark-pop" : ""
            } ${isHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          >
            <BookmarkIcon filled={bookmarked} className="transition-colors duration-200 group-hover/bm:text-background" />
          </button>

          {/* Bottom gradient info */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-background via-background/60 to-transparent transition-all duration-500 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-90"
            }`}
          >
            <div className="flex items-center gap-1.5 text-[11px] md:text-[13px] text-foreground/60 mb-1">
              <span>{show.year}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                {show.category === "Movie" ? <CategoryMovie /> : <CategoryTV />}
                {show.category}
              </span>
              <span>•</span>
              <span>{show.rating}</span>
            </div>
            <h3
              className={`text-sm md:text-xl font-semibold text-foreground transition-all duration-500 ${
                isHovered ? "translate-y-0" : "translate-y-0"
              }`}
            >
              {show.title}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
