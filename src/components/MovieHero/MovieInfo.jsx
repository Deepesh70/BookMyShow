import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/Movies.context';


const MovieInfo = () => {
    const [ isOpen, setisOpen ] = useState(false);
    const [price, setPrice] = useState(0);
    const { movie } = useContext(MovieContext);

    const genres = MovieInfo.genres?.map(({ name }) => name).join(", ");
    return(
        <>
         <div className="flex flex-col-reverse gap-3 px-4 my-3">
                  <h1 className='text-white text-5xl font-bold'>
                    {movie.original_title}
                  </h1>
                    <div className="text-white flex flex-col gap-2 ">
                        <h4>
                            4K rating
                        </h4>
                        <h4>English, Hindi, Kannada, Tamil , Telgu</h4>
                        <h4>
                            {movie.runtime} min | {genres}
                        </h4>
                    </div>

                
                </div>
                 <div className="flex items-center gap-3 w-full  text-xl">
                    <button  className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Rent $149
                    </button>
                    <button  className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Buy $559
                    </button>

                </div>
        
        </>
    )
}



export default MovieInfo