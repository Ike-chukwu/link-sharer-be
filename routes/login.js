const express = require("express");
const router = express.Router();
const loginUserHandler = require("../controllers/loginUserController");

router.post("/",loginUserHandler.loginUser);

module.exports = router;
