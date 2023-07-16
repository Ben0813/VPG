// Importing the Testimonial model
import Testimonial from "../models/testimonial.js";

// Handler to get all testimonials
export const getAllTestimonials = (req, res) => {
  Testimonial.findAll()
    .then((testimonials) => {
      res.json(testimonials); // Sending the fetched testimonials as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to get a testimonial by ID
export const getTestimonialById = (req, res) => {
  Testimonial.findByPk(req.params.id)
    .then((testimonial) => {
      res.json(testimonial); // Sending the fetched testimonial as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to create a new testimonial
export const createTestimonial = (req, res) => {
  Testimonial.create(req.body)
    .then((testimonial) => {
      res.json(testimonial); // Sending the created testimonial as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to update an existing testimonial
export const updateTestimonial = (req, res) => {
  Testimonial.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then(([_, updatedTestimonial]) => {
      res.json(updatedTestimonial); // Sending the updated testimonial as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to delete a testimonial
export const deleteTestimonial = (req, res) => {
  Testimonial.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(204).json({ message: "Testimonial deleted" }); // Sending deletion confirmation as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Exporting all handlers as a controller
const testimonialsController = {
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};

export default testimonialsController;
