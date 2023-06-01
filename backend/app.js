const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const videoRoutes = require("./routes/video");
const commentRoutes = require("./routes/comment");

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

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

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
