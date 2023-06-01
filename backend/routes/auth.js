const express = require("express");
const { postSignin, postSignup } = require("../controllers/auth");
const router = express();

// Create user - POST
router.post("/signup", postSignup);

// Sign in - POST
router.post("/signin", postSignin);

// Google Auth
router.post("/google");

module.exports = router;
