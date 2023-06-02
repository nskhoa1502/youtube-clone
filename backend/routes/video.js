const express = require("express");
const { verifyToken } = require("../helpers/verifyToken");
const {
  postAddVideo,
  putVideo,
  deleteVideo,
  getVideo,
  getTrend,
  getRandom,
  getSub,
  putAddView,
  getByTag,
  getSearchVideos,
} = require("../controllers/video");

const router = express.Router();

// http://localhost:8080/api/videos/

// Create a video
router.post("/", verifyToken, postAddVideo);

// Update a video
router.put("/:id", verifyToken, putVideo);

// Delete a video
router.delete("/:id", verifyToken, deleteVideo);

// Get a video
router.get("/find/:id", getVideo);

// Update view counts
router.put("/view/:id", putAddView);

// Get trend videos
router.get("/trend", getTrend);

// Get random videos
router.get("/random", getRandom);

// Get sub videos
router.get("/sub", verifyToken, getSub);

// Get videos by tags
router.get("/tag", getByTag);

// Get search videos by title
router.get("/search", getSearchVideos);

module.exports = router;
