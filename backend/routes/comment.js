const express = require("express");
const { verifyToken } = require("../helpers/verifyToken");
const {
  getComments,
  deleteComment,
  postAddComment,
} = require("../controllers/comment");
const router = express();

// http://localhost:8080/api/comments/

// Add comment
router.post("/", verifyToken, postAddComment);

// Delete comment
router.delete("/:commentId", verifyToken, deleteComment);

// Get all comments
router.get("/:videoId", getComments);

module.exports = router;
