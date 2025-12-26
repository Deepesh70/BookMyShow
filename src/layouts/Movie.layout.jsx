import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.component";

const MovielayoutHOC = (Component) =>(...props) => {
    return (
        <div>
            <MovieNavbar />
            <Component {...props} />
        </div>
    )
};

export default MovielayoutHOC;