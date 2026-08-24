import React, { useState, createContext, useEffect } from 'react';

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

  const [activeTrailer, setActiveTrailer] = useState(null); // movie object or null
  const [bookingData, setBookingData] = useState(null); // { movie, plan } or null

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

  const openTrailer = (movieItem) => setActiveTrailer(movieItem);
  const closeTrailer = () => setActiveTrailer(null);

  const openBooking = (movieItem, plan = 'Rent') => setBookingData({ movie: movieItem, plan });
  const closeBooking = () => setBookingData(null);

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
        bookingData,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;