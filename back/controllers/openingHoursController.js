// Importing the OpeningHour model
import OpeningHour from "../models/openingHour.js";

// Handler to get all opening hours
export const getAllOpeningHours = (req, res) => {
  OpeningHour.findAll()
    .then((openingHours) => {
      res.json(openingHours); // Sending the fetched opening hours as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to get a opening hour by ID
export const getOpeningHourById = (req, res) => {
  OpeningHour.findByPk(req.params.id)
    .then((openingHour) => {
      res.json(openingHour); // Sending the fetched opening hour as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to create a new opening hour
export const createOpeningHour = (req, res) => {
  OpeningHour.create(req.body)
    .then((openingHour) => {
      res.json(openingHour); // Sending the created opening hour as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to update an existing opening hour
export const updateOpeningHour = (req, res) => {
  OpeningHour.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then(([_, updatedOpeningHour]) => {
      res.json(updatedOpeningHour); // Sending the updated opening hour as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to delete a opening hour
export const deleteOpeningHour = (req, res) => {
  OpeningHour.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Opening Hour deleted" }); // Sending deletion confirmation as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Exporting all handlers as a controller
const openingHoursController = {
  getAllOpeningHours,
  getOpeningHourById,
  createOpeningHour,
  updateOpeningHour,
  deleteOpeningHour,
};

export default openingHoursController;
