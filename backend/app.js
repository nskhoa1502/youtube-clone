const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const helmet = require("helmet");
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

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(compression());
app.use(helmet());

// routes

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

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
