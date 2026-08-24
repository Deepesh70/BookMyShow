import axios from 'axios';
import {
  MOCK_NOW_PLAYING,
  MOCK_POPULAR,
  MOCK_TOP_RATED,
  MOCK_UPCOMING,
  MOCK_CAST
} from '../data/mockMovies';

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
  getNowPlaying: async () => {
    try {
      if (!API_KEY) return MOCK_NOW_PLAYING;
      const res = await apiClient.get('/movie/now_playing');
      return res.data?.results?.length ? res.data.results : MOCK_NOW_PLAYING;
    } catch (err) {
      console.warn('TMDB Now Playing fallback triggered:', err.message);
      return MOCK_NOW_PLAYING;
    }
  },

  getPopular: async () => {
    try {
      if (!API_KEY) return MOCK_POPULAR;
      const res = await apiClient.get('/movie/popular');
      return res.data?.results?.length ? res.data.results : MOCK_POPULAR;
    } catch (err) {
      console.warn('TMDB Popular fallback triggered:', err.message);
      return MOCK_POPULAR;
    }
  },

  getTopRated: async () => {
    try {
      if (!API_KEY) return MOCK_TOP_RATED;
      const res = await apiClient.get('/movie/top_rated');
      return res.data?.results?.length ? res.data.results : MOCK_TOP_RATED;
    } catch (err) {
      console.warn('TMDB Top Rated fallback triggered:', err.message);
      return MOCK_TOP_RATED;
    }
  },

  getUpcoming: async () => {
    try {
      if (!API_KEY) return MOCK_UPCOMING;
      const res = await apiClient.get('/movie/upcoming');
      return res.data?.results?.length ? res.data.results : MOCK_UPCOMING;
    } catch (err) {
      console.warn('TMDB Upcoming fallback triggered:', err.message);
      return MOCK_UPCOMING;
    }
  },

  getTrending: async () => {
    try {
      if (!API_KEY) return MOCK_POPULAR;
      const res = await apiClient.get('/trending/movie/week');
      return res.data?.results?.length ? res.data.results : MOCK_POPULAR;
    } catch (err) {
      console.warn('TMDB Trending fallback triggered:', err.message);
      return MOCK_POPULAR;
    }
  },

  getMovieDetails: async (id) => {
    try {
      if (!API_KEY) {
        const found = [...MOCK_POPULAR, ...MOCK_TOP_RATED, ...MOCK_UPCOMING].find(
          (m) => String(m.id) === String(id)
        );
        return found || MOCK_NOW_PLAYING[0];
      }
      const res = await apiClient.get(`/movie/${id}`);
      return res.data;
    } catch (err) {
      console.warn(`TMDB Details fallback triggered for id ${id}:`, err.message);
      const found = [...MOCK_POPULAR, ...MOCK_TOP_RATED, ...MOCK_UPCOMING].find(
        (m) => String(m.id) === String(id)
      );
      return found || MOCK_NOW_PLAYING[0];
    }
  },

  getMovieCredits: async (id) => {
    try {
      if (!API_KEY) return { cast: MOCK_CAST, crew: [] };
      const res = await apiClient.get(`/movie/${id}/credits`);
      return res.data || { cast: MOCK_CAST, crew: [] };
    } catch (err) {
      console.warn(`TMDB Credits fallback triggered for id ${id}:`, err.message);
      return { cast: MOCK_CAST, crew: [] };
    }
  },

  getSimilarMovies: async (id) => {
    try {
      if (!API_KEY) return MOCK_POPULAR.slice(2, 8);
      const res = await apiClient.get(`/movie/${id}/similar`);
      return res.data?.results?.length ? res.data.results : MOCK_POPULAR.slice(2, 8);
    } catch (err) {
      console.warn(`TMDB Similar fallback triggered for id ${id}:`, err.message);
      return MOCK_POPULAR.slice(2, 8);
    }
  },

  getRecommendations: async (id) => {
    try {
      if (!API_KEY) return MOCK_TOP_RATED;
      const res = await apiClient.get(`/movie/${id}/recommendations`);
      return res.data?.results?.length ? res.data.results : MOCK_TOP_RATED;
    } catch (err) {
      console.warn(`TMDB Recommendations fallback triggered for id ${id}:`, err.message);
      return MOCK_TOP_RATED;
    }
  },

  searchMovies: async (query) => {
    if (!query || !query.trim()) return [];
    try {
      if (!API_KEY) {
        const q = query.toLowerCase();
        return [...MOCK_POPULAR, ...MOCK_TOP_RATED, ...MOCK_UPCOMING].filter(
          (m) => m.title?.toLowerCase().includes(q) || m.overview?.toLowerCase().includes(q)
        );
      }
      const res = await apiClient.get('/search/movie', {
        params: { query: query.trim() },
      });
      return res.data?.results || [];
    } catch (err) {
      console.warn('TMDB Search fallback triggered:', err.message);
      const q = query.toLowerCase();
      return [...MOCK_POPULAR, ...MOCK_TOP_RATED, ...MOCK_UPCOMING].filter(
        (m) => m.title?.toLowerCase().includes(q) || m.overview?.toLowerCase().includes(q)
      );
    }
  },
};

export default tmdbService;
