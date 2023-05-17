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
    name: {
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
