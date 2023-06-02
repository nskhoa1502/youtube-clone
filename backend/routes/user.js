const express = require("express");
const router = express.Router();
const {
  putUpdateUser,
  deleteUser,
  getUser,
  putSubscribe,
  putUnsubscribe,
  getAllUsers,
  getLoginUser,
  putDislike,
  putLike,
  putResetLike,
} = require("../controllers/user");
const { verifyToken } = require("../helpers/verifyToken");

// http://localhost:8080/api/users/

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
router.put("/like/:videoId", verifyToken, putLike);

// Dislike a video
router.put("/dislike/:videoId", verifyToken, putDislike);

// reset like of a video
router.put("/reset-like/:videoId", verifyToken, putResetLike);

//==============TEST==============//

// Get all users
router.get("/", getAllUsers);

// Get login user
router.get("/login", verifyToken, getLoginUser);

module.exports = router;
