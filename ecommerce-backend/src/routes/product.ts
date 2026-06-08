import path from "path"
import express, { Request, Response } from "express"
import multer from "multer"

const router = express.Router()
import checkAuthentication from "../middlewares/checkAuthentication.js"
import { createProduct, getProducts, getProductDetail } from "../controllers/product.js"

import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
    cloud_name: 'dtv8dtpkm',
    api_key: '214576936119774',
    api_secret: 'Bybox_PKl5TAvKLSrDbGHLXEI3E'
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {

//         cloudinary.uploader
//             .upload(file)
//             .then(result => console.log(result))
//             .catch(err => {
//                 console.log("cloudinary",err);
//             })

//         console.log(file);
//         const extension = path.extname(file.originalname)
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + extension
//         cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// })

// const upload = multer({ storage: storage })

const upload = multer({ storage: multer.memoryStorage() });


router.get('/api/products', getProducts)

router.get('/api/products/:id', getProductDetail)



/* const checkAuthentication = (req: Request, res: Response) => {
    console.log(req.headers.authorization);
    let token = req.headers.authorization?.split(" ")[1]

    if (token) {
        try {
            let decoded = jwt.verify(token, 'shhhhh');
            return true;
            console.log(decoded);

        } catch (err) {
            return false;
            res.status(401).send("unauthenticated.")
        }
    } else {
        return false
        return res.status(401).send("unauthenticated.")
    }
} */


//  route-level middelware
router.post('/api/products', checkAuthentication, upload.array('images', 12), createProduct)


router.put('/api/products/:id', checkAuthentication, (req, res) => {

    // checkAuthentication(req, res)
    // res.send('put : product updated!')

    res.send('put : product updated!')


    // console.log(req.headers.authorization);
    // let token = req.headers.authorization?.split(" ")[1]

    // if (token) {

    //     try {
    //         let decoded = jwt.verify(token, 'shhhhh');
    //         console.log(decoded);
    //     } catch (err) {
    //         res.status(401).send("unauthenticated.")
    //     }
    // } else {
    //     res.status(401).send("unauthenticated.")
    // }

})

export default router;