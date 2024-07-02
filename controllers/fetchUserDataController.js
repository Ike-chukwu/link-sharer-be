const User = require("../model/User");
const UserDetail = require("../model/UserDetail");
const multer = require("multer");

const jwt = require("jsonwebtoken");
require("dotenv").config();



const fetchUserDataHandler = async (req, res) => {
  const userEmail = req.email;
  const actualUser = await User.findOne({ email: userEmail });
  const actualUserDetail = await UserDetail.findOne({ userId: actualUser._id });
  res.status(200).json(actualUserDetail);
};

const addSocialLinksHandler = async (req, res) => {
  const userEmail = req.email;
  const actualUser = await User.findOne({ email: userEmail });
  const actualUserDetail = await UserDetail.findOne({ userId: actualUser._id });
  actualUserDetail.listOfLinks = req.body;
  const list = await actualUserDetail.save();
  res
    .status(201)
    .json({ message: "Links successfully created", actualUserDetail });
};

module.exports = {
  fetchUserDataHandler,
  addSocialLinksHandler,
  
};
