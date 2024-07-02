const mongoose = require("mongoose");
const userDetailSchema = new mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  email: String,
  imgUrl: String,
  selectedFile: String,
  listOfLinks: [
    {
      id: String,
      platform: String,
      link: String,
    },
  ],
});

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

module.exports = UserDetail;
