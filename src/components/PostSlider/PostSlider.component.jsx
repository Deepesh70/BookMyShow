import React from 'react';
import Slider from 'react-slick';
import Poster from '../poster/Poster.component';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      aria-label="Next slide"
      className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-dark-800/90 text-white hover:text-accent-gold border border-white/10 hover:border-accent-gold/40 backdrop-blur-md shadow-xl transition-all hover:scale-110 -mr-3"
    >
      <BiChevronRight className="w-6 h-6" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      aria-label="Previous slide"
      className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-dark-800/90 text-white hover:text-accent-gold border border-white/10 hover:border-accent-gold/40 backdrop-blur-md shadow-xl transition-all hover:scale-110 -ml-3"
    >
      <BiChevronLeft className="w-6 h-6" />
    </button>
  );
};

const PostSlider = (props) => {
  const { posters = [], title, subtitle, isDark = true, onSeeAll } = props;

  if (!Array.isArray(posters) || posters.length === 0) {
    return null;
  }

  const settings = {
    infinite: posters.length > 5,
    speed: 500,
    slidesToShow: Math.min(6, posters.length),
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(5, posters.length),
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(4, posters.length),
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(3, posters.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(2, posters.length),
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-10 relative">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-4 px-1">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-5 bg-accent-gold rounded-full inline-block" />
            {title}
          </h3>
          {subtitle && <p className="text-xs md:text-sm text-gray-400 mt-1 pl-3.5">{subtitle}</p>}
        </div>
        {onSeeAll && (
          <button
            onClick={onSeeAll}
            className="text-accent-gold text-xs md:text-sm font-semibold hover:text-accent-goldHover transition-colors flex items-center gap-1 hover:underline"
          >
            <span>Explore All</span>
            <BiChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Slider Container */}
      <div className="w-full relative px-1">
        <Slider {...settings}>
          {posters.map((movie, index) => (
            <Poster {...movie} isDark={isDark} key={movie.id || index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PostSlider;