const { DataTypes } = require("sequelize");
const db = require("../database/db");

const User = db.define("User", {
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

User.sync();
module.exports = User;
