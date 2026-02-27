export interface Show {
  id: string;
  title: string;
  year: number;
  category: "Movie" | "TV Series";
  rating: string;
  isTrending: boolean;
  youtubeTrailerId: string;
  thumbnail: {
    trending?: { small: string; large: string };
    regular: { small: string; medium: string; large: string };
  };
}

// Helper to generate YouTube thumbnail URLs
const ytThumb = (id: string, quality: "mqdefault" | "hqdefault" | "sddefault" | "maxresdefault" = "hqdefault") =>
  `https://img.youtube.com/vi/${id}/${quality}.jpg`;

export const shows: Show[] = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    year: 1994,
    category: "Movie",
    rating: "R",
    isTrending: true,
    youtubeTrailerId: "PLl99DlL6b4",
    thumbnail: {
      trending: { small: ytThumb("PLl99DlL6b4", "hqdefault"), large: ytThumb("PLl99DlL6b4", "maxresdefault") },
      regular: { small: ytThumb("PLl99DlL6b4", "mqdefault"), medium: ytThumb("PLl99DlL6b4", "hqdefault"), large: ytThumb("PLl99DlL6b4", "sddefault") },
    },
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: 2008,
    category: "Movie",
    rating: "PG-13",
    isTrending: true,
    youtubeTrailerId: "EXeTwQWrcwY",
    thumbnail: {
      trending: { small: ytThumb("EXeTwQWrcwY", "hqdefault"), large: ytThumb("EXeTwQWrcwY", "maxresdefault") },
      regular: { small: ytThumb("EXeTwQWrcwY", "mqdefault"), medium: ytThumb("EXeTwQWrcwY", "hqdefault"), large: ytThumb("EXeTwQWrcwY", "sddefault") },
    },
  },
  {
    id: "3",
    title: "Inception",
    year: 2010,
    category: "Movie",
    rating: "PG-13",
    isTrending: true,
    youtubeTrailerId: "YoHD9XEInc0",
    thumbnail: {
      trending: { small: ytThumb("YoHD9XEInc0", "hqdefault"), large: ytThumb("YoHD9XEInc0", "maxresdefault") },
      regular: { small: ytThumb("YoHD9XEInc0", "mqdefault"), medium: ytThumb("YoHD9XEInc0", "hqdefault"), large: ytThumb("YoHD9XEInc0", "sddefault") },
    },
  },
  {
    id: "4",
    title: "Interstellar",
    year: 2014,
    category: "Movie",
    rating: "PG-13",
    isTrending: true,
    youtubeTrailerId: "zSWdZVtXT7E",
    thumbnail: {
      trending: { small: ytThumb("zSWdZVtXT7E", "hqdefault"), large: ytThumb("zSWdZVtXT7E", "maxresdefault") },
      regular: { small: ytThumb("zSWdZVtXT7E", "mqdefault"), medium: ytThumb("zSWdZVtXT7E", "hqdefault"), large: ytThumb("zSWdZVtXT7E", "sddefault") },
    },
  },
  {
    id: "5",
    title: "The Godfather",
    year: 1972,
    category: "Movie",
    rating: "R",
    isTrending: true,
    youtubeTrailerId: "UaVTIH8mujA",
    thumbnail: {
      trending: { small: ytThumb("UaVTIH8mujA", "hqdefault"), large: ytThumb("UaVTIH8mujA", "maxresdefault") },
      regular: { small: ytThumb("UaVTIH8mujA", "mqdefault"), medium: ytThumb("UaVTIH8mujA", "hqdefault"), large: ytThumb("UaVTIH8mujA", "sddefault") },
    },
  },
  {
    id: "6",
    title: "Pulp Fiction",
    year: 1994,
    category: "Movie",
    rating: "R",
    isTrending: true,
    youtubeTrailerId: "s7EdQ4FqbhY",
    thumbnail: {
      trending: { small: ytThumb("s7EdQ4FqbhY", "hqdefault"), large: ytThumb("s7EdQ4FqbhY", "maxresdefault") },
      regular: { small: ytThumb("s7EdQ4FqbhY", "mqdefault"), medium: ytThumb("s7EdQ4FqbhY", "hqdefault"), large: ytThumb("s7EdQ4FqbhY", "sddefault") },
    },
  },
  {
    id: "7",
    title: "Breaking Bad",
    year: 2008,
    category: "TV Series",
    rating: "TV-MA",
    isTrending: true,
    youtubeTrailerId: "HhesaQXLuRY",
    thumbnail: {
      trending: { small: ytThumb("HhesaQXLuRY", "hqdefault"), large: ytThumb("HhesaQXLuRY", "maxresdefault") },
      regular: { small: ytThumb("HhesaQXLuRY", "mqdefault"), medium: ytThumb("HhesaQXLuRY", "hqdefault"), large: ytThumb("HhesaQXLuRY", "sddefault") },
    },
  },
  {
    id: "8",
    title: "Stranger Things",
    year: 2016,
    category: "TV Series",
    rating: "TV-14",
    isTrending: true,
    youtubeTrailerId: "b9EkMc79ZSU",
    thumbnail: {
      trending: { small: ytThumb("b9EkMc79ZSU", "hqdefault"), large: ytThumb("b9EkMc79ZSU", "maxresdefault") },
      regular: { small: ytThumb("b9EkMc79ZSU", "mqdefault"), medium: ytThumb("b9EkMc79ZSU", "hqdefault"), large: ytThumb("b9EkMc79ZSU", "sddefault") },
    },
  },
  {
    id: "9",
    title: "Fight Club",
    year: 1999,
    category: "Movie",
    rating: "R",
    isTrending: false,
    youtubeTrailerId: "qtRKdVHc-cE",
    thumbnail: {
      regular: { small: ytThumb("qtRKdVHc-cE", "mqdefault"), medium: ytThumb("qtRKdVHc-cE", "hqdefault"), large: ytThumb("qtRKdVHc-cE", "sddefault") },
    },
  },
  {
    id: "10",
    title: "Forrest Gump",
    year: 1994,
    category: "Movie",
    rating: "PG-13",
    isTrending: false,
    youtubeTrailerId: "bLvqoHBptjg",
    thumbnail: {
      regular: { small: ytThumb("bLvqoHBptjg", "mqdefault"), medium: ytThumb("bLvqoHBptjg", "hqdefault"), large: ytThumb("bLvqoHBptjg", "sddefault") },
    },
  },
  {
    id: "11",
    title: "The Matrix",
    year: 1999,
    category: "Movie",
    rating: "R",
    isTrending: false,
    youtubeTrailerId: "vKQi3bBA1y8",
    thumbnail: {
      regular: { small: ytThumb("vKQi3bBA1y8", "mqdefault"), medium: ytThumb("vKQi3bBA1y8", "hqdefault"), large: ytThumb("vKQi3bBA1y8", "sddefault") },
    },
  },
  {
    id: "12",
    title: "Goodfellas",
    year: 1990,
    category: "Movie",
    rating: "R",
    isTrending: false,
    youtubeTrailerId: "2ilzidi_J8Q",
    thumbnail: {
      regular: { small: ytThumb("2ilzidi_J8Q", "mqdefault"), medium: ytThumb("2ilzidi_J8Q", "hqdefault"), large: ytThumb("2ilzidi_J8Q", "sddefault") },
    },
  },
  {
    id: "13",
    title: "Game of Thrones",
    year: 2011,
    category: "TV Series",
    rating: "TV-MA",
    isTrending: false,
    youtubeTrailerId: "KPLWWIOCOOQ",
    thumbnail: {
      regular: { small: ytThumb("KPLWWIOCOOQ", "mqdefault"), medium: ytThumb("KPLWWIOCOOQ", "hqdefault"), large: ytThumb("KPLWWIOCOOQ", "sddefault") },
    },
  },
  {
    id: "14",
    title: "The Witcher",
    year: 2019,
    category: "TV Series",
    rating: "TV-MA",
    isTrending: false,
    youtubeTrailerId: "ndl1W4ltcmg",
    thumbnail: {
      regular: { small: ytThumb("ndl1W4ltcmg", "mqdefault"), medium: ytThumb("ndl1W4ltcmg", "hqdefault"), large: ytThumb("ndl1W4ltcmg", "sddefault") },
    },
  },
  {
    id: "15",
    title: "Oppenheimer",
    year: 2023,
    category: "Movie",
    rating: "R",
    isTrending: false,
    youtubeTrailerId: "uYPbbksJxIg",
    thumbnail: {
      regular: { small: ytThumb("uYPbbksJxIg", "mqdefault"), medium: ytThumb("uYPbbksJxIg", "hqdefault"), large: ytThumb("uYPbbksJxIg", "sddefault") },
    },
  },
  {
    id: "16",
    title: "The Mandalorian",
    year: 2019,
    category: "TV Series",
    rating: "TV-PG",
    isTrending: false,
    youtubeTrailerId: "aOC8E8z_ifw",
    thumbnail: {
      regular: { small: ytThumb("aOC8E8z_ifw", "mqdefault"), medium: ytThumb("aOC8E8z_ifw", "hqdefault"), large: ytThumb("aOC8E8z_ifw", "sddefault") },
    },
  },
  {
    id: "17",
    title: "Dune",
    year: 2021,
    category: "Movie",
    rating: "PG-13",
    isTrending: false,
    youtubeTrailerId: "n9xhJrPXop4",
    thumbnail: {
      regular: { small: ytThumb("n9xhJrPXop4", "mqdefault"), medium: ytThumb("n9xhJrPXop4", "hqdefault"), large: ytThumb("n9xhJrPXop4", "sddefault") },
    },
  },
  {
    id: "18",
    title: "The Crown",
    year: 2016,
    category: "TV Series",
    rating: "TV-MA",
    isTrending: false,
    youtubeTrailerId: "JWtnJjn6ng0",
    thumbnail: {
      regular: { small: ytThumb("JWtnJjn6ng0", "mqdefault"), medium: ytThumb("JWtnJjn6ng0", "hqdefault"), large: ytThumb("JWtnJjn6ng0", "sddefault") },
    },
  },
  {
    id: "19",
    title: "Parasite",
    year: 2019,
    category: "Movie",
    rating: "R",
    isTrending: false,
    youtubeTrailerId: "5xH0HfJHsaY",
    thumbnail: {
      regular: { small: ytThumb("5xH0HfJHsaY", "mqdefault"), medium: ytThumb("5xH0HfJHsaY", "hqdefault"), large: ytThumb("5xH0HfJHsaY", "sddefault") },
    },
  },
  {
    id: "20",
    title: "Wednesday",
    year: 2022,
    category: "TV Series",
    rating: "TV-14",
    isTrending: false,
    youtubeTrailerId: "Di310WS8zLk",
    thumbnail: {
      regular: { small: ytThumb("Di310WS8zLk", "mqdefault"), medium: ytThumb("Di310WS8zLk", "hqdefault"), large: ytThumb("Di310WS8zLk", "sddefault") },
    },
  },
  {
    id: "21",
    title: "The Batman",
    year: 2022,
    category: "Movie",
    rating: "PG-13",
    isTrending: false,
    youtubeTrailerId: "mqqft2x_Aa4",
    thumbnail: {
      regular: { small: ytThumb("mqqft2x_Aa4", "mqdefault"), medium: ytThumb("mqqft2x_Aa4", "hqdefault"), large: ytThumb("mqqft2x_Aa4", "sddefault") },
    },
  },
  {
    id: "22",
    title: "Squid Game",
    year: 2021,
    category: "TV Series",
    rating: "TV-MA",
    isTrending: false,
    youtubeTrailerId: "oqxAJKy0ii4",
    thumbnail: {
      regular: { small: ytThumb("oqxAJKy0ii4", "mqdefault"), medium: ytThumb("oqxAJKy0ii4", "hqdefault"), large: ytThumb("oqxAJKy0ii4", "sddefault") },
    },
  },
  {
    id: "23",
    title: "Gladiator",
    year: 2000,
    category: "Movie",
    rating: "R",
    isTrending: false,
    youtubeTrailerId: "owK1qxDselE",
    thumbnail: {
      regular: { small: ytThumb("owK1qxDselE", "mqdefault"), medium: ytThumb("owK1qxDselE", "hqdefault"), large: ytThumb("owK1qxDselE", "sddefault") },
    },
  },
  {
    id: "24",
    title: "Peaky Blinders",
    year: 2013,
    category: "TV Series",
    rating: "TV-MA",
    isTrending: false,
    youtubeTrailerId: "oVzVdvGIC7U",
    thumbnail: {
      regular: { small: ytThumb("oVzVdvGIC7U", "mqdefault"), medium: ytThumb("oVzVdvGIC7U", "hqdefault"), large: ytThumb("oVzVdvGIC7U", "sddefault") },
    },
  },
];
