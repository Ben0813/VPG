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

  const buttonColor = approved ? "bg-green" : "bg-red";
  const buttonText = approved ? "Approuvé" : "Non approuvé";

  return (
    <div className="flex flex-col bg-metal text-white p-4 rounded-xl shadow-md">
      <p className="font-rajdhani">ID: {testimonial.id}</p>
      <p className="font-rajdhani">Nom: {testimonial.name}</p>
      <p className="font-rajdhani">Commentaire: {testimonial.comment}</p>
      <p className="font-rajdhani">Note: {testimonial.rating}</p>
      <button
        className={`${buttonColor} hover:bg-raisin-light text-white py-2 px-4 rounded font-barlow`}
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
    <div className="min-h-screen bg-khaki p-4">
      <h2 className="text-3xl font-rajdhani text-center mb-4">
        Gestion des commentaires
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialButton key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return <TestimonialsList />;
}
