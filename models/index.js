// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//SELECT * FROM product JOIN category ON category_id
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignkey:"category_id",
  onDelete: "cascade"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id"
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: ProductTag, foreignKey: "product_id" 
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag, foreignKey: "tag_id" 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
