//importing
import express from "express";
import mongoose from "mongoose";
import UserAPIRoutes from "./routes/api_routes.js";
import AppRoutes from "./routes/app_routes.js";
import _ from "lodash";

// app config
var app = express();
app.set("view engine", "ejs");

// DB config
const connection_url =
  "mongodb+srv://Asnan:Asnan@wrtieliner.lfkei.mongodb.net/User?retryWrites=true&w=majority";
mongoose
  .connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to DB");
    // listener after connecting to DB
    app.listen(3000, function () {
      console.log("Listening on port 3000!");
    });
  })
  .catch((err) => console.log(err));

//middlewares
app.use(express.json()); // support json encoded bodies

app.use(express.static("public")); //middleware for serving static files
app.use(express.urlencoded({ extended: true }));

app.use(AppRoutes);
app.use("/user", UserAPIRoutes);
