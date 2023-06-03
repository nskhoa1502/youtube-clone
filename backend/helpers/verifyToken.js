const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error");

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid")); // Corrected closing parentheses placement
    req.user = user;
    next();
  });
};
