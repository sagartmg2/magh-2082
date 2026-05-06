import express from "express"
import { getUser, login, signup } from "../controllers/auth.js"

const router = express.Router()
router.post('/api/login', login)
router.post('/api/signup', signup)
router.get('/api/auth/me', getUser)


export default router;