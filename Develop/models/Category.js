const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    id: {
      // Integer
      type: dataTypes.INTEGER,
      // Doesn't allow null values.
      allowNull: false,
      // Set as primary key.
      primaryKey: true,
      // Uses auto increment.
      autoIncrement: true
    },
   category_name: {
      type: dataTypes.STRING,
      // Doesn't allow null values.
      allowNull: false,
      // Set as primary key.
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

// Product belongs to Category, and Category has many Product models, as a category can have multiple products but a product can only belong to one category.

// Product belongs to many Tag models, and Tag belongs to many Product models. Allow products to have multiple tags and tags to have many products by using the ProductTag through model.