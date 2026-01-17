import React, { useState, createContext} from 'react';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movie, setMovie ] = useState({
        id: 0,
        original_title: "",
        overview: "",
        backdrop_path:"",
        poster_path: "",
    });
    const [search, setSearch] = useState("");

    return (
       <MovieContext.Provider value={{ movie, setMovie, search, setSearch }}>
        {children}
       </MovieContext.Provider> 
    )
};

export default MovieProvider;