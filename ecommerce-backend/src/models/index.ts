import Category from "./Category.js"
import Product from "./Product.js"
import ProductImage from "./ProductImage.js"
import Cart from "./Cart.js"
import User from "./User.js"
import Order from "./Order.js"
import SubOrder from "./SubOrder.js"
import OrderItem from "./OrderItem.js"



Order.hasMany(SubOrder, {
    foreignKey: "orderId",
    as: "subOrders"
})

SubOrder.hasMany(OrderItem, {
    foreignKey: "subOrderId",
    as: "orderItems"
})

Product.hasMany(ProductImage, {
    foreignKey: "productId",
    as: "images"
})



Product.belongsTo(Category, {
    foreignKey: "categoryId",
    as: "category"
})

Product.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

User.hasMany(Product, {
    foreignKey: "userId",
    as: "products"
})

Category.hasMany(Product, {
    foreignKey: "categoryId",
    as: "products"
})

Cart.belongsTo(Product, {
    foreignKey: "productId",
    as: "product"
})

Product.hasMany(Cart, {
    foreignKey: "productId",
    as: "carts"
})