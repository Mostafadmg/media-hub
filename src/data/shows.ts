export interface Show {
  id: string;
  title: string;
  year: number;
  category: "Movie" | "TV Series";
  rating: string;
  isTrending: boolean;
  thumbnail: {
    trending?: { small: string; large: string };
    regular: { small: string; medium: string; large: string };
  };
}

export const shows: Show[] = [
  {
    id: "1",
    title: "Beyond Earth",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isTrending: true,
    thumbnail: {
      trending: { small: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=470&h=230&fit=crop", large: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=940&h=460&fit=crop" },
      regular: { small: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "2",
    title: "Bottom Gear",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isTrending: true,
    thumbnail: {
      trending: { small: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=470&h=230&fit=crop", large: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=940&h=460&fit=crop" },
      regular: { small: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "3",
    title: "Undiscovered Cities",
    year: 2019,
    category: "TV Series",
    rating: "E",
    isTrending: true,
    thumbnail: {
      trending: { small: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=470&h=230&fit=crop", large: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=940&h=460&fit=crop" },
      regular: { small: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "4",
    title: "1998",
    year: 2021,
    category: "Movie",
    rating: "18+",
    isTrending: true,
    thumbnail: {
      trending: { small: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=470&h=230&fit=crop", large: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=940&h=460&fit=crop" },
      regular: { small: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "5",
    title: "Dark Side of the Moon",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isTrending: true,
    thumbnail: {
      trending: { small: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=470&h=230&fit=crop", large: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=940&h=460&fit=crop" },
      regular: { small: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "6",
    title: "The Great Lands",
    year: 2019,
    category: "Movie",
    rating: "E",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "7",
    title: "Earth's Untouched",
    year: 2017,
    category: "TV Series",
    rating: "18+",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "8",
    title: "No Land Beyond",
    year: 2019,
    category: "Movie",
    rating: "E",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "9",
    title: "During the Hunt",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "10",
    title: "Autosport the Series",
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "11",
    title: "Same Answer II",
    year: 2017,
    category: "Movie",
    rating: "E",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "12",
    title: "Below Echo",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "13",
    title: "The Rockies",
    year: 2015,
    category: "TV Series",
    rating: "E",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "14",
    title: "Relentless",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "15",
    title: "Community of Ours",
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "16",
    title: "Van Life",
    year: 2015,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "17",
    title: "The Heiress",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "18",
    title: "Off the Track",
    year: 2017,
    category: "TV Series",
    rating: "18+",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "19",
    title: "Whispering Hill",
    year: 2017,
    category: "Movie",
    rating: "E",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1440778303588-435521a205bc?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1440778303588-435521a205bc?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1440778303588-435521a205bc?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "20",
    title: "112",
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "21",
    title: "Lone Heart",
    year: 2020,
    category: "Movie",
    rating: "E",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "22",
    title: "Mission: Saturn",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "23",
    title: "The Diary",
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "24",
    title: "Dogs",
    year: 2016,
    category: "TV Series",
    rating: "E",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=560&h=348&fit=crop" }
    }
  },
  {
    id: "25",
    title: "Unresolved Cases",
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isTrending: false,
    thumbnail: {
      regular: { small: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=328&h=220&fit=crop", medium: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=440&h=280&fit=crop", large: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=560&h=348&fit=crop" }
    }
  }
];
