import {React, useEffect, useState, useContext} from "react";
import axios from "axios";
import DefaultlayoutHOC from "../layouts/Default.layout";
import Entertainmentcard from "../components/Entertainement/Entertainmentcard.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import PosterSlider from "../components/PostSlider/PostSlider.component";
import { MovieContext } from "../components/context/Movies.context";

const HomePage  =() => {
    const { search } = useContext(MovieContext);
    const [searchResults, setSearchResults] = useState([]);
    const [recommendedMovies, setrecommendedMovies] = useState([]);
    const [premierMovies, setpremierMovies] = useState([]);
    const [onlineStreamEvents, setonlineStreamEvents] = useState([]);



    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get(`/popular`)
            setpremierMovies(getPopularMovies.data.results);
        };

        requestPopularMovies();
    },[])

    useEffect(() => {
        const requestupcomingMovies = async() => {
            const getupcomingMovies = await axios.get(`/upcoming`)
            setonlineStreamEvents(getupcomingMovies.data.results);
        };

        requestupcomingMovies();
    },[])

    useEffect(() => {
        const requestTopRatedMovies = async() => {
            const getTopRatedMovies = await axios.get(`/top_rated`)
            setrecommendedMovies(getTopRatedMovies.data.results);
        };

        requestTopRatedMovies();
    },[])

    useEffect(() => {
    if (search) {
      const requestSearchMovies = async () => {
        try {
          const getSearchMovies = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: { query: search },
          });
          setSearchResults(getSearchMovies.data.results);
        } catch (error) {
          console.error("Search API failed", error);
        }
      };
      requestSearchMovies();
    }
  }, [search]);

  if (search) {
    return (
      <>
     
        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            title={`Search Results for "${search}"`}
            subtitle=""
            posters={searchResults}
            isDark={false}
          />
        </div>
      </>
    );
  }

    return(
       <>
        <HeroCarousal/>
        <div className="container mx-auto px-4 md:px-12 my-8">
            <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
                The best of Entertainment
            </h1>
            <Entertainmentcard />
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
            <PosterSlider
                title="Recommended Movies"
                subject="List of recommended movies"
                posters= {recommendedMovies}
                isDark={false}
            />

        </div> 
        <div className="bg-premier-900 py-12">
            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <div className="hidden md:flex">
                    <img
                     src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png "
                     alt="Rupay"
                     className="w-full h-full" 
                    
                    />

                </div>
            <PosterSlider
                title="Premiers"
                subtitle="Brand new releases every Friday"
                posters= {premierMovies}
                isDark={true}
            />

            </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider 
                title="Online Streaming Event"
                subtitle="Brand new releases every Friday"
                posters= {onlineStreamEvents}
                isDark={false}
            />
        </div>
       </>
    )
}
export default DefaultlayoutHOC(HomePage);
