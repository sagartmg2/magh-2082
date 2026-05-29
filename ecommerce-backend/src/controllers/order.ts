
import express, { Request, Response } from "express"
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import { Op } from "sequelize";
import User from "../models/User.js";
import SubOrder from "../models/SubOrder.js";
import OrderItem from "../models/OrderItem.js";



/* 
    post: api/orders

     body =  {
    "phone":"98404255",
    "paymentMode":"cash",
    "address":"balaju-1",
    "secondaryAddress":"putalisdad",
    "products": [
        {
            "productId": 27,
            "quantity": 1
        },
         {
            "productId":44,
            "quantity": 10
        },
         {
            "productId":41,
            "quantity": 10
        }

    ]
}


*/


export const createOrder = async (req: Request, res: Response) => {

    const { phone, address, secondaryAddress, paymentMode, products } = req.body

    let order = await Order.create({
        userId: req.user?.id,
        phone: phone,
        address,
        secondaryAddress,
        paymentMode
    })

    let productIds = req.body.products.map((el: { productId: number }) => el.productId)


    let data = await User.findAll({
        include: {
            model: Product,
            as: "products",
            where: {
                id: {
                    [Op.in]: productIds
                }
            }
        }
    })

    /* NOTE: async wont doesnot work inside forEach */
    // data.forEach(async (el) => {
    //     await SubOrder.create({})
    // })

    for (let user of data) {

        let subTotal = 0
        let products = user.getDataValue('products')
        products = products.map(el => el.toJSON());
        console.log(products)

        products.forEach(el => {
            let quantity = req.body.products.find(reqProduct => reqProduct.productId == el.id).quantity
            subTotal += parseFloat(el.price) * quantity
        })


        const randomNumber = Date.now() + '-' + Math.round(Math.random() * 1E9)
        let orderRef = `${'DRZ'}-${user.getDataValue("id")}-${randomNumber}`
        let subOrder = await SubOrder.create({
            orderId: order.getDataValue("id"),
            sellerId: user.getDataValue("id"),
            deliveryCharge: user.getDataValue("shippingCharge"),
            subTotal,
            reference: orderRef
        })


        for (let product of products) {
            await OrderItem.create({
                subOrderId: subOrder.getDataValue("id"),
                productId: product.id,
                productTitle: product.title,
                quantity: req.body.products.find(reqProduct => reqProduct.productId == product.id).quantity,
                price: product.price
            })
        }
    }


    // data = data.map(el => el.toJSON());


    // await SubOrder.create({
    //     orderId: order.getDataValue("id"),
    //     sellerId: 27,
    //     deliveryCharge: 0,
    //     reference: "ORD-234"
    // })


    /* seggregate products according to seller */
    // let dbProducts = await Product.findAll({
    //     include: {
    //         model: User,
    //         as: "user"
    //     },
    //     where: {
    //         id: {
    //             [Op.in]: productIds
    //         }
    //     }
    // })

    // const plainProducts = dbProducts.map(product => product.toJSON());
    // console.log(plainProducts);

    // [
    //     {
    //         seller: "one",
    //         products: []
    //     },
    //     {
    //         seller: "two",
    //         products: []
    //     }


    // ]

    // await SubOrder.create({
    //     orderId: order.getDataValue("id"),
    //     sellerId: 27,
    //     deliveryCharge: 0,
    //     reference: "ORD-234"
    // })



    res.send({ msg: "order createD", data: order })



}

