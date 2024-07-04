const User = require("../model/User");
const UserDetail = require("../model/UserDetail");
const multer = require("multer");

//
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addPersonalDetailsHandler = async (req, res) => {
  const userEmail = req.email;
  const actualUser = await User.findOne({ email: userEmail });
  const actualUserDetail = await UserDetail.findOne({ userId: actualUser._id });
  actualUserDetail.firstName = req.body.firstName;
  actualUserDetail.lastName = req.body.lastName;
  if (!req.file?.filename) {
    actualUserDetail.imgUrl = "";
    actualUserDetail.selectedFile = "";
  } else {
    actualUserDetail.selectedFile = req.file.filename;
    actualUserDetail.imgUrl = req.body.imgUrl;
  }
  // console.log(req.body.imgUrl);
  if (!req.body.email) {
    actualUserDetail.email = "";
  } else {
    actualUserDetail.email = req.body.email;
  }
  const updatedUserPersonalDetails = await actualUserDetail.save();
  res.status(201).json({
    message: "Personal Details successfully added",
    updatedUserPersonalDetails,
  });
};

module.exports = {
  addPersonalDetailsHandler,
};
