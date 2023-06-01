const { createError } = require("../utils/error");
const User = require("../models/User");

// Update user ==> /:id
exports.putUpdateUser = async (req, res, next) => {
  //   console.log(req.user);
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

// Delete user ==> /:id
exports.deleteUser = async (req, res, next) => {
  //   console.log(req.user);
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// subscribe ==> /:channelId
exports.putSubscribe = async (req, res, next) => {
  try {
    // Find the login user and push channelId
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedChannels: req.params.channelId },
    });

    // Find the channel and increment the subscriber count by 1
    await User.findByIdAndUpdate(req.params.channelId, {
      $inc: { subscribers: 1 },
    });

    res.status(200).json("Subscription successful");
  } catch (err) {
    next(err);
  }
};

exports.putUnsubscribe = async (req, res, next) => {
  try {
    // Find the login user and remove channelId
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedChannels: req.params.channelId },
    });

    // Find the channel and decrement the subscriber count by 1
    await User.findByIdAndUpdate(req.params.channelId, {
      $inc: { subscribers: -1 },
    });

    res.status(200).json("Unsubscription successful");
  } catch (err) {
    next(err);
  }
};

exports.postLike = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

exports.postDislike = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

//==================TEST===============//

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
exports.getLoginUser = async (req, res, next) => {
  try {
    const loginUser = await User.findById(req.user.id);

    res.status(200).json(loginUser);
  } catch (err) {
    next(err);
  }
};
