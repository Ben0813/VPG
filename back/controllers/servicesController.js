import { sequelize } from "../models/index.js";
import Service from "../models/service.js";

export const getAllServices = (req, res) => {
    Service.findAll()
        .then(services => {
            res.json(services);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });
};

export const getServiceById = (req, res) => {
    Service.findByPk(req.params.id)
        .then(service => {
            res.json(service);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });
};

export const createService = (req, res) => {
    Service.create(req.body)
        .then(service => {
            res.json(service);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });
};

export const updateService = (req, res) => {
    Service.update(req.body, {
        where: {
            id: req.params.id
        },
        returning: true,
        plain: true
        })
        .then(service => {
            res.json(service[1]);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });

};

export const deleteService = (req, res) => {
    Service.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.status(204).json({ message: 'Service deleted' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error'});
        });
};



const servicesController = {
    getAllServices,
    getServiceById,
    createService,
    updateService,
    deleteService
};

export default servicesController;
