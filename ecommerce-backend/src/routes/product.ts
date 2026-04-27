import express from "express"
const router = express.Router()


router.get('/api/products', (req, res) => {
    res.send('fetch!')
})

router.post('/api/products', (req, res) => {
    res.send('post gress!')
})

export default router;