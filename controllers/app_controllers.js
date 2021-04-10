import User from "../models/user_model.js";
import _ from "lodash";
import fetch from "node-fetch";
// Home Page
export const getHomePage = async (req, res) => {
  // get all the users from the database
  //   sends the response with template and the  data
  fetch("http://localhost:3000/user").then((user) => {
    user.json().then((user) => res.status(200).render("Home", { user, user }));
  });
};

export const getAddPage = async (req, res) => {
  // get all the users from the database
  //   sends the response with template and the  data
  res.status(200).render("Add Page");
};

export const getDeletePage = async (req, res) => {
  // get all the users from the database
  //   sends the response with template and the  data
  res.status(200).render("Delete Page");
};


export const getUpdatePage = async (req, res) => {
  // get all the users from the database
  //   sends the response with template and the  data
  res.status(200).render("Update Page");
};

