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
    product_name: {
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
      // TODO: default value of 10
      // todo validates numeric
    },
    category_id: {
      type: dataTypes.INTEGER,
      // todo reference the category model's id
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

// Product belongs to Category, and Category has many Product models, as a category can have multiple products but a product can only belong to one category.

// Product belongs to many Tag models, and Tag belongs to many Product models. Allow products to have multiple tags and tags to have many products by using the ProductTag through model.