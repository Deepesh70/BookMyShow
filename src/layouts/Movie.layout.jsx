import React, { useContext } from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import Footer from '../components/Footer/Footer';
import { MovieContext } from '../components/context/Movies.context';
import { TrailerModal, BookingModal } from '../components/common/MovieModal';

const MovielayoutHOC = (Component) => {
  const WithMovieLayout = (props) => {
    const { activeTrailer, closeTrailer, bookingData, closeBooking } = useContext(MovieContext);

    return (
      <div className="bg-dark-900 text-gray-100 min-h-screen flex flex-col justify-between selection:bg-accent-gold selection:text-dark-900">
        <MovieNavbar />
        <main className="flex-grow pt-16">
          <Component {...props} />
        </main>
        <Footer />

        {/* Global Trailer Modal */}
        <TrailerModal
          isOpen={Boolean(activeTrailer)}
          onClose={closeTrailer}
          movieTitle={activeTrailer?.title || activeTrailer?.original_title}
        />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={Boolean(bookingData)}
          onClose={closeBooking}
          movie={bookingData?.movie}
          plan={bookingData?.plan}
        />
      </div>
    );
  };

  return WithMovieLayout;
};

export default MovielayoutHOC;