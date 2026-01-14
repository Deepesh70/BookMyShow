import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLG = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image, index) => (
                        <div className="w-full h-56 md:h-80 py-3 relative" key={index}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-cover"
                            />
                            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent rounded-md flex flex-col justify-end p-4">
                                <h3 className="text-white text-xl font-bold truncate">{image.original_title}</h3>
                                <p className="text-white text-xs line-clamp-2">{image.overview}</p>
                            </div>
                        </div>
                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image, index) => (
                        <div className="w-full h-96 px-2 py-3 relative focus:outline-none" key={index}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-cover"
                            />
                            <div className="absolute bottom-0 left-2 right-2 top-0 bg-gradient-to-r from-black/80 via-transparent to-transparent rounded-md z-10" />

                            <div className="absolute bottom-10 left-10 z-20 w-1/3 text-white">
                                <h2 className="text-4xl font-bold mb-2">{image.original_title}</h2>
                                <p className="text-sm mb-4 line-clamp-3 opacity-90">{image.overview}</p>
                                <div className="flex gap-2">
                                    <span className="text-xs bg-red-600 px-2 py-1 rounded">{image.original_language.toUpperCase()}</span>
                                    <span className="text-xs bg-gray-800 px-2 py-1 rounded">Now Playing</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </HeroSlider>

            </div>
        </>
    )
};

export default HeroCarousal;