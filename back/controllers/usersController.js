// Importing necessary libraries and User model
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Handler to get all users
export const getAllUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.json(users); // Sending the fetched users as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to get a user by ID
export const getUserById = (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      res.json(user); // Sending the fetched user as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to create a new user
export const createUser = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.json(user); // Sending the created user as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to update an existing user
export const updateUser = (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then(([_, updatedUser]) => {
      res.json(updatedUser); // Sending the updated user as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to delete a user
export const deleteUser = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(204).json({ message: "User deleted" }); // Sending deletion confirmation as response
    })
    .catch((err) => {
      console.log(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Handler to log in a user
export const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } })
    .then(async (user) => {
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid email or password" }); // Invalid credentials
      }
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET
      );
      res.json({ token }); // Sending the token as response
    })
    .catch((err) => {
      console.error(err); // Logging any error
      res.status(500).json({ message: "Internal Server Error" }); // Sending error response
    });
};

// Exporting all handlers as a controller
const userController = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};

export default userController;
