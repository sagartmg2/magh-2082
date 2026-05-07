import express from "express"
import { getUser, login, signup } from "../controllers/auth.js"
import checkAuthentication from "../middlewares/checkAuthentication.js"

const router = express.Router()
router.post('/api/login', login)
router.post('/api/signup', signup)
router.get('/api/auth/me', checkAuthentication, getUser)


export default router;