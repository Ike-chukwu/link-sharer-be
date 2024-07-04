const User = require("../model/User");
const UserDetail = require("../model/UserDetail");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const previewLinksHandler = async (req, res) => {
  const headers = req.headers["authorization"];
  if (!headers) return res.status(403).json({ message: "Unauthorized" });
  const userIdFromHeaders = headers.split(" ")[1];
  //   const actualUser = await User.findOne({ email: userEmail });
  const actualUserDetail = await UserDetail.findOne({
    userId: userIdFromHeaders,
  });
  if (!actualUserDetail)
    return res.status(400).json({ message: "An error occured" });
  return res.status(200).json(actualUserDetail);
};

module.exports = {
  previewLinksHandler,
};