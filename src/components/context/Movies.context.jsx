import React, { useState, createContext, useEffect } from 'react';
import tmdbService from '../../services/tmdb';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    id: 0,
    original_title: '',
    title: '',
    overview: '',
    backdrop_path: '',
    poster_path: '',
    vote_average: 0,
    genres: [],
    runtime: 0,
  });

  const [search, setSearch] = useState('');
  const [myList, setMyList] = useState(() => {
    try {
      const saved = localStorage.getItem('flexwatch_mylist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeTrailer, setActiveTrailer] = useState(null); // { ...movie, videoKey, loading } or null

  useEffect(() => {
    try {
      localStorage.setItem('flexwatch_mylist', JSON.stringify(myList));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [myList]);

  const toggleMyList = (movieItem) => {
    if (!movieItem || !movieItem.id) return;
    setMyList((prev) => {
      const exists = prev.some((m) => m.id === movieItem.id);
      if (exists) {
        return prev.filter((m) => m.id !== movieItem.id);
      }
      return [...prev, movieItem];
    });
  };

  const isInMyList = (movieId) => {
    return myList.some((m) => m.id === movieId);
  };

  // Dynamically fetch the official movie trailer from TMDB videos
  const openTrailer = async (movieItem) => {
    if (!movieItem) return;

    // Open modal immediately with loading state
    setActiveTrailer({
      ...movieItem,
      videoKey: null,
      loading: true,
    });

    try {
      if (movieItem.id) {
        const videos = await tmdbService.getMovieVideos(movieItem.id);
        // Priority: Official YouTube Trailer > YouTube Trailer > YouTube Teaser > Any YouTube Clip
        const trailer =
          videos.find((v) => v.site === 'YouTube' && v.type === 'Trailer' && v.official) ||
          videos.find((v) => v.site === 'YouTube' && v.type === 'Trailer') ||
          videos.find((v) => v.site === 'YouTube' && v.type === 'Teaser') ||
          videos.find((v) => v.site === 'YouTube' && v.type === 'Clip') ||
          videos.find((v) => v.site === 'YouTube');

        setActiveTrailer({
          ...movieItem,
          videoKey: trailer ? trailer.key : null,
          loading: false,
        });
      } else {
        setActiveTrailer({
          ...movieItem,
          videoKey: null,
          loading: false,
        });
      }
    } catch (err) {
      console.error('Error fetching trailer videos from TMDB:', err);
      setActiveTrailer({
        ...movieItem,
        videoKey: null,
        loading: false,
      });
    }
  };

  const closeTrailer = () => setActiveTrailer(null);

  return (
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
        search,
        setSearch,
        myList,
        toggleMyList,
        isInMyList,
        activeTrailer,
        openTrailer,
        closeTrailer,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;