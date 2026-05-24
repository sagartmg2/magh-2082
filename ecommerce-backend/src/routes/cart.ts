import express, { Request, Response } from "express"
import checkAuthentication from "../middlewares/checkAuthentication.js";
import { fetchCarts, addToCart } from "../controllers/cart.js";


const router = express.Router();

router.get('/api/carts', checkAuthentication, fetchCarts)
router.post('/api/carts', checkAuthentication, addToCart)



export default router;