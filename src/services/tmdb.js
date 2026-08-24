import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY || '';
const BASE_URL = 'https://api.themoviedb.org/3';

// Dedicated Axios instance to avoid polluting global axios
export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
});

apiClient.interceptors.request.use((config) => {
  if (API_KEY) {
    config.params = {
      api_key: API_KEY,
      ...config.params,
    };
  }
  return config;
});

export const tmdbService = {
  // --- Movies Endpoints ---
  getNowPlaying: async () => {
    if (!API_KEY) return [];
    try {
      const res = await apiClient.get('/movie/now_playing');
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB Now Playing error:', err.message);
      return [];
    }
  },

  getPopular: async () => {
    if (!API_KEY) return [];
    try {
      const res = await apiClient.get('/movie/popular');
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB Popular error:', err.message);
      return [];
    }
  },

  getTopRated: async () => {
    if (!API_KEY) return [];
    try {
      const res = await apiClient.get('/movie/top_rated');
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB Top Rated error:', err.message);
      return [];
    }
  },

  getUpcoming: async () => {
    if (!API_KEY) return [];
    try {
      const res = await apiClient.get('/movie/upcoming');
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB Upcoming error:', err.message);
      return [];
    }
  },

  getTrending: async () => {
    if (!API_KEY) return [];
    try {
      const res = await apiClient.get('/trending/movie/week');
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB Trending error:', err.message);
      return [];
    }
  },

  getMovieDetails: async (id) => {
    if (!API_KEY || !id) return null;
    try {
      const res = await apiClient.get(`/movie/${id}`);
      return res?.data || null;
    } catch (err) {
      console.error(`TMDB Details error for id ${id}:`, err.message);
      return null;
    }
  },

  getMovieCredits: async (id) => {
    if (!API_KEY || !id) return { cast: [], crew: [] };
    try {
      const res = await apiClient.get(`/movie/${id}/credits`);
      return res?.data || { cast: [], crew: [] };
    } catch (err) {
      console.error(`TMDB Credits error for id ${id}:`, err.message);
      return { cast: [], crew: [] };
    }
  },

  getMovieVideos: async (id) => {
    if (!API_KEY || !id) return [];
    try {
      const res = await apiClient.get(`/movie/${id}/videos`);
      return res?.data?.results || [];
    } catch (err) {
      console.error(`TMDB Videos error for id ${id}:`, err.message);
      return [];
    }
  },

  getSimilarMovies: async (id) => {
    if (!API_KEY || !id) return [];
    try {
      const res = await apiClient.get(`/movie/${id}/similar`);
      return res?.data?.results || [];
    } catch (err) {
      console.error(`TMDB Similar error for id ${id}:`, err.message);
      return [];
    }
  },

  getRecommendations: async (id) => {
    if (!API_KEY || !id) return [];
    try {
      const res = await apiClient.get(`/movie/${id}/recommendations`);
      return res?.data?.results || [];
    } catch (err) {
      console.error(`TMDB Recommendations error for id ${id}:`, err.message);
      return [];
    }
  },

  searchMovies: async (query) => {
    if (!API_KEY || !query || !query.trim()) return [];
    try {
      const res = await apiClient.get('/search/movie', {
        params: { query: query.trim() },
      });
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB Search error:', err.message);
      return [];
    }
  },

  // --- TV Series Endpoints ---
  getPopularTV: async () => {
    if (!API_KEY) return [];
    try {
      const res = await apiClient.get('/tv/popular');
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB Popular TV error:', err.message);
      return [];
    }
  },

  getTopRatedTV: async () => {
    if (!API_KEY) return [];
    try {
      const res = await apiClient.get('/tv/top_rated');
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB Top Rated TV error:', err.message);
      return [];
    }
  },

  getOnTheAirTV: async () => {
    if (!API_KEY) return [];
    try {
      const res = await apiClient.get('/tv/on_the_air');
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB On The Air TV error:', err.message);
      return [];
    }
  },

  getTrendingTV: async () => {
    if (!API_KEY) return [];
    try {
      const res = await apiClient.get('/trending/tv/week');
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB Trending TV error:', err.message);
      return [];
    }
  },

  getTVDetails: async (id) => {
    if (!API_KEY || !id) return null;
    try {
      const res = await apiClient.get(`/tv/${id}`);
      return res?.data || null;
    } catch (err) {
      console.error(`TMDB TV Details error for id ${id}:`, err.message);
      return null;
    }
  },

  getTVCredits: async (id) => {
    if (!API_KEY || !id) return { cast: [], crew: [] };
    try {
      const res = await apiClient.get(`/tv/${id}/credits`);
      return res?.data || { cast: [], crew: [] };
    } catch (err) {
      console.error(`TMDB TV Credits error for id ${id}:`, err.message);
      return { cast: [], crew: [] };
    }
  },

  getTVVideos: async (id) => {
    if (!API_KEY || !id) return [];
    try {
      const res = await apiClient.get(`/tv/${id}/videos`);
      return res?.data?.results || [];
    } catch (err) {
      console.error(`TMDB TV Videos error for id ${id}:`, err.message);
      return [];
    }
  },

  searchTV: async (query) => {
    if (!API_KEY || !query || !query.trim()) return [];
    try {
      const res = await apiClient.get('/search/tv', {
        params: { query: query.trim() },
      });
      return res?.data?.results || [];
    } catch (err) {
      console.error('TMDB TV Search error:', err.message);
      return [];
    }
  },
};

export default tmdbService;
