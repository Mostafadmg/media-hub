import { Show } from "@/data/shows";
import { VideoCard } from "./VideoCard";

interface ShowGridProps {
  shows: Show[];
  title?: string;
}

export function ShowGrid({ shows, title }: ShowGridProps) {
  if (shows.length === 0) return null;

  return (
    <section className="animate-fade-in">
      {title && (
        <h2 className="text-xl md:text-[32px] font-light text-foreground mb-4 md:mb-6 animate-slide-up">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10">
        {shows.map((show, i) => (
          <VideoCard key={show.id} show={show} index={i} />
        ))}
      </div>
    </section>
  );
}
