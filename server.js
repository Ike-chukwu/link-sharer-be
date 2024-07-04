const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3500;
const mongoose = require("mongoose");
const multer = require("multer");
const corsOptions = require("./middleware/corsOptions");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/userData", require("./routes/api/userData"));
app.use("/previewUserData", require("./routes/api/previewUserData"));
app.use("/userProfileDetails", require("./routes/api/userProfileDetails"));

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  app.listen(port, () => {
    console.log("Port is running on port 3500");
  });
}
