import { sequelize } from "../models/index.js";
import Testimonial from '../models/testimonial.js';

export const getAllTestimonials = (req, res) => {
    Testimonial.findAll()
        .then(testimonials => {
            res.json(testimonials);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });
};

export const getTestimonialById = (req, res) => {
    Testimonial.findByPk(req.params.id)
        .then(testimonial => {
            res.json(testimonial);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });
};

export const createTestimonial = (req, res) => {
    Testimonial.create(req.body)
        .then(testimonial => {
            res.json(testimonial);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });
};

export const updateTestimonial = (req, res) => {
    Testimonial.update(req.body, {
        where: {
            id: req.params.id
        },
        returning: true,
        plain: true
        })
        .then(testimonial => {
            res.json(testimonial[1]);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });

};

export const deleteTestimonial = (req, res) => {
    Testimonial.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.status(204).json({ message: 'Testimonial deleted' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });

};

const testimonialsController = {
    getAllTestimonials,
    getTestimonialById,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial
};

export default testimonialsController;