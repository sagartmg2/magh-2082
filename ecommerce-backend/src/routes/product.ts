import express, { Request, Response } from "express"
const router = express.Router()
import checkAuthentication from "../middlewares/checkAuthentication.js"


router.get('/api/products', (req, res) => {
    res.send('fetch products list!')
})

// const checkAuthentication = (req: Request, res: Response) => {
//     console.log(req.headers.authorization);
//     let token = req.headers.authorization?.split(" ")[1]

//     if (token) {

//         try {
//             let decoded = jwt.verify(token, 'shhhhh');
//             return true;
//             console.log(decoded);

//         } catch (err) {
//             return false;
//             res.status(401).send("unauthenticated.")
//         }
//     } else {
//         return false
//         return res.status(401).send("unauthenticated.")
//     }
// }


//  route-level middelware
router.post('/api/products', checkAuthentication, (req, res) => {
    console.log("req.user", req.user);
    res.send(`post : product created! by user, ${req.user.firstName}`)
})


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