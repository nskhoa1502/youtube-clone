const express = require("express");
const {
  postSignin,
  postSignup,
  postGoogleAuth,
  postLogout,
} = require("../controllers/auth");
const router = express();

// http://localhost:8080/api/auth/

// Create user - POST
router.post("/signup", postSignup);

// Sign in - POST
router.post("/signin", postSignin);

// Log out - POST
router.post("/logout", postLogout);

// Google Auth
router.post("/google", postGoogleAuth);

module.exports = router;
