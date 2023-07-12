import { useState, useEffect } from "react";
import axios from "axios";

const TestimonialButton = ({ testimonial }) => {
  const [approved, setApproved] = useState(testimonial.approved);

  const toggleApproval = async () => {
    try {
      await axios.put(`http://localhost:3000/Testimonials/${testimonial.id}`, {
        approved: !approved,
      });
      setApproved((prevApproved) => !prevApproved);
    } catch (error) {
      console.error(error);
    }
  };

  const buttonColor = approved ? "bg-brand-red" : "bg-brand-red-lighter";
  const buttonText = approved ? "Approve" : "Unapprove";

  return (
    <div className="flex flex-col bg-brand-light p-4 rounded-md shadow-md">
      <p className="font-rajdhani text-brand-dark">ID: {testimonial.id}</p>
      <p className="font-rajdhani text-brand-dark">Name: {testimonial.name}</p>
      <p className="font-rajdhani text-brand-dark">
        Comment: {testimonial.comment}
      </p>
      <p className="font-rajdhani text-brand-dark">
        Rating: {testimonial.rating}
      </p>
      <button
        className={`${buttonColor} hover:bg-opacity-80 text-white py-2 px-4 rounded font-barlow`}
        onClick={toggleApproval}
      >
        {buttonText}
      </button>
    </div>
  );
};

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Testimonials");
        setTestimonials(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 bg-brand-red-lighter p-4">
      {testimonials.map((testimonial) => (
        <TestimonialButton key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default function App() {
  return <TestimonialsList />;
}
