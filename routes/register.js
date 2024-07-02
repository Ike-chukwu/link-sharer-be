const express = require("express");
const router = express.Router();
const registerUserHandler = require("../controllers/registerUserController");

router.post("/", registerUserHandler.registerUser);

module.exports = router;
