import { useState, useEffect } from "react";
import axios from "axios";

const TestimonialsForm = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Testimonials");
      setTestimonials(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
    <div className="bg-brand-red-lighter p-4 rounded-lg">
      {/* Form to create a new testimonial */}
      <form onSubmit={createTestimonial} className="flex flex-col">
        <input
          className="mb-2 px-2 py-1 border border-brand-dark rounded font-barlow"
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="mb-2 px-2 py-1 border border-brand-dark rounded font-barlow"
          type="text"
          placeholder="Comment"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <input
          className="mb-2 px-2 py-1 border border-brand-dark rounded font-barlow"
          type="number"
          placeholder="Rating"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          className="bg-brand-red hover:bg-brand-red-light text-brand-light py-1 px-2 rounded font-rajdhani"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default TestimonialsForm;
