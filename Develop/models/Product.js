// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    }, 
    price: {
      type: dataTypes.DECIMAL,
      allowNull: false,
      // TODO: Validate value is decimal
    },
    stock: {
      type: dataTypes.INTEGER,
      allowNull: false,
      // TODO: defaul value of 10
      // todo validates numeric
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
