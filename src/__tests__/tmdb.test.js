import tmdbService from '../services/tmdb';
import { MOCK_NOW_PLAYING, MOCK_POPULAR, MOCK_TOP_RATED } from '../data/mockMovies';

describe('TMDB Service', () => {
  test('getNowPlaying returns movie list or fallback', async () => {
    const movies = await tmdbService.getNowPlaying();
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBeGreaterThan(0);
    expect(movies[0]).toHaveProperty('title');
  });

  test('getPopular returns popular movies', async () => {
    const movies = await tmdbService.getPopular();
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBeGreaterThan(0);
  });

  test('getTopRated returns top rated movies', async () => {
    const movies = await tmdbService.getTopRated();
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBeGreaterThan(0);
  });

  test('searchMovies handles search queries', async () => {
    const results = await tmdbService.searchMovies('Dune');
    expect(Array.isArray(results)).toBe(true);
  });

  test('searchMovies returns empty array for empty query', async () => {
    const results = await tmdbService.searchMovies('');
    expect(results).toEqual([]);
  });

  test('getMovieDetails returns movie object for valid or fallback id', async () => {
    const movie = await tmdbService.getMovieDetails(101);
    expect(movie).toBeDefined();
    expect(movie).toHaveProperty('overview');
  });

  test('getMovieCredits returns cast array', async () => {
    const credits = await tmdbService.getMovieCredits(101);
    expect(credits).toHaveProperty('cast');
    expect(Array.isArray(credits.cast)).toBe(true);
  });
});
