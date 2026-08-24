// High-fidelity curated fallback dataset for Flex-Watch
// Guarantees seamless offline/zero-API-key operation with production visuals

export const MOCK_NOW_PLAYING = [
  {
    id: 101,
    title: "Dune: Part Two",
    original_title: "Dune: Part Two",
    overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.",
    backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520ewq.jpg",
    poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    vote_average: 8.3,
    vote_count: 5120,
    release_date: "2024-03-01",
    genre_ids: [878, 12],
    runtime: 166,
    genres: [{ id: 878, name: "Sci-Fi" }, { id: 12, name: "Adventure" }]
  },
  {
    id: 102,
    title: "Oppenheimer",
    original_title: "Oppenheimer",
    overview: "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II, exploring the moral complexities of scientific innovation.",
    backdrop_path: "/fm6K9vYI7vdqvENQ6m72rYvTkLE.jpg",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    vote_average: 8.1,
    vote_count: 8900,
    release_date: "2023-07-21",
    genre_ids: [18, 36],
    runtime: 180,
    genres: [{ id: 18, name: "Drama" }, { id: 36, name: "History" }]
  },
  {
    id: 103,
    title: "Spider-Man: Across the Spider-Verse",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    vote_average: 8.4,
    vote_count: 6700,
    release_date: "2023-06-02",
    genre_ids: [16, 28, 12, 878],
    runtime: 140,
    genres: [{ id: 16, name: "Animation" }, { id: 28, name: "Action" }, { id: 878, name: "Sci-Fi" }]
  },
  {
    id: 104,
    title: "Interstellar",
    original_title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces catastrophic famine.",
    backdrop_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    vote_average: 8.7,
    vote_count: 34200,
    release_date: "2014-11-05",
    genre_ids: [12, 18, 878],
    runtime: 169,
    genres: [{ id: 12, name: "Adventure" }, { id: 18, name: "Drama" }, { id: 878, name: "Sci-Fi" }]
  },
  {
    id: 105,
    title: "The Dark Knight",
    original_title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and DA Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.",
    backdrop_path: "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    vote_average: 9.0,
    vote_count: 32000,
    release_date: "2008-07-18",
    genre_ids: [18, 28, 80, 53],
    runtime: 152,
    genres: [{ id: 28, name: "Action" }, { id: 80, name: "Crime" }, { id: 18, name: "Drama" }]
  },
  {
    id: 106,
    title: "Inception",
    original_title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    backdrop_path: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    vote_average: 8.8,
    vote_count: 36000,
    release_date: "2010-07-16",
    genre_ids: [28, 12, 878],
    runtime: 148,
    genres: [{ id: 28, name: "Action" }, { id: 878, name: "Sci-Fi" }, { id: 12, name: "Adventure" }]
  }
];

export const MOCK_POPULAR = [
  ...MOCK_NOW_PLAYING,
  {
    id: 107,
    title: "Avatar: The Way of Water",
    original_title: "Avatar: The Way of Water",
    overview: "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, and the lengths they go to keep each other safe.",
    backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    vote_average: 7.7,
    vote_count: 11000,
    release_date: "2022-12-16",
    genre_ids: [878, 12, 28],
    runtime: 192,
    genres: [{ id: 878, name: "Sci-Fi" }, { id: 12, name: "Adventure" }]
  },
  {
    id: 108,
    title: "Top Gun: Maverick",
    original_title: "Top Gun: Maverick",
    overview: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission.",
    backdrop_path: "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    vote_average: 8.3,
    vote_count: 8500,
    release_date: "2022-05-27",
    genre_ids: [28, 18],
    runtime: 130,
    genres: [{ id: 28, name: "Action" }, { id: 18, name: "Drama" }]
  }
];

export const MOCK_TOP_RATED = [
  {
    id: 109,
    title: "The Shawshank Redemption",
    original_title: "The Shawshank Redemption",
    overview: "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.",
    backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    vote_average: 9.3,
    vote_count: 27000,
    release_date: "1994-09-23",
    genre_ids: [18, 80],
    runtime: 142,
    genres: [{ id: 18, name: "Drama" }, { id: 80, name: "Crime" }]
  },
  {
    id: 110,
    title: "The Godfather",
    original_title: "The Godfather",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family organized under patriarch Vito Corleone.",
    backdrop_path: "/tmU7GeKVybMWF92GImsGqaChNxG.jpg",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    vote_average: 9.2,
    vote_count: 20000,
    release_date: "1972-03-14",
    genre_ids: [18, 80],
    runtime: 175,
    genres: [{ id: 18, name: "Drama" }, { id: 80, name: "Crime" }]
  },
  {
    id: 105,
    title: "The Dark Knight",
    original_title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and DA Harvey Dent, Batman sets out to dismantle the remaining criminal organizations.",
    backdrop_path: "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    vote_average: 9.0,
    vote_count: 32000,
    release_date: "2008-07-18",
    genre_ids: [18, 28, 80, 53],
    runtime: 152,
    genres: [{ id: 28, name: "Action" }, { id: 80, name: "Crime" }]
  },
  {
    id: 106,
    title: "Inception",
    original_title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    backdrop_path: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    vote_average: 8.8,
    vote_count: 36000,
    release_date: "2010-07-16",
    genre_ids: [28, 12, 878],
    runtime: 148,
    genres: [{ id: 28, name: "Action" }, { id: 878, name: "Sci-Fi" }]
  }
];

