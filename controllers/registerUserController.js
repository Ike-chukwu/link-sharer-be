const User = require("../model/User");
const UserDetail = require("../model/UserDetail");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email | !password) {
    return res.status(400).json({ message: "Bad request" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res
      .status(403)
      .json({ message: "A user with this email already exists" });
  const newUser = await User.create({
    email,
    password,
  });
  const newUserDetail = await UserDetail.create({
    userId: newUser._id,
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    selectedFile: "",
    listOfLinks: [],
  });
  res
    .status(201)
    .json({ message: "User was successfully created!", newUserDetail });
};

module.exports = { registerUser };
