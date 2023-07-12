import express from "express";
import multer from "multer";
import carsController from "../controllers/carsController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // 'uploads/' est le dossier où les fichiers seront stockés

router.get("/", carsController.getAllCars);
router.get("/:id", carsController.getCarById);
router.post("/", upload.single("image"), carsController.createCar); // Ajoutez le middleware multer ici
router.put("/:id", upload.single("image"), carsController.updateCar); // Middleware multer pour la route PUT
router.delete("/:id", carsController.deleteCar);

export default router;
