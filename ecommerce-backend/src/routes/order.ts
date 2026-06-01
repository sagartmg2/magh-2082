import express, { Request, Response } from "express"
import checkAuthentication from "../middlewares/checkAuthentication.js";
import { createOrder, verifyOrder } from "../controllers/order.js";


const router = express.Router();

router.get('', () => { })
router.post("", createOrder)
router.post("/order-verify", verifyOrder)





export default router;