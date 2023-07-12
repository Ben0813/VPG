import React, { useState, useEffect } from "react";
import axios from "axios";

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="flex items-center justify-center h-screen bg-brand-red-lighter">
      <div className="w-full max-w-md p-4">
        <h1 className="text-3xl font-bold text-brand-light mb-4 font-rajdhani">
          Témoignages
        </h1>
        <div className="relative">
          <div className="carousel">
            <div
              className={`testimonial bg-brand-light rounded-lg p-4 mb-4 shadow-lg opacity-100 scale-100 transition duration-500 ease-in-out`}
            >
              {testimonials.length > 0 && (
                <>
                  <p className="text-brand-dark font-barlow">
                    {testimonials[activeIndex].comment}
                  </p>
                  <p className="text-brand-dark font-barlow">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-brand-dark font-barlow">
                    {testimonials[activeIndex].rating}/5
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
