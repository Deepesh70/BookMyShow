import React, { useEffect, useState, useContext } from 'react';
import MovielayoutHOC from '../layouts/Movie.layout';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../components/context/Movies.context';
import { FaCcVisa, FaCcApplePay, FaStar, FaTicketAlt } from 'react-icons/fa';
import PostSlider from '../components/PostSlider/PostSlider.component';
import MovieHero from '../components/MovieHero/MovieHero';
import recommendations from '../recommendations.json';
import tmdbService from '../services/tmdb';
import { MovieDetailSkeleton } from '../components/common/LoadingSkeleton';

const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [mlRecommendedMovies, setMlRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch movie data, cast, similar & recommendations
  useEffect(() => {
    let isMounted = true;
    const fetchMovieData = async () => {
      setLoading(true);
      window.scrollTo(0, 0);
      try {
        const [movieData, creditsData, similarData, recsData] = await Promise.all([
          tmdbService.getMovieDetails(id),
          tmdbService.getMovieCredits(id),
          tmdbService.getSimilarMovies(id),
          tmdbService.getRecommendations(id),
        ]);

        if (isMounted) {
          if (movieData) setMovie(movieData);
          if (creditsData?.cast) setCast(creditsData.cast.slice(0, 10));
          if (similarData) setSimilarMovies(similarData);
          if (recsData) setRecommendedMovies(recsData);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching movie details page data:', err);
        if (isMounted) setLoading(false);
      }
    };

    fetchMovieData();
    return () => {
      isMounted = false;
    };
  }, [id, setMovie]);

  // ML Recommendations based on movie title
  useEffect(() => {
    let isMounted = true;
    const fetchMLRecommendations = async () => {
      const title = movie?.title || movie?.original_title;
      if (title && recommendations[title]) {
        const recommendedTitles = recommendations[title];
        try {
          const promises = recommendedTitles.slice(0, 6).map(async (t) => {
            const results = await tmdbService.searchMovies(t);
            return results && results[0] ? results[0] : null;
          });
          const movies = await Promise.all(promises);
          if (isMounted) {
            setMlRecommendedMovies(movies.filter(Boolean));
          }
        } catch (error) {
          console.error('Error fetching ML recommendation:', error);
        }
      } else {
        if (isMounted) setMlRecommendedMovies([]);
      }
    };

    if (movie && (movie.title || movie.original_title)) {
      fetchMLRecommendations();
    }
  }, [movie]);

  if (loading) {
    return <MovieDetailSkeleton />;
  }

  return (
    <div className="bg-dark-900 min-h-screen pb-16">
      {/* Movie Hero Section */}
      <MovieHero />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* About the movie Card */}
        <div className="bg-dark-800/80 rounded-2xl border border-white/10 p-6 md:p-8 mb-10 shadow-xl">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-accent-gold rounded-full inline-block" />
            About the Movie
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
            {movie.overview || 'No synopsis available for this title.'}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/5 pt-6">
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider block">IMDb Rating</span>
              <span className="text-sm font-bold text-accent-gold flex items-center gap-1 mt-1">
                <FaStar className="w-3.5 h-3.5" />
                {Number(movie.vote_average || 0).toFixed(1)} / 10
              </span>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider block">Duration</span>
              <span className="text-sm font-bold text-white mt-1 block">
                {movie.runtime ? `${movie.runtime} min` : '120 min'}
              </span>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider block">Release Date</span>
              <span className="text-sm font-bold text-white mt-1 block">
                {movie.release_date || 'Coming Soon'}
              </span>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider block">Streaming Quality</span>
              <span className="text-sm font-bold text-emerald-400 mt-1 block">4K Ultra HD</span>
            </div>
          </div>
        </div>

        {/* Applicable Offers Section */}
        <div className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaTicketAlt className="text-accent-gold w-4 h-4" />
            Exclusive Stream & Ticket Offers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 bg-gradient-to-r from-amber-500/10 to-dark-800 p-4 border border-accent-gold/30 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-accent-gold/20 flex items-center justify-center text-accent-gold flex-shrink-0">
                <FaCcVisa className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">Visa Stream Privilege</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Get 50% discount up to ₹150 on rental and purchase with any eligible Visa Signature or Infinite card.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-emerald-500/10 to-dark-800 p-4 border border-emerald-500/30 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <FaCcApplePay className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">FlexWatch Annual Pass</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Unlock complimentary 4K rental every month with an active FlexWatch Pass subscription.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cast & Crew Carousel */}
        {cast && cast.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-accent-gold rounded-full inline-block" />
              Cast & Crew
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {cast.map((actor) => (
                <div
                  key={actor.id}
                  className="bg-dark-800/60 rounded-2xl border border-white/5 p-3 text-center group hover:border-accent-gold/40 transition-all shadow-md"
                >
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 border-2 border-white/10 group-hover:border-accent-gold transition-colors">
                    <img
                      src={
                        actor.profile_path
                          ? (actor.profile_path.startsWith('http')
                            ? actor.profile_path
                            : `https://image.tmdb.org/t/p/w200${actor.profile_path}`)
                          : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
                      }
                      alt={actor.name}
                      onError={(e) => {
                        e.target.src =
                          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80';
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-white text-xs font-semibold truncate group-hover:text-accent-gold transition-colors">
                    {actor.name}
                  </h4>
                  <p className="text-gray-500 text-[11px] truncate mt-0.5">
                    {actor.character || 'Cast Member'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ML Recommendations */}
        {mlRecommendedMovies.length > 0 && (
          <section className="mb-12">
            <PostSlider
              title="AI Content Recommendations"
              subtitle="Curated by intelligent cosine similarity on genre, cast & plot"
              posters={mlRecommendedMovies}
              isDark={true}
            />
          </section>
        )}

        {/* Interested & Similar Movies */}
        {similarMovies.length > 0 && (
          <section className="mb-12">
            <PostSlider
              title="More Like This"
              subtitle="Explore similar cinematic titles and franchises"
              posters={similarMovies}
              isDark={true}
            />
          </section>
        )}

        {/* TMDB Recommendations */}
        {recommendedMovies.length > 0 && (
          <section className="mb-12">
            <PostSlider
              title="Recommended For You"
              subtitle="Viewers who watched this also enjoyed"
              posters={recommendedMovies}
              isDark={true}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default MovielayoutHOC(MoviePage);
