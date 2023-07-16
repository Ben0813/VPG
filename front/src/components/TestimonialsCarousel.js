import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

// parameters for carousel
const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Testimonials");
        const approvedTestimonials = response.data.filter(
          (testimonial) => testimonial.approved
        );
        setTestimonials(approvedTestimonials);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="flex items-center justify-center lg:h-screen h-auto pt-0 bg-gradient-to-b from-khaki to-white">
      <div className="w-full max-w-4xl p-4 bg-metal text-khaki rounded-xl shadow-lg">
        <h1 className="text-3xl font-rajdhani font-bold mb-4">Témoignages</h1>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <div className="testimonial bg-raisin rounded-lg p-4 mb-4 shadow-lg opacity-100 scale-100 transition-all duration-500 ease-in-out transform hover:scale-105">
                <p className="text-base sm:text-lg font-barlow">
                  "{testimonial.comment}"
                </p>
                <p className="text-base sm:text-lg font-barlow mt-4">
                  - {testimonial.name}
                </p>
                <p className="text-base sm:text-lg font-barlow mt-4">
                  Note : {testimonial.rating}/5
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
