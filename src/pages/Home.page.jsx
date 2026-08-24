import React, { useEffect, useState, useContext } from 'react';
import DefaultlayoutHOC from '../layouts/Default.layout';
import HeroCarousal from '../components/HeroCarousal/HeroCarousal.component';
import PosterSlider from '../components/PostSlider/PostSlider.component';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter.component';
import FeaturedMovie from '../components/FeaturedMovie/FeaturedMovie.component';
import Poster from '../components/poster/Poster.component';
import { MovieContext } from '../components/context/Movies.context';
import tmdbService from '../services/tmdb';
import { PosterSliderSkeleton } from '../components/common/LoadingSkeleton';

const HomePage = () => {
  const { search, myList } = useContext(MovieContext);
  const [searchResults, setSearchResults] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [activeCategory, setActiveCategory] = useState('popular');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load all movie categories using tmdbService
  useEffect(() => {
    let isMounted = true;
    const loadAllMovies = async () => {
      setLoading(true);
      try {
        const [popular, topRated, upcoming, trending, nowPlaying] = await Promise.all([
          tmdbService.getPopular(),
          tmdbService.getTopRated(),
          tmdbService.getUpcoming(),
          tmdbService.getTrending(),
          tmdbService.getNowPlaying(),
        ]);

        if (isMounted) {
          setPopularMovies(popular || []);
          setTopRatedMovies(topRated || []);
          setUpcomingMovies(upcoming || []);
          setTrendingMovies(trending || []);
          setNowPlayingMovies(nowPlaying || []);
          setFilteredMovies(popular || []);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching home page movie sections:', err);
        if (isMounted) setLoading(false);
      }
    };

    loadAllMovies();
    return () => {
      isMounted = false;
    };
  }, []);

  // Category Filter Logic
  useEffect(() => {
    if (activeCategory === 'popular') {
      setFilteredMovies(popularMovies);
    } else {
      const allMovies = [...popularMovies, ...topRatedMovies, ...nowPlayingMovies, ...trendingMovies];
      const genreFiltered = allMovies
        .filter((m) => m.genre_ids?.includes(Number(activeCategory)))
        .filter((movie, index, self) => index === self.findIndex((m) => m.id === movie.id));
      setFilteredMovies(genreFiltered.length > 0 ? genreFiltered : popularMovies);
    }
  }, [activeCategory, popularMovies, topRatedMovies, nowPlayingMovies, trendingMovies]);

  // Search execution
  useEffect(() => {
    let isMounted = true;
    if (search && search.trim()) {
      const execSearch = async () => {
        const results = await tmdbService.searchMovies(search);
        if (isMounted) setSearchResults(results);
      };
      execSearch();
    } else {
      setSearchResults([]);
    }
    return () => {
      isMounted = false;
    };
  }, [search]);

  // Search Results View
  if (search && search.trim()) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Search Results for <span className="text-accent-gold">"{search}"</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Found {searchResults.length} matching titles
            </p>
          </div>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {searchResults.map((movie) => (
                <Poster {...movie} key={movie.id} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-dark-800/50 rounded-2xl border border-white/5 p-8">
              <p className="text-gray-400 text-base mb-2">No movies found matching "{search}"</p>
              <p className="text-gray-600 text-sm">Try searching for popular titles like "Dune", "Batman", or "Avatar"</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Spotlights
  const featuredMovie1 =
    popularMovies.find((m) => m.backdrop_path && m.vote_average >= 7) || popularMovies[0];
  const featuredMovie2 =
    topRatedMovies.find((m) => m.backdrop_path && m.id !== featuredMovie1?.id) || topRatedMovies[0];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousal />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Category Pills Filter */}
        <div className="mb-8">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* My List Section (if user has saved movies) */}
        {myList && myList.length > 0 && (
          <section className="mb-12">
            <PosterSlider
              title="My Watchlist"
              subtitle={`${myList.length} saved for later`}
              posters={myList}
              isDark={true}
            />
          </section>
        )}

        {/* Filtered / Trending Section */}
        {loading ? (
          <PosterSliderSkeleton count={6} />
        ) : (
          <section className="mb-12">
            <PosterSlider
              title={activeCategory === 'popular' ? 'Trending Hits' : 'Genre Selection'}
              subtitle="Curated picks tailored for high resolution streaming"
              posters={filteredMovies}
              isDark={true}
            />
          </section>
        )}

        {/* Spotlight Featured 1 */}
        {featuredMovie1 && !loading && (
          <section className="mb-14">
            <FeaturedMovie movie={featuredMovie1} />
          </section>
        )}

        {/* Top Rated Masterpieces */}
        {loading ? (
          <PosterSliderSkeleton count={6} />
        ) : (
          <section className="mb-12">
            <PosterSlider
              title="Top Rated Masterpieces"
              subtitle="Critically acclaimed movies of all time"
              posters={topRatedMovies}
              isDark={true}
            />
          </section>
        )}

        {/* Upcoming Movies */}
        {loading ? (
          <PosterSliderSkeleton count={6} />
        ) : (
          <section className="mb-12">
            <PosterSlider
              title="Coming Soon to Theaters"
              subtitle="Get ready for next big blockbusters"
              posters={upcomingMovies}
              isDark={true}
            />
          </section>
        )}

        {/* Spotlight Featured 2 */}
        {featuredMovie2 && !loading && (
          <section className="mb-14">
            <FeaturedMovie movie={featuredMovie2} />
          </section>
        )}

        {/* Now Playing in Theaters */}
        {loading ? (
          <PosterSliderSkeleton count={6} />
        ) : (
          <section className="mb-12">
            <PosterSlider
              title="Now Playing in Theaters"
              subtitle="Currently showing in theaters and IMAX"
              posters={nowPlayingMovies}
              isDark={true}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default DefaultlayoutHOC(HomePage);
