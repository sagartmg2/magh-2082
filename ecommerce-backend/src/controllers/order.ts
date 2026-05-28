
import express, { Request, Response } from "express"
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import { Op } from "sequelize";
import User from "../models/User.js";
import SubOrder from "../models/SubOrder.js";



/* 
    post: api/orders

     body =  [
        {
     }
     ]


*/


export const createOrder = async (req: Request, res: Response) => {




    console.log(req.body);

    const { phone, address, secondaryAddress, paymentMode, products } = req.body
    console.log(req.body);

    let order = await Order.create({
        userId: req.user?.id,
        phone: phone,
        address,
        secondaryAddress,
        paymentMode
    })


    let dbProducts = await Product.findAll({
        include: {
            model: User,
            as: "user"
        },
        where: {
            id: {
                [Op.in]: [27, 44, 41]
            }
        }
    })
    console.log(dbProducts);

    [
        {
            seller: "one",
            products: []
        },
        {
            seller: "two",
            products: []
        }
    ]

    await SubOrder.create({
        orderId: order.getDataValue("id"),
        sellerId: 27,
        deliveryCharge: 0,
        reference: "ORD-234"
    })

    


    res.send(order)



}

