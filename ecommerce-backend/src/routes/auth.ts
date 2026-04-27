import express from "express"
import { login, signup } from "../controllers/auth"
const router = express.Router()


router.post('/api/login', login)

router.post('/api/signup', signup)


export default router;