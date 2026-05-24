
import express, { Request, Response } from "express"
import Cart from "../models/Cart.js"

export const fetchCarts = (req: Request, res: Response) => {


    res.send("list of cart tiems...")


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
            quantity: req.body.quantity
        })
    } else {
        data = await Cart.create({
            productId: req.body.productId,
            quantity: req.body.quantity,
            userId: req.user?.id
        })
    }
    res.send({ data: data })

}

// export default fetchCarts

