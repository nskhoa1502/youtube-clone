const express = require("express");
const { signup } = require("../controllers/auth");
const router = express();

// Create user
router.post("/signup", signup);

// Sign in
router.post("/signin");

// Google Auth
router.post("/google");

module.exports = router;
