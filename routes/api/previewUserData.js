const express = require("express");
const router = express.Router();
const previewUserDataController = require("../../controllers/previewLinkController");

router.get("/", previewUserDataController.previewLinksHandler);

module.exports = router;
