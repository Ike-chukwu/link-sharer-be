const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJwtToken = (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header) return res.status(401).json({ message: "Unauthorized" });
  const accessToken = header.split(" ")[1];
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if (error) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};

module.exports = verifyJwtToken;
