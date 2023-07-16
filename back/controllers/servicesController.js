// Importing the Service model
import Service from "../models/service.js";

// Handler to get all services
export const getAllServices = (req, res) => {
  Service.findAll()
    .then((services) => {
      res.json(services); // Sending the fetched services as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to get a service by ID
export const getServiceById = (req, res) => {
  Service.findByPk(req.params.id)
    .then((service) => {
      res.json(service); // Sending the fetched service as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to create a new service
export const createService = (req, res) => {
  Service.create(req.body)
    .then((service) => {
      res.json(service); // Sending the created service as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to update an existing service
export const updateService = (req, res) => {
  Service.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then(([_, updatedService]) => {
      res.json(updatedService); // Sending the updated service as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to delete a service
export const deleteService = (req, res) => {
  Service.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(204).json({ message: "Service deleted" }); // Sending deletion confirmation as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Exporting all handlers as a controller
const servicesController = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};

export default servicesController;
