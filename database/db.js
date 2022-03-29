const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ludum', 'username', 'password', {
    host: 'localhost',
    dialect: "mysql"
  });