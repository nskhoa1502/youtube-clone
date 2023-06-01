const express = require("express");
const router = express.Router();
const {
  putUpdateUser,
  deleteUser,
  getUser,
  putSubscribe,
  putUnsubscribe,
  postLike,
  postDislike,
} = require("../controllers/user");

// Update user
router.put("/:id", putUpdateUser);

// Delete user
router.delete("/find/:id", deleteUser);

// Get a user
router.get("/find/:id", getUser);

// Subscribe a user
router.post("/sub/:id", putSubscribe);

// Unsubscribe a user
router.post("/unsub/:id", putUnsubscribe);

// Like a video
router.post("/like/:videoId", postLike);

// Dislike a video
router.post("/dislike/:videoId", postDislike);

module.exports = router;
