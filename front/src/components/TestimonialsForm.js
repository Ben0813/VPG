import { useState } from "react";
import axios from "axios";

const TestimonialsForm = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const createTestimonial = async (event) => {
    event.preventDefault();

    const newData = {
      name,
      comment,
      rating,
      approved: false,
      userId: 14,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/Testimonials`,
        newData
      );
      setName("");
      setComment("");
      setRating("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-khaki-lighter p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-rich mb-6 font-rajdhani">
        Laissez-nous vos commentaires
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
        <textarea
          className="px-3 py-2 border border-metal rounded font-barlow"
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
          min="1"
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
