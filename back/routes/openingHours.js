import express from 'express';
const router = express.Router();
import openinghoursController from '../controllers/openinghoursController.js';

router.get('/', openinghoursController.getAllOpeningHours);
router.get('/:id', openinghoursController.getOpeningHourById);
router.post('/', openinghoursController.createOpeningHour);
router.put('/:id', openinghoursController.updateOpeningHour);
router.delete('/:id', openinghoursController.deleteOpeningHour);


export default router;