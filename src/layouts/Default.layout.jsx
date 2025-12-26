import React from "react"
import Navbar from "../components/Navbar/Navbar.component";

const DefaultlayoutHOC =(Component) => (...props) => {
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <div>footer</div>
        </div>
    )
};
export default DefaultlayoutHOC;