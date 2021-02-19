const jwt = require("jsonwebtoken");
const { asyncHandler } = require("../utils/asyncHandler");
const User = require("../models").User;
const { jwtSecret } = require("../config/app");

exports.auth = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    throw new Error("Not authorization token", 401);
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (e) {
    throw new Error("Not authorization token", 401);
  }
});
