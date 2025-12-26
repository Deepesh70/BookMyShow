import {React, useState} from "react";
import DefaultlayoutHOC from "../layouts/Default.layout";
import Entertainmentcard from "../components/Entertainement/Entertainmentcard.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import PosterSlider from "../components/PostSlider/PostSlider.component";


const HomePage  =() => {

    const [recommendedMovies, setrecommendedMovies] = useState([]);
    const [premierMovies, setpremierMovies] = useState([]);
    const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

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
                subject="Brand new releases every Friday"
                posters= {premierMovies}
                isDark={true}
            />

            </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider 
                title="Online Streaming Event"
                subject="Brand new releases every Friday"
                posters= {onlineStreamEvents}
                isDark={false}
            />
        </div>
       </>
    )
}
export default DefaultlayoutHOC(HomePage);