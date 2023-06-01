const Comment = require("../models/Comment");
const Video = require("../models/Video");
const { createError } = require("../utils/error");

// Add new comment => /
exports.postAddComment = async (req, res, next) => {
  try {
    const newComment = new Comment({ ...req.body, userId: req.user.id });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    next(err);
  }
};

// Delete comment => /:commentId
exports.deleteComment = async (req, res, next) => {
  try {
    // Check
    const comment = await Comment.findById(res.params.commentId);
    const video = await Video.findById(res.params.commentId);

    // 1. Check if comment belongs to login user
    // 2. Check if login user is owner of video
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.commentId);
      res.status(200).json("The comment has been deleted");
    } else next(createError(403, "You can only delete your comment"));
  } catch (err) {
    next(err);
  }
};

// Get all comments => /:videoId
exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
