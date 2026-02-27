// TMDB API Service
// API key is publishable (client-side usage is standard per TMDB docs)
const TMDB_API_KEY = "2dca580c2a14b55200e784d157207b4d";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE = "https://image.tmdb.org/t/p";

export interface TMDBMovie {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  poster_path: string | null;
  backdrop_path: string | null;
  media_type?: string;
  genre_ids: number[];
  adult: boolean;
}

export interface TMDBVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}

export interface Show {
  id: string;
  tmdbId: number;
  title: string;
  year: number;
  category: "Movie" | "TV Series";
  rating: string;
  overview: string;
  voteAverage: number;
  isTrending: boolean;
  youtubeTrailerId: string;
  thumbnail: {
    trending?: { small: string; large: string };
    regular: { small: string; medium: string; large: string };
  };
}

// Certification mapping
function getCertification(adult: boolean, voteAverage: number): string {
  if (adult) return "18+";
  if (voteAverage >= 8) return "PG";
  if (voteAverage >= 6) return "PG-13";
  return "R";
}

// Image URL helpers
export function posterUrl(path: string | null, size: "w342" | "w500" | "w780" | "original" = "w500"): string {
  if (!path) return "https://via.placeholder.com/500x750/161D2F/5A698F?text=No+Poster";
  return `${IMG_BASE}/${size}${path}`;
}

export function backdropUrl(path: string | null, size: "w780" | "w1280" | "original" = "w1280"): string {
  if (!path) return "https://via.placeholder.com/1280x720/161D2F/5A698F?text=No+Image";
  return `${IMG_BASE}/${size}${path}`;
}

async function fetchJSON<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set("api_key", TMDB_API_KEY);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`TMDB API error: ${res.status}`);
  return res.json();
}

// Fetch YouTube trailer ID for a movie/show
async function fetchTrailerId(tmdbId: number, mediaType: "movie" | "tv"): Promise<string> {
  try {
    const data = await fetchJSON<{ results: TMDBVideo[] }>(`/${mediaType}/${tmdbId}/videos`);
    // Prefer official YouTube trailers
    const trailer =
      data.results.find((v) => v.site === "YouTube" && v.type === "Trailer" && v.official) ||
      data.results.find((v) => v.site === "YouTube" && v.type === "Trailer") ||
      data.results.find((v) => v.site === "YouTube");
    return trailer?.key || "";
  } catch {
    return "";
  }
}

// Transform TMDB data to our Show format
function toShow(item: TMDBMovie, isTrending: boolean, trailerKey: string): Show {
  const isMovie = item.media_type === "movie" || !!item.title;
  const title = item.title || item.name || "Unknown";
  const dateStr = item.release_date || item.first_air_date || "";
  const year = dateStr ? new Date(dateStr).getFullYear() : 0;

  return {
    id: `${isMovie ? "m" : "t"}-${item.id}`,
    tmdbId: item.id,
    title,
    year,
    category: isMovie ? "Movie" : "TV Series",
    rating: getCertification(item.adult, item.vote_average),
    overview: item.overview,
    voteAverage: item.vote_average,
    isTrending,
    youtubeTrailerId: trailerKey,
    thumbnail: {
      trending: item.backdrop_path
        ? { small: backdropUrl(item.backdrop_path, "w780"), large: backdropUrl(item.backdrop_path, "w1280") }
        : undefined,
      regular: {
        small: posterUrl(item.poster_path, "w342"),
        medium: posterUrl(item.poster_path, "w500"),
        large: backdropUrl(item.backdrop_path, "w780"),
      },
    },
  };
}

// ─── Public API ─────────────────────────────────────────────

export async function fetchTrending(): Promise<Show[]> {
  const data = await fetchJSON<{ results: TMDBMovie[] }>("/trending/all/week");
  const top = data.results.slice(0, 10);

  const shows = await Promise.all(
    top.map(async (item) => {
      const mediaType = item.media_type === "tv" ? "tv" : "movie";
      const trailerKey = await fetchTrailerId(item.id, mediaType);
      return toShow({ ...item, media_type: item.media_type || "movie" }, true, trailerKey);
    })
  );

  return shows.filter((s) => s.youtubeTrailerId);
}

export async function fetchTopMovies(): Promise<Show[]> {
  const data = await fetchJSON<{ results: TMDBMovie[] }>("/movie/top_rated", { page: "1" });
  const movies = data.results.slice(0, 16);

  return Promise.all(
    movies.map(async (item) => {
      const trailerKey = await fetchTrailerId(item.id, "movie");
      return toShow({ ...item, media_type: "movie" }, false, trailerKey);
    })
  );
}

export async function fetchTopTVSeries(): Promise<Show[]> {
  const data = await fetchJSON<{ results: TMDBMovie[] }>("/tv/top_rated", { page: "1" });
  const series = data.results.slice(0, 16);

  return Promise.all(
    series.map(async (item) => {
      const trailerKey = await fetchTrailerId(item.id, "tv");
      return toShow({ ...item, media_type: "tv" }, false, trailerKey);
    })
  );
}

export async function searchShows(query: string): Promise<Show[]> {
  const data = await fetchJSON<{ results: TMDBMovie[] }>("/search/multi", { query });
  const filtered = data.results.filter((r) => r.media_type === "movie" || r.media_type === "tv").slice(0, 20);

  return Promise.all(
    filtered.map(async (item) => {
      const mediaType = item.media_type === "tv" ? "tv" : "movie";
      const trailerKey = await fetchTrailerId(item.id, mediaType);
      return toShow(item, false, trailerKey);
    })
  );
}

export async function fetchRecommended(): Promise<Show[]> {
  const data = await fetchJSON<{ results: TMDBMovie[] }>("/movie/popular");
  const movies = data.results.slice(0, 16);

  return Promise.all(
    movies.map(async (item) => {
      const trailerKey = await fetchTrailerId(item.id, "movie");
      return toShow({ ...item, media_type: "movie" }, false, trailerKey);
    })
  );
}
