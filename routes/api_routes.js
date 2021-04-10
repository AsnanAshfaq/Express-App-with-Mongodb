// importing
import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  searchUser,
  updateUser,
} from "../controllers/api_controllers.js";
var router = express.Router();

// CREATE
router.post("/", createUser);

// READ
router.get("/", getUsers);

// UPDATE
router.post("/update/:id", updateUser);

//DELETE
router.post("/delete/:id", deleteUser);

// SEARCH & FILTER
router.get("/update/:id?/:experience?/:salary?", searchUser);

export default router;
