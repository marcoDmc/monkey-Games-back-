const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (params = {}) {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: 20000,
  });
};
