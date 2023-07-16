// Importing required modules
import Car from "../models/car.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Converting file URL to path and getting the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Handler to get all cars
export const getAllCars = (req, res) => {
  Car.findAll()
    .then((cars) => {
      res.json(cars); // Sending the fetched cars as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to get a car by ID
export const getCarById = (req, res) => {
  Car.findByPk(req.params.id)
    .then((car) => {
      res.json(car); // Sending the fetched car as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to create a new car
export const createCar = (req, res) => {
  const { make, model, year, mileage, price, userId } = req.body;

  // Checking for required userId
  if (!userId) {
    return res
      .status(400)
      .json({ message: "L'ID de l'utilisateur est requis" });
  }

  // Checking if a file is uploaded
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // The image is stored in the 'uploads' folder on the server
  const imagePath = `/uploads/${req.file.filename}`;

  // Creating a new car
  Car.create({
    ...req.body,
    pictureUrl: imagePath,
  })
    .then((car) => {
      res.json(car); // Sending the created car as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to update an existing car
export const updateCar = (req, res) => {
  Car.findByPk(req.params.id)
    .then((car) => {
      console.log("Found car", car);
      if (!car) {
        return res.status(404).json({ message: "Car not found" }); // Car not found
      }

      // Delete the old image if a new image has been uploaded
      if (req.file) {
        const oldImagePath = path.join(__dirname, "..", car.pictureUrl);
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error("Failed to delete old image:", err); // Error deleting the old image
          }
        });
        const newImagePath = `/uploads/${req.file.filename}`;
        car.pictureUrl = newImagePath;
      }

      // Updating other car properties
      car.make = req.body.make || car.make;
      car.model = req.body.model || car.model;
      car.year = req.body.year || car.year;
      car.mileage = req.body.mileage || car.mileage;
      car.price = req.body.price || car.price;

      console.log("Updating car", car);
      return car.save(); // Saving the updated car
    })
    .then((updatedCar) => {
      console.log("Updated car", updatedCar);
      res.json(updatedCar); // Sending the updated car as response
    })
    .catch((err) => {
      console.log("Error occurred while updating car:", err); // Logging any error
      console.error(err); // Log the full error object
      res.status(500).json({ message: "Server error" }); // Sending error response
    });
};

// Handler to delete a car
export const deleteCar = (req, res) => {
  Car.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.json({ message: "Car Deleted" }); // Sending deletion confirmation as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Exporting all handlers as a controller
const carsController = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};

export default carsController;
