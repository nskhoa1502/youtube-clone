const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { createError } = require("../utils/error");
const jwt = require("jsonwebtoken");

exports.postSignup = async (req, res, next) => {

  try {
    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    //Create new User
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).json({ message: "User has been created" });
  } catch (err) {
    next(err);
  }
};
exports.postSignin = async (req, res, next) => {

  try {
    // Find user in database
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not found"));

    // Compare password
    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong credentials!"));

    // Sign access token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

// Google Auth => /google
exports.postGoogleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // Find user in database
    // 1. True -> Create access token and send back user info
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      user._doc;

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({ ...req.body, fromGoogle: true });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser);
    }
  } catch (err) {
    next(err);
  }
};

// Logout -> /logout

exports.postLogout = (req, res, next) => {
  try {
    // Clear the access_token cookie by setting it to an empty string and expiring it immediately
    res
      .cookie("access_token", "", {
        httpOnly: true,
        expires: new Date(0),
      })
      .status(200)
      .json({ message: "Logged out successfully" });
  } catch (err) {
    next(err);
  }
};
