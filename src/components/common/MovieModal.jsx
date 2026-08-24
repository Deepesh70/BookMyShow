import React from 'react';
import { FaTimes, FaPlay, FaCheckCircle } from 'react-icons/fa';

export const TrailerModal = ({ isOpen, onClose, movieTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-dark-800 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-dark-700">
          <div className="flex items-center gap-2">
            <FaPlay className="text-accent-gold w-4 h-4" />
            <h3 className="text-lg font-bold text-white">Trailer: {movieTitle || 'Movie'}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <iframe
            title={`${movieTitle} Trailer`}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-4 bg-dark-800 text-right">
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const BookingModal = ({ isOpen, onClose, movie, plan = 'Rent' }) => {
  const [confirmed, setConfirmed] = React.useState(false);

  if (!isOpen) return null;

  const price = plan === 'Buy' ? '₹499' : '₹149';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-dark-800 rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-6">
        <button
          onClick={() => {
            setConfirmed(false);
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Order Confirmed!</h3>
            <p className="text-gray-400 text-sm mb-6">
              You now have access to <span className="text-white font-medium">{movie?.title || movie?.original_title}</span> in 4K Ultra HD.
            </p>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="w-full bg-accent-gold hover:bg-accent-goldHover text-dark-900 font-bold py-2.5 rounded-lg transition-colors"
            >
              Start Streaming
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Confirm {plan}</h3>
            <p className="text-gray-400 text-sm mb-6">
              {movie?.title || movie?.original_title}
            </p>

            <div className="bg-dark-700 p-4 rounded-xl border border-white/5 mb-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Quality:</span>
                <span className="text-white font-medium">4K Ultra HD + Dolby Atmos</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Audio:</span>
                <span className="text-white font-medium">English, Hindi, Tamil</span>
              </div>
              <div className="flex justify-between text-sm border-t border-white/5 pt-2">
                <span className="text-gray-300 font-medium">Total Amount:</span>
                <span className="text-accent-gold font-bold text-base">{price}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => onClose()}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setConfirmed(true)}
                className="flex-1 bg-accent-gold hover:bg-accent-goldHover text-dark-900 font-bold py-2.5 rounded-lg transition-colors shadow-lg shadow-accent-gold/20"
              >
                Pay {price}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
