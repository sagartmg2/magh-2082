

import { Request, Response } from "express"
import Product from "../models/Product.js";
import ProductImage from "../models/ProductImage.js";


export const getProducts = async (req: Request, res: Response) => {

    // {{domain}}/products?q=mouse&priceFrom=100&priceTo=2000&category&page=1&limit=20
    console.log(req.query);
    let limit = 5;
    let offset = 0;

    if (req.query.limit) {
        limit = parseInt(req.query.limit as string)
    }


    let products = await Product.findAll({
        limit: limit,
        offset: offset,
    })
    res.send({
        data: products
    })
}

// named exports
export const createProduct = async (req: Request, res: Response) => {
    console.log("req.user", req.user);
    console.log("req.files/images", req.files);

    try {
        const {
            title,
            price,
            description,
            stock,
        } = req.body

        let product = await Product.create({
            title,
            price,
            description,
            stock,
            userId: req.user?.id,
        })

        console.log(product);

        // @ts-ignore
        req.files?.forEach(el => {
            ProductImage.create({
                path: el.path,
                productId: product.getDataValue("id")
            })
        })

        res.send(product)
    } catch (err) {
        res.status(500).send({ msg: "server error", error: err.message })
    }
}
