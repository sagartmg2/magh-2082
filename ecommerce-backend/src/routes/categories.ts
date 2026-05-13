import path from "path"
import express, { Request, Response } from "express"

const router = express.Router()
import checkAuthentication from "../middlewares/checkAuthentication.js"
import Category from "../models/Category.js"

router.get('/api/categories', async (req, res) => {
    let data = await Category.findAll();
    res.send({
        data: data
    })
})

router.post('/api/categories', async (req, res) => {
    let data = await Category.create(
        {
            title: req.body.title,
            parentId: req.body.parentId || null
        })
        
    res.send({
        data: data
    })
})


export default router;