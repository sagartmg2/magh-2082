import express from "express"
const router = express.Router()
import jwt from "jsonwebtoken"


router.get('/api/products', (req, res) => {
    res.send('fetch!')
})

router.post('/api/products', (req, res) => {


    console.log(req.headers.authorization);
    let token = req.headers.authorization?.split(" ")[1]

    if (token) {

        try {
            let decoded = jwt.verify(token, 'shhhhh');
            console.log(decoded);
            res.send('post : product created!')
        } catch (err) {
            res.status(401).send("unauthenticated.")
        }
    } else {
        res.status(401).send("unauthenticated.")
    }



})

export default router;