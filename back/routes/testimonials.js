import express from 'express';
const router = express.Router();
import testimonialsController from '../controllers/testimonialsController.js';

router.get('/', testimonialsController.getAllTestimonials);
router.get('/:id', testimonialsController.getTestimonialById);
router.post('/', testimonialsController.createTestimonial);
router.put('/:id', testimonialsController.updateTestimonial);
router.delete('/:id', testimonialsController.deleteTestimonial);


export default router;