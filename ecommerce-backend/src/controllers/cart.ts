
import express, { Request, Response } from "express"
import Cart from "../models/Cart.js"
import Product from "../models/Product.js"
import ProductImage from "../models/ProductImage.js"

export const fetchCarts = async (req: Request, res: Response) => {
    let data = await Cart.findAll({
        where: {
            userId: req.user?.id
        },
        include: [
            {
                model: Product,
                as: "product",
                required: true,
                include: [{
                    model: ProductImage,
                    as: "images",
                    required: false
                }]
            },

        ]
    })

    res.send({ data })


}

export const addToCart = async (req: Request, res: Response) => {

    let existingCartItem = await Cart.findOne({
        where: {
            userId: req.user?.id,
            productId: req.body.productId
        }
    })

    let data;
    if (existingCartItem) {
        data = await existingCartItem.update({
            quantity: req.body.quantity || (existingCartItem?.getDataValue('quantity') + 1)
        })
    } else {
        data = await Cart.create({
            productId: req.body.productId,
            quantity: 1,
            userId: req.user?.id
        })
    }
    res.send({ data: data })

}

// export default fetchCarts

