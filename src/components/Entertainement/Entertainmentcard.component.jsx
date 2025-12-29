import React from "react";
 import Slider from "react-slick";


const Entertainmentcard =(props)=>{
    return (
        <>
        <div className="w-full h-30 px-2">
            <img className="w-full h-full rounded-lg"
                src={props.src}
                alt="entertainment"

            />

        </div>
        </>
    )
};

const EntertainmentcardSlider =() => {
    
    const EntertainmentImage = [

    ];

    const settings = {
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsove: [
            {
                breakpoint:1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            },
        }
        ]
    };
    
    return (
        <>
        <Slider {...settings}>
            {EntertainmentImage.map((image, index) => {
                return <Entertainmentcard src={image} key={index} />
            })}
        </Slider>
        </>
    )
}

export default EntertainmentcardSlider;