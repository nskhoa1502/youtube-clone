const express = require("express");
const { verifyToken } = require("../helpers/verifyToken");
const {
  getComments,
  deleteComment,
  postAddComment,
} = require("../controllers/comment");
const router = express();

// Add comment
router.post("/", verifyToken, postAddComment);

// Delete comment
router.delete("/:commentId", verifyToken, deleteComment);

// Get all comments
router.get("/:videoId", verifyToken, getComments);

module.exports = router;
