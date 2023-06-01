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
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

// Get sub videos => /sub
exports.getSub = async (req, res, next) => {
  try {
    // Find user and access the Subscribed Channels
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedChannels;

    // Find all videos from subsribed channels (limit number later)
    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );

    // flat to prevent nested array, sort from latest
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

// Get tag videos => /tag?tags=js,c,py
exports.getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  //   console.log(tags);
  try {
    // Loop through tags array in Video model to find videos that have same tags
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);

    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

// Get search videos by title => /search?q=abc
exports.getSearchVideos = async (req, res, next) => {
  const query = req.query.q;
  try {
    // Use regex to find videos by title (case-insensitive)
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);

    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
