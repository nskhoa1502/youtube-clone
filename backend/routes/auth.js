const express = require("express");
const { signup, postSignin } = require("../controllers/auth");
const router = express();

// Create user - POST
router.post("/signup", postSignin);

// Sign in - POST
router.post("/signin", postSignin);

// Google Auth
router.post("/google");

module.exports = router;
