import React, { useState } from 'react';
import DefaultlayoutHOC from '../layouts/Default.layout';
import { MOCK_PLAYS } from '../data/mockMovies';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';

const PlayPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookingPlay, setBookingPlay] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const categories = ['All', 'Theatre & Drama', 'Musical Broadway', 'Standup Comedy', 'Classical Music'];

  const filteredPlays =
    selectedCategory === 'All'
      ? MOCK_PLAYS
      : MOCK_PLAYS.filter((p) => p.category === selectedCategory);

  const handleBook = (play) => {
    setBookingPlay(play);
    setConfirmed(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="mb-10 text-center sm:text-left bg-gradient-to-r from-accent-gold/10 via-dark-800 to-dark-800 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl relative z-10">
          <span className="bg-accent-gold text-dark-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
            Live Performances
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
            Plays, Concerts & Comedy Nights
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Experience world-class theatre, live stand-up spectacles, and musical extravaganzas in top venues near you.
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap border transition-all ${
              selectedCategory === cat
                ? 'bg-accent-gold text-dark-900 border-accent-gold font-bold shadow-lg shadow-accent-gold/20 scale-105'
                : 'bg-dark-800 text-gray-300 border-white/10 hover:border-accent-gold/40 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Plays Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredPlays.map((play) => (
          <div
            key={play.id}
            className="bg-dark-800/90 rounded-3xl border border-white/10 overflow-hidden hover:border-accent-gold/40 transition-all duration-300 shadow-xl flex flex-col sm:flex-row group"
          >
            {/* Image */}
            <div className="sm:w-2/5 relative overflow-hidden aspect-video sm:aspect-auto">
              <img
                src={play.image}
                alt={play.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-accent-gold text-xs font-bold border border-white/10">
                {play.language}
              </div>
            </div>

            {/* Content */}
            <div className="sm:w-3/5 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider block mb-1">
                  {play.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">
                  {play.title}
                </h3>

                <div className="space-y-1.5 text-xs text-gray-400 mb-4">
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-accent-gold w-3.5 h-3.5 flex-shrink-0" />
                    <span>{play.date}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent-gold w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{play.venue}</span>
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {play.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Book */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <span className="text-[11px] text-gray-500 block">Starting from</span>
                  <span className="text-sm font-bold text-white">{play.price}</span>
                </div>
                <button
                  onClick={() => handleBook(play)}
                  className="inline-flex items-center gap-1.5 bg-accent-gold hover:bg-accent-goldHover text-dark-900 text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all shadow-md hover:scale-105"
                >
                  <FaTicketAlt className="w-3 h-3" />
                  <span>Book Tickets</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Dialog Modal */}
      {bookingPlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-dark-800 rounded-3xl border border-white/10 p-6 shadow-2xl">
            <button
              onClick={() => setBookingPlay(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {confirmed ? (
              <div className="text-center py-6 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Booking Confirmed!</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Your e-ticket for <span className="text-white font-medium">{bookingPlay.title}</span> has been issued.
                </p>
                <button
                  onClick={() => setBookingPlay(null)}
                  className="w-full bg-accent-gold text-dark-900 font-bold py-2.5 rounded-xl"
                >
                  View My Tickets
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Book Live Event</h3>
                <p className="text-accent-gold text-sm font-semibold mb-4">{bookingPlay.title}</p>
                <div className="bg-dark-700/60 p-4 rounded-2xl border border-white/5 space-y-2 mb-6 text-xs text-gray-300">
                  <p>
                    <strong className="text-white">Venue:</strong> {bookingPlay.venue}
                  </p>
                  <p>
                    <strong className="text-white">Schedule:</strong> {bookingPlay.date}
                  </p>
                  <p>
                    <strong className="text-white">Tier:</strong> Premium VIP Box ({bookingPlay.price})
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setBookingPlay(null)}
                    className="flex-1 bg-white/10 text-white font-medium py-2.5 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setConfirmed(true)}
                    className="flex-1 bg-accent-gold hover:bg-accent-goldHover text-dark-900 font-bold py-2.5 rounded-xl shadow-lg shadow-accent-gold/20"
                  >
                    Confirm & Pay
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DefaultlayoutHOC(PlayPage);