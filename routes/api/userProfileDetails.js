const verifyToken = require("../../middleware/verifyJwt");
const express = require("express");
const router = express.Router();
const fetchUserProfileDataController = require("../../controllers/userProfileDetailsController");
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post(
  "/",
  verifyToken,
  upload.single("file"),
  fetchUserProfileDataController.addPersonalDetailsHandler
);

module.exports = router;
