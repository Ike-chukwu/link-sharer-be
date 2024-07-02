const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email | !password) {
    return res.status(400).json({ message: "Bad request" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser && existingUser.password === password) {
    const accessToken = jwt.sign(
      { email: existingUser.email },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(201).json({ accessToken, uniqueIdentifier: existingUser._id });
    return;
  }

  return res.status(401).json({ message: "User does not exist" });
};

module.exports = { loginUser };
