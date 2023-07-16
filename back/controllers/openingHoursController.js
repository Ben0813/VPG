import OpeningHour from "../models/openingHour.js";

export const getAllOpeningHours = (req, res) => {
  OpeningHour.findAll()
    .then((openingHours) => {
      res.json(openingHours);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export const getOpeningHourById = (req, res) => {
  OpeningHour.findByPk(req.params.id)
    .then((openingHour) => {
      res.json(openingHour);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export const createOpeningHour = (req, res) => {
  OpeningHour.create(req.body)
    .then((openingHour) => {
      res.json(openingHour);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export const updateOpeningHour = (req, res) => {
  OpeningHour.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then(([_, updatedOpeningHour]) => {
      res.json(updatedOpeningHour);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export const deleteOpeningHour = (req, res) => {
  OpeningHour.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Opening Hour deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

const openingHoursController = {
  getAllOpeningHours,
  getOpeningHourById,
  createOpeningHour,
  updateOpeningHour,
  deleteOpeningHour,
};

export default openingHoursController;
