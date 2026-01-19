import React from "react"
import Navbar from "../components/Navbar/Navbar.component";
import Footer from "../components/Footer/Footer";

const DefaultlayoutHOC =(Component) => (...props) => {
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <Footer />
        </div>
    )
};
export default DefaultlayoutHOC;