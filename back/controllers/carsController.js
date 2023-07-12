import { sequelize } from "../models/index.js";
import Car from "../models/car.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getAllCars = (req, res) => {
  Car.findAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export const getCarById = (req, res) => {
  Car.findByPk(req.params.id)
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export const createCar = (req, res) => {
  const { make, model, year, mileage, price, userId } = req.body;

  if (!userId) {
    return res
      .status(400)
      .json({ message: "L'ID de l'utilisateur est requis" });
  }

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // L'image est stockée dans le dossier 'uploads' sur le serveur
  const imagePath = `/uploads/${req.file.filename}`;

  Car.create({
    ...req.body,
    pictureUrl: imagePath,
  })
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export const updateCar = (req, res) => {
  Car.findByPk(req.params.id)
    .then((car) => {
      console.log("Found car", car);
      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }

      // Supprimer l'ancienne image si une nouvelle image a été téléchargée
      if (req.file) {
        const oldImagePath = path.join(__dirname, "..", car.pictureUrl);
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error("Failed to delete old image:", err);
          }
        });
        const newImagePath = `/uploads/${req.file.filename}`;
        car.pictureUrl = newImagePath;
      }

      // Mettre à jour les autres propriétés de la voiture
      car.make = req.body.make || car.make;
      car.model = req.body.model || car.model;
      car.year = req.body.year || car.year;
      car.mileage = req.body.mileage || car.mileage;
      car.price = req.body.price || car.price;

      console.log("Updating car", car);
      return car.save();
    })
    .then((updatedCar) => {
      console.log("Updated car", updatedCar);
      res.json(updatedCar);
    })
    .catch((err) => {
      console.log("Error occurred while updating car:", err);
      console.error(err); // Log the full error object
      res.status(500).json({ message: "Server error" });
    });
};

export const deleteCar = (req, res) => {
  Car.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.json({ message: "Car Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

const carsController = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};

export default carsController;
