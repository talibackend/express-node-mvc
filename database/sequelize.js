const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect : "mysql",
    host : "localhost",
    username : "root",
    password : "",
    database : "express-mvc"
});

module.exports = sequelize;