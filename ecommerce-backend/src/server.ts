import express from "express"
import authRoute from "./routes/auth.js"
import productRoute from "./routes/product.js"
import categoryRoute from "./routes/category.js"
import cartRoute from "./routes/cart.js"
import cors from "cors"
import path from "path"
import "./models/index.js"
import "./connections/database.js"
// import { User as UserType } from "./types/User.js"



// console.log(path.join("/upload", "/products"));

const app = express()
const port = 4000


// let user:UserType = {}


app.use("/uploads", express.static('uploads'));
app.use(cors())   // global middleware           // cors()  return () =>{ }
app.use(express.json()) // global middeware      // return () =>{}


app.use((req, res, next) => {
    console.log("inside app.use() first middlweare");
    next()
})


app.use((req, res, next) => {
    console.log("inside app.use() second middlreware  ");
    next()
})


// app.use(checkAuthentication)  // global middeware
app.use(authRoute);
app.use(productRoute);
app.use(categoryRoute);
app.use(cartRoute);

// app.use(checkAuthentication,orderRoute);


app.get('/', (req, res) => {
    res.send('Hello World updated!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


