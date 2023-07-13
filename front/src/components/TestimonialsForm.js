import { useState, useEffect } from "react";
import axios from "axios";

const TestimonialsForm = () => {
  // eslint-disable-next-line
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetchTestimonials();
  }, []);
  // eslint-disable-next-line
  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Testimonials");
      setTestimonials(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // eslint-disable-next-line
  const deleteTestimonial = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Testimonials/${id}`);
      fetchTestimonials();
    } catch (error) {
      console.error(error);
    }
  };

  const createTestimonial = async (event) => {
    event.preventDefault();

    const newData = {
      name: name,
      comment: comment,
      rating: rating,
      approved: false,
      userId: 1, // Replace with the actual user ID
    };

    try {
      await axios.post("http://localhost:3000/Testimonials", newData);
      setName("");
      setComment("");
      setRating("");
      fetchTestimonials();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-khaki-lighter p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-rich mb-6 font-rajdhani">
        Laissez-nous votre commentaire
      </h1>
      <form onSubmit={createTestimonial} className="flex flex-col space-y-4">
        <input
          className="px-3 py-2 border border-metal rounded font-barlow"
          type="text"
          placeholder="Nom"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="px-3 py-2 border border-metal rounded font-barlow"
          type="text"
          placeholder="Commentaire"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <input
          className="px-3 py-2 border border-metal rounded font-barlow"
          type="number"
          placeholder="Note (1-5)"
          required
          min="0"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-raisin text-khaki font-rajdhani rounded hover:bg-metal transition-colors duration-200"
          type="submit"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default TestimonialsForm;
