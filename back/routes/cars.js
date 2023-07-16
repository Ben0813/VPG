import express from "express";
import multer from "multer";
import carsController from "../controllers/carsController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", carsController.getAllCars);
router.get("/:id", carsController.getCarById);

//multer middleware
router.post("/", upload.single("image"), carsController.createCar);
router.put("/:id", upload.single("image"), carsController.updateCar);

router.delete("/:id", carsController.deleteCar);

export default router;
