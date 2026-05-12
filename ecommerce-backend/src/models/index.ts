import Category from "./Category.js"
import Product from "./Product.js"
import ProductImage from "./ProductImage.js"

Product.hasMany(ProductImage, {
    foreignKey: "product_id",
    as: "images"
})


Category.hasMany(Product, {
    foreignKey: "category_id",
    as: "products"
})