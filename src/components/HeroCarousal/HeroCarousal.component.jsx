import React,{ useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow , PrevArrow} from "./Arrows.component";

const HeroCarousal =() => {
    const [images, setimages] = useState([1,2,3,4]);

    const settingsLG = {
        arrows: true,
        slideToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,

    };

    const settings = {
        arrows: true,
        slideToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow:<NextArrow/> ,
        prevArrow:<PrevArrow/> ,
    };
        
    return (
        <>
        <div className="lg:hidden">
            <HeroSlider {...settings}>
                {images.map((images) => (
                    <div className="w-full h-56 md:h-80 py-3">
                    <img
                    src=""
                    alt="Hero Banner"
                    className="w-full h-full rounded-md object-cover"
                    />
                    </div>
                ))}
            </HeroSlider>
            </div>
        <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
                {images.map((images) => (
                    <div className="w-full h-96 px-2 py-3">
                    <img
                    src=""
                    alt="Hero Banner"
                    className="w-full h-full rounded-md object-cover"
                    />
                    </div>
                ))}
            </HeroSlider>

        </div>
            </>
    )
};

export default HeroCarousal;