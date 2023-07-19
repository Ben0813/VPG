import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/Services`)
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  }, []);

  const backgroundImage = {
    backgroundImage: `url('${process.env.REACT_APP_API_URL}/uploads/services.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={backgroundImage}
    >
      <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto p-2 sm:p-4 lg:p-6 bg-onyx rounded-lg shadow-lg bg-opacity-80">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-khaki mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-center shadow-text transition-all duration-500 ease-in-out transform hover:scale-105">
          Garage Vincent Parrot
        </h1>
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-rajdhani text-white text-center underline ">
                {service.name}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white font-barlow text-center">
                {service.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
//
