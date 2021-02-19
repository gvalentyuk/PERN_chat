const { asyncHandler } = require("../utils/asyncHandler");
const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/app");

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) return res.status(404).json({ message: "User not found" });
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ msg: "Incorrect credentials" });
  }

  const userWithToken = generateToken(user.get({ raw: true }));

  return res.status(200).json({ user: userWithToken });
});

exports.register = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  const userWithToken = generateToken(user.get({ raw: true }));

  return res.status(200).json({ user: userWithToken });
});

const generateToken = (user) => {
  delete user.password;

  const token = jwt.sign(user, jwtSecret, { expiresIn: 86400 });

  return { ...user, token };
};
