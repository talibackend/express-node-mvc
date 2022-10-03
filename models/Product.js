const sequelize = require("../database/sequelize");
const { Model, DataTypes } = require("sequelize");

class Product extends Model { }

Product.init({
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    price : {
        type : DataTypes.FLOAT,
        allowNull : false
    }
}, {sequelize});

module.exports = Product;