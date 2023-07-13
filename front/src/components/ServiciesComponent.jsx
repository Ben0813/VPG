import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesComponent = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Services")
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  }, []);

  const backgroundImage = {
    backgroundImage: `url('http://localhost:3000/uploads/services.jpg')`,
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
      style={backgroundImage}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto p-6 bg-onyx rounded-lg shadow-lg bg-opacity-80">
        <h1 className="text-4xl font-rajdhani text-white mb-4 text-center">
          Les services du Garage VP
        </h1>
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id}>
              <h2 className="text-2xl font-rajdhani text-white text-center underline ">
                {service.name}
              </h2>
              <p className="text-white font-barlow text-center">
                {service.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesComponent;
