const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const athentication = async function () {
  try {
    await sequelize.authenticate();
    console.log("wich , sucessful database connection 😎");
  } catch (error) {
    console.log("bad news dude, your connection was not successful 😩");
  }
};

athentication();

module.exports = sequelize;
