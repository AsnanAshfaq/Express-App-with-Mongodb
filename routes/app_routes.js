// importing
import express from "express";
import {
  getHomePage,
  getAddPage,
  getDeletePage,
  getUpdatePage
} from "../controllers/app_controllers.js";
var router = express.Router();

// get home page
router.get("/", getHomePage);
// get add user page
router.get("/addUser", getAddPage);
// get delete user page
router.get("/deleteUser", getDeletePage);

// UPDATE
router.get("/updateUser", getUpdatePage);

// //DELETE
// router.post("/delete/:id", deleteUser);

// // SEARCH & FILTER
// router.get("/update/:id?/:experience?/:salary?", searchUser);

export default router;
