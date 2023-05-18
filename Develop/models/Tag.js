const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const Product = require("./Product.js");

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

Tag.belongsToMany(Product, {
  through: "product_tag", //
  foreignKey: "tag_id",
});

module.exports = Tag;