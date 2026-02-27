import { useQuery } from "@tanstack/react-query";
import {
  fetchTrending,
  fetchTopMovies,
  fetchTopTVSeries,
  fetchRecommended,
  searchShows,
  type Show,
} from "@/services/tmdb";

export function useTrending() {
  return useQuery<Show[]>({
    queryKey: ["trending"],
    queryFn: fetchTrending,
    staleTime: 1000 * 60 * 30, // 30 min
  });
}

export function useTopMovies() {
  return useQuery<Show[]>({
    queryKey: ["topMovies"],
    queryFn: fetchTopMovies,
    staleTime: 1000 * 60 * 30,
  });
}

export function useTopTVSeries() {
  return useQuery<Show[]>({
    queryKey: ["topTVSeries"],
    queryFn: fetchTopTVSeries,
    staleTime: 1000 * 60 * 30,
  });
}

export function useRecommended() {
  return useQuery<Show[]>({
    queryKey: ["recommended"],
    queryFn: fetchRecommended,
    staleTime: 1000 * 60 * 30,
  });
}

export function useSearch(query: string) {
  return useQuery<Show[]>({
    queryKey: ["search", query],
    queryFn: () => searchShows(query),
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 5,
  });
}
