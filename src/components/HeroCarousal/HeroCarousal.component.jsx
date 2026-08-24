import React, { useState, useEffect, useContext } from 'react';
import HeroSlider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaStar, FaPlay, FaCheck, FaPlus } from 'react-icons/fa';
import { MovieContext } from '../context/Movies.context';
import tmdbService from '../../services/tmdb';
import { HeroSkeleton } from '../common/LoadingSkeleton';

const HeroCarousal = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const { openTrailer, toggleMyList, isInMyList } = useContext(MovieContext);

  useEffect(() => {
    let isMounted = true;
    const fetchMovies = async () => {
      try {
        const results = await tmdbService.getNowPlaying();
        if (isMounted) {
          setMovies(results || []);
          setLoading(false);
        }
      } catch (e) {
        console.error('Failed to load hero carousel movies', e);
        if (isMounted) setLoading(false);
      }
    };
    fetchMovies();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <HeroSkeleton />;
  }

  if (!movies.length) {
    return null;
  }

  const settings = {
    arrows: false,
    dots: true,
    slidesToShow: 1,
    infinite: movies.length > 1,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const getGenreLabels = (movie) => {
    if (movie.genres && movie.genres.length) {
      return movie.genres.slice(0, 3).map((g) => g.name);
    }
    const genreMap = {
      28: 'Action',
      12: 'Adventure',
      16: 'Animation',
      35: 'Comedy',
      80: 'Crime',
      99: 'Documentary',
      18: 'Drama',
      10751: 'Family',
      14: 'Fantasy',
      36: 'History',
      27: 'Horror',
      10402: 'Music',
      9648: 'Mystery',
      10749: 'Romance',
      878: 'Sci-Fi',
      53: 'Thriller',
      10752: 'War',
    };
    return (
      movie.genre_ids?.slice(0, 3).map((id) => genreMap[id]).filter(Boolean) || [
        'Blockbuster',
      ]
    );
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '85vh', minHeight: '520px' }}>
      <HeroSlider {...settings}>
        {movies.slice(0, 6).map((movie, index) => {
          const isSaved = isInMyList ? isInMyList(movie.id) : false;
          const backdrop = movie.backdrop_path
            ? (movie.backdrop_path.startsWith('http')
              ? movie.backdrop_path
              : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`)
            : 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80';

          return (
            <div key={movie.id || index}>
              <div className="relative w-full" style={{ height: '85vh', minHeight: '520px' }}>
                {/* Backdrop Image */}
                <img
                  src={backdrop}
                  alt={movie.title || movie.original_title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent z-10" />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div
                      className={`max-w-2xl transition-all duration-700 ${
                        activeSlide === index
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-6'
                      }`}
                    >
                      {/* Genres Badge List */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-accent-gold text-dark-900 font-extrabold text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          Featured
                        </span>
                        {getGenreLabels(movie).map((genre, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium text-gray-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 uppercase tracking-tight drop-shadow-lg">
                        {movie.title || movie.original_title}
                      </h1>

                      {/* Rating & Release */}
                      <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-lg border border-white/10">
                          <FaStar className="text-accent-gold w-4 h-4" />
                          <span className="text-accent-gold font-bold">
                            {Number(movie.vote_average || 0).toFixed(1)}
                          </span>
                          <span className="text-gray-400 text-xs">/ 10</span>
                        </div>
                        {movie.release_date && (
                          <span className="text-gray-400 font-medium">
                            {new Date(movie.release_date).getFullYear()}
                          </span>
                        )}
                        <span className="text-xs px-2 py-0.5 bg-white/10 rounded text-gray-300 border border-white/10">
                          4K UHD
                        </span>
                      </div>

                      {/* Synopsis */}
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 max-w-xl drop-shadow">
                        {movie.overview}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => openTrailer && openTrailer(movie)}
                          className="flex items-center gap-2 bg-accent-gold hover:bg-accent-goldHover text-dark-900 font-extrabold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-accent-gold/25"
                        >
                          <FaPlay className="w-3.5 h-3.5" />
                          <span>Watch Trailer</span>
                        </button>

                        <Link
                          to={`/movie/${movie.id}`}
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 border border-white/10 backdrop-blur-md"
                        >
                          <span>Details & Tickets</span>
                        </Link>

                        <button
                          onClick={() => toggleMyList && toggleMyList(movie)}
                          aria-label={isSaved ? 'In My List' : 'Add to My List'}
                          className={`p-3.5 rounded-xl border transition-all duration-200 ${
                            isSaved
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                              : 'bg-white/10 hover:bg-white/20 text-white border-white/10'
                          }`}
                        >
                          {isSaved ? <FaCheck className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </HeroSlider>

      {/* Bottom Gradient for seamless integration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent z-30 pointer-events-none" />
    </div>
  );
};

export default HeroCarousal;