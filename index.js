const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`App is running on PORT ${PORT}`))
  .catch((err) => console.log(err));
