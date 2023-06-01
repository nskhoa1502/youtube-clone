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
  getAllUsers,
  getLoginUser,
} = require("../controllers/user");
const { verifyToken } = require("../helpers/verifyToken");

// Update user
router.put("/:id", verifyToken, putUpdateUser);

// Delete user
router.delete("/:id", verifyToken, deleteUser);

// Get a user
router.get("/find/:id", getUser);

// Subscribe a channel
router.put("/sub/:channelId", verifyToken, putSubscribe);

// Unsubscribe a channel
router.put("/unsub/:channelId", verifyToken, putUnsubscribe);

// Like a video
router.post("/like/:videoId", verifyToken, postLike);

// Dislike a video
router.post("/dislike/:videoId", verifyToken, postDislike);

//==============TEST==============//

// Get all users
router.get("/", getAllUsers);

// Get login user
router.get("/login", verifyToken, getLoginUser);

module.exports = router;
