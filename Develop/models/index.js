// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// inner joins
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "cascade",
});

Category.hasMany(Product, {
foreignKey: "category_id"
});

// tag find a product through product tag table product_id
Product.belongsToMany(Tag,{
  through: ProductTag,
  foreignKey: "product_id"
})

Tag.belongsToMany(Product,{
  through: ProductTag,
  foreignKey: "tag_id"
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
