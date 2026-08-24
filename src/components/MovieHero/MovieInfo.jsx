import React, { useContext } from 'react';
import { MovieContext } from '../context/Movies.context';
import { FaStar, FaPlay, FaShoppingBag, FaBookmark, FaCheck } from 'react-icons/fa';

const MovieInfo = ({ movie }) => {
  const { openBooking, openTrailer, toggleMyList, isInMyList } = useContext(MovieContext);

  if (!movie) return null;

  const genres =
    movie.genres?.map((g) => g.name).join(', ') ||
    (movie.genre_ids ? 'Action, Adventure, Sci-Fi' : 'Feature Film');

  const isSaved = isInMyList ? isInMyList(movie.id) : false;

  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      {/* Title */}
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-md">
        {movie.title || movie.original_title}
      </h1>

      {/* Meta Bar */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
        <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-lg border border-white/10 text-accent-gold font-bold">
          <FaStar className="w-4 h-4" />
          <span>{Number(movie.vote_average || 0).toFixed(1)}</span>
          <span className="text-gray-400 text-xs font-normal">/ 10</span>
        </div>

        {movie.runtime ? (
          <span className="bg-white/10 px-2.5 py-1 rounded-lg text-xs font-medium text-white border border-white/10">
            {movie.runtime} min
          </span>
        ) : null}

        <span className="bg-white/10 px-2.5 py-1 rounded-lg text-xs font-medium text-white border border-white/10">
          4K Ultra HD
        </span>

        {movie.release_date && (
          <span className="text-gray-400 text-xs">
            {new Date(movie.release_date).getFullYear()}
          </span>
        )}
      </div>

      {/* Genres & Languages */}
      <div className="text-xs sm:text-sm text-gray-300 space-y-1">
        <p>
          <span className="text-gray-500 font-medium">Genres: </span>
          <span className="text-white font-medium">{genres}</span>
        </p>
        <p>
          <span className="text-gray-500 font-medium">Available Audio: </span>
          <span className="text-gray-300">English (Original), Hindi, Tamil, Telugu</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          onClick={() => openBooking && openBooking(movie, 'Rent')}
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-goldHover text-dark-900 font-extrabold px-6 py-3 rounded-xl transition-all shadow-lg shadow-accent-gold/20 hover:scale-105"
        >
          <FaPlay className="w-3.5 h-3.5" />
          <span>Rent for ₹149</span>
        </button>

        <button
          onClick={() => openBooking && openBooking(movie, 'Buy')}
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-dark-700 hover:bg-dark-600 text-white font-bold px-6 py-3 rounded-xl border border-white/15 transition-all hover:scale-105"
        >
          <FaShoppingBag className="w-3.5 h-3.5 text-accent-gold" />
          <span>Buy for ₹499</span>
        </button>

        <button
          onClick={() => openTrailer && openTrailer(movie)}
          className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-3 rounded-xl border border-white/10 transition-colors"
          title="Watch Trailer"
        >
          <FaPlay className="w-3 h-3 text-accent-gold" />
          <span className="text-sm">Trailer</span>
        </button>

        <button
          onClick={() => toggleMyList && toggleMyList(movie)}
          className={`p-3.5 rounded-xl border transition-colors ${
            isSaved
              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
              : 'bg-white/10 hover:bg-white/20 text-white border-white/10'
          }`}
          title={isSaved ? 'Remove from My List' : 'Add to My List'}
        >
          {isSaved ? <FaCheck className="w-4 h-4" /> : <FaBookmark className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;