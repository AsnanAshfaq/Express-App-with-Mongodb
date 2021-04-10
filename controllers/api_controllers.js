import User from "../models/user_model.js";
import _ from "lodash";
import mongoose from "mongoose";

// READ
export const getUsers = (req, res) => {
  // get all the users from the database
  User.find({}, (err, doc) => {
    if (err) res.status(500).send("Error while getting data");
    const userList = [];
    doc.forEach((user) => {
      userList.push(user);
    });

    res.status(200).json(userList);
  });
};

// CREATE
export const createUser = (req, res) => {
  const userData = req.body;
  const user = new User({
    first_name: userData.firstname,
    last_name: userData.lastname,
    date_of_birth: userData.date,
    experience: userData.experience,
    salary: userData.salary,
  });

  user
    .save()
    .then((res) => res.status(201).redirect("http://localhost:3000/"))
    .catch((err) => res.status(500).send("An Error Occured"));
};

// UPDATE
export const updateUser = async (req, res) => {
  // update a users from the database
  const { id, firstname, lastname, date, experience, salary } = req.body;
  const result = await User.updateOne(
    { _id: id },
    {
      first_name: firstname,
      last_name: lastname,
      date_of_birth: date,
      experience: experience,
      salary: salary,
    }
  );
  res.status(200).redirect("http://localhost:3000/");
};

// DELETE
export const deleteUser = async (req, res) => {
  // delete a the user from the database
  const userID = req.body.id;
  console.log(typeof userID);
  const result = await User.deleteOne({ _id: mongoose.ObjectId(userID) });
    // document has been deleted
    res.status(200).redirect("http://localhost:3000/");
  
};

// SEARCH AND FILTER
export const searchUser = async (req, res) => {
  // get a the users from the database
  var queryParams = {
    _id: req.params.id || null,
    experience: req.params.experience || null,
    salary: req.params.salary || null,
  };
  // removes falsey params
  queryParams = _.omitBy(queryParams, _.isNull);

  const result = await User.find(queryParams, (err, docs) => {
    if (err) console.log(err);
    return docs;
  });
  res.status(200).json(result);
};
