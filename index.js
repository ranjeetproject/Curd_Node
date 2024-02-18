const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/curd_data")
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((err) => console.log("Error connecting"));
