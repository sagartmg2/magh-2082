import express, { Request, Response } from "express"
import checkAuthentication from "../middlewares/checkAuthentication.js";
import { createOrder } from "../controllers/order.js";


const router = express.Router();

router.get('', () =>{})
router.post("", createOrder)





export default router;