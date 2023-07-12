import express from "express";
import usersController from "../controllers/usersController.js";

const router = express.Router();

router.post("/login", usersController.loginUser);
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

export default router;
