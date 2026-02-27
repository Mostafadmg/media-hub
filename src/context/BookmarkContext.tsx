import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface BookmarkContextType {
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => {
    const saved = localStorage.getItem("entertainment-bookmarks");
    return saved ? new Set(JSON.parse(saved)) : new Set<string>();
  });

  useEffect(() => {
    localStorage.setItem("entertainment-bookmarks", JSON.stringify([...bookmarks]));
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const isBookmarked = (id: string) => bookmarks.has(id);

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) throw new Error("useBookmarks must be used within BookmarkProvider");
  return context;
}
