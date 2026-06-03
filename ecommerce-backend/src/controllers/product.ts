

import { NextFunction, Request, Response } from "express"
import Product from "../models/Product.js";
import ProductImage from "../models/ProductImage.js";
import Category from "../models/Category.js";
import { Op, Order } from "sequelize";


export const getProducts = async (req: Request, res: Response) => {

    let limit = 15
    let page = 1
    let sort = ["createdAt", "DESC"]
    let searchText = ""

    let categoryIds: string[] = []
    if (req.query.categoryIds) {
        categoryIds = (req.query.categoryIds as string).split(",")
    }

    console.log({ categoryIds });

    let whereCategoryCondition = {}

    if (categoryIds.length > 0) {

        whereCategoryCondition = {
            [Op.or]: [
                {
                    id: {
                        [Op.in]: categoryIds
                    }
                },
                {
                    parentId: {
                        [Op.in]: categoryIds
                    }
                },
            ]
        }
    }


    if (req.query.q) {
        searchText = req.query.q as string
    }

    if (req.query.limit) {
        limit = parseInt(req.query.limit as string)
    }

    if (req.query.page) {
        page = parseInt(req.query.page as string)
    }

    if (req.query.sort) {
        switch (req.query.sort) {
            case "oldest": {
                sort = ["createdAt", "ASC"]
                break;
            }
            case "priceAsc": {
                sort = ["price", "ASC"]
                break;
            }
            case "priceDesc": {
                sort = ["price", "DESC"]
                break;
            }
            default: {
                sort = ["createdAt", "DESC"]
                break
            }
        }
    }


    let productsData = await Product.findAndCountAll({
        where: {
            // title:"mouse",
            title: {
                [Op.iLike]: searchText ? `%${searchText}%` : "%%"
            }
        },
        include: [
            {
                model: Category,
                as: "category",
                attributes: ["id", "title", "parentId"],
                where: whereCategoryCondition
            },
            {
                model: ProductImage,
                as: "images",
                attributes: ["id", "path",]

            }
        ],
        limit: limit,
        offset: (page - 1) * limit,
        // order: [["createdAt", "DESC"]]
        order: [sort] as Order
    })

    res.send({
        data: {
            total: productsData.count,
            limit: limit,
            page: 1,
            products: productsData.rows
        }
    })
}
export const getProductDetail = async (req: Request, res: Response) => {



    // console.log("hereee333");
    // return;

    let product = await Product.findByPk(parseInt(req.params.id as string), {
        include: [
            {
                model: Category,
                as: "category",
                attributes: ["id", "title", "parentId"],
            },
            {
                model: ProductImage,
                as: "images",
                attributes: ["id", "path",]

            }
        ],
    })

    res.send({
        data: product
    })
}

// named exports
export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    console.log("req.user", req.user);
    console.log("req.files/images", req.files);


    try {
        const {
            title,
            price,
            description,
            stock,
            categoryId
        } = req.body

        let product = await Product.create({
            title,
            price,
            description,
            stock,
            userId: req.user?.id,
            categoryId: categoryId
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
        // res.status(500).send({ msg: "server error", error: err.message })
        next(err)
    }
}
