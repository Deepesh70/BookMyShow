import React, { useEffect, useState, useContext } from "react";
import MovielayoutHOC from "../layouts/Movie.layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../components/context/Movies.context";
import { FaCcVisa , FaCcApplePay} from "react-icons/fa";
import PostSlider from "../components/PostSlider/PostSlider.component";
import MovieHero from "../components/MovieHero/MovieHero";


const MoviePage = () => {

    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);
    const [cast, setCast ] = useState([]);
    const [ SimilarMovies, setSimilarMovies]= useState([]);
    const [ recommendedmovies, setrecommendedMovies] = useState([]);

    useEffect(() => {
        const requestcast  = async() => {
            const getcast = await axios.get(`/${id}/credits`);
            setCast(getcast.data.cast);
        }
        requestcast();

    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async() => {
            const getSimilarMovies = await axios.get(`${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        }
        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestrecommendedMovies = async() => {
            const getrecommendedMovies = await axios.get(`${id}/recommendations`);
            setrecommendedMovies(getrecommendedMovies.data.results);
        }
        requestrecommendedMovies();
    }, [id]);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/${id}`);
            setMovie(getMovieData.data);
        }
        requestMovie();
    }, [id]);

    const settingCast = {

    }

    const settings = {

    };


    return (
        <>
        <MovieHero />
        <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
            <h1 className="text-gray-800 font-bold text-2xl"> 
                About the movie
            </h1>
            <p>{movie.overview}</p>

        </div>

        
        <div className="my-8">
            <hr />

        </div>
        <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl mb-3">
                Applicable Offers
            </h2>
            <div className="flex flex-col gap-3 lg:flex-row">
                <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                    <div className="w-8 h-8">
                        <FaCcVisa className="w-ful h-full"/>


                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-700 text-xl font-bold">
                            Visa Stream Offer
                        </h3>
                        <p className="text-gray-600">
                            Get 50% off up to INR 150 on all RuPay Card* on BookMyShow Stream.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                    <div className="w-8 h-8">
                        <FaCcApplePay className="w-ful h-full"/>


                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-700 text-xl font-bold">
                            Film Pass
                        </h3>
                        <p className="text-gray-600">
                            Get 50% off up to INR 150 on all RuPay Card* on BookMyShow Stream.
                        </p>
                    </div>
                </div>

            </div>

        </div>

        {/* { cast and crew slider} */}
        <div className="my-8">
            <PostSlider  config={settings}
            title="Recommended Movies"
            posters= {recommendedmovies}
            isDark={false} />

        </div>

        {/* { recommendedmovies slider} */}
        <div className="my-8">
            <hr/>
        </div>
        </div>
        </>
    )
};

export default MovielayoutHOC(MoviePage);