export const MOCK_UPCOMING = [
  {
    id: 111,
    title: "Deadpool & Wolverine",
    original_title: "Deadpool & Wolverine",
    overview: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary behind him, until the Time Variance Authority pulls him into a new mission.",
    backdrop_path: "/yDHYTfA3R0jFYba16jBB1jv8uaC.jpg",
    poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    vote_average: 7.8,
    vote_count: 4200,
    release_date: "2024-07-26",
    genre_ids: [28, 35, 878],
    runtime: 128,
    genres: [{ id: 28, name: "Action" }, { id: 35, name: "Comedy" }, { id: 878, name: "Sci-Fi" }]
  },
  {
    id: 112,
    title: "Gladiator II",
    original_title: "Gladiator II",
    overview: "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius must enter the Colosseum after his home is conquered by tyrannical emperors.",
    backdrop_path: "/euYIwmwkmz95mnExHgufVAVwvht.jpg",
    poster_path: "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    vote_average: 7.5,
    vote_count: 3100,
    release_date: "2024-11-15",
    genre_ids: [28, 12, 18],
    runtime: 148,
    genres: [{ id: 28, name: "Action" }, { id: 12, name: "Adventure" }]
  }
];

export const MOCK_CAST = [
  {
    id: 1,
    name: "Timothée Chalamet",
    character: "Paul Atreides",
    profile_path: "/BE2sdjpgsa2rNTFa66f7upkaOP.jpg"
  },
  {
    id: 2,
    name: "Zendaya",
    character: "Chani",
    profile_path: "/r3A7evQLVo5K14kW3kQj9yv4Ym.jpg"
  },
  {
    id: 3,
    name: "Rebecca Ferguson",
    character: "Lady Jessica",
    profile_path: "/6NRdnf2i7rQY4l7N2dE3Fw8M0A.jpg"
  },
  {
    id: 4,
    name: "Javier Bardem",
    character: "Stilgar",
    profile_path: "/g8aB0kK0mI4dGz9W9vW1p9m5M1.jpg"
  },
  {
    id: 5,
    name: "Florence Pugh",
    character: "Princess Irulan",
    profile_path: "/7x09A2x2wU7hL7R5o7vB3w1b9B.jpg"
  },
  {
    id: 6,
    name: "Austin Butler",
    character: "Feyd-Rautha",
    profile_path: "/w5g8x7g6f4h2e1d0c9b8a7.jpg"
  }
];

export const MOCK_PLAYS = [
  {
    id: "play-1",
    title: "Hamlet: Reimagined in Darkness",
    category: "Theatre & Drama",
    language: "English",
    date: "Sat, 15 Nov onwards",
    venue: "Royal Opera Auditorium, City Center",
    price: "₹499 onwards",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
    tags: ["Drama", "Shakespeare", "Live Performance"]
  },
  {
    id: "play-2",
    title: "Mughal-e-Azam: The Grand Musical",
    category: "Musical Broadway",
    language: "Hindi / Urdu",
    date: "Fri, 28 Nov - Sun, 30 Nov",
    venue: "NCPA Main Stage, Bay View",
    price: "₹999 onwards",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    tags: ["Musical", "History", "Dance"]
  },
  {
    id: "play-3",
    title: "Standup Comedy Gala feat. Top Comics",
    category: "Standup Comedy",
    language: "English & Hindi",
    date: "Every Weekend 8:00 PM",
    venue: "The Laugh Factory & Club",
    price: "₹399 onwards",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=800&q=80",
    tags: ["Comedy", "18+", "Laughs"]
  },
  {
    id: "play-4",
    title: "Symphony Under the Stars",
    category: "Classical Music",
    language: "Instrumental",
    date: "Sun, 07 Dec 7:00 PM",
    venue: "Open Air Amphitheatre",
    price: "₹750 onwards",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
    tags: ["Orchestra", "Live", "Acoustic"]
  }
];
