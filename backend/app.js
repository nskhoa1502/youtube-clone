const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Connect to database
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("First connection to mongoDB");
    })
    .catch((err) => {
      throw err;
    });
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB reconnected");
});

// Listen to port
app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server running at port ${process.env.PORT}`);
});
