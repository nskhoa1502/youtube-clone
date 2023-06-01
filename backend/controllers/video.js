const Video = require("../models/Video");
const User = require("../models/User");

// Create a video ==> /
exports.postAddVideo = async (req, res, next) => {
  try {
    const newVideo = new Video({ userId: req.user.id, ...req.body });
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

// Update a video ==> /:id
exports.putVideo = async (req, res, next) => {
  try {
    // Find video
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found"));

    // Check owner => update
    if (req.user.id === video.userId) {
      const updatedUser = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } else {
      next(createError(403, "You can update only your videos"));
    }
  } catch (err) {
    next(err);
  }
};

// Delete a video => /:id
exports.deleteVideo = async (req, res, next) => {
  try {
    // Find video
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found"));

    // Check owner => update
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("Video has been deleted");
    } else {
      next(createError(403, "You can delete only your videos"));
    }
  } catch (err) {
    next(err);
  }
};

// Get Video => /find/:id
exports.getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status.json(video);
  } catch (err) {
    next(err);
  }
};

// Put add views count => /view/:id
exports.putAddView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status.json("View has been increased");
  } catch (err) {
    next(err);
  }
};

// Get trending videos => /trending
exports.getTrend = async (req, res, next) => {
  try {
    // Sort video that has most views
    const videos = await Video.find().sort({ views: -1 });
    res.status.json(videos);
  } catch (err) {
    next(err);
  }
};

// Get random videos => /random
exports.getRandom = async (req, res, next) => {
  try {
    // Get 40 random videos
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status.json(videos);
  } catch (err) {
    next(err);
  }
};

// Get sub videos => /sub
exports.getSub = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedChannels;

    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
