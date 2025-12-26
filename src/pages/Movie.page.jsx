import React from "react";
import DefaultlayoutHOC from "../layouts/Default.layout";

const MoviePage = () => {
    return (
        <div className="bg-blue-400">
            Movie Page
        </div>
    )
};

export default DefaultlayoutHOC(MoviePage);
