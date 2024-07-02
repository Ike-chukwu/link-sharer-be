const verifyToken = require("../../middleware/verifyJwt");
const express = require("express");
const router = express.Router();
const fetchUserDataController = require("../../controllers/fetchUserDataController");

router
  .route("/")
  .get(verifyToken, fetchUserDataController.fetchUserDataHandler)
  .post(verifyToken, fetchUserDataController.addSocialLinksHandler)

module.exports = router;
