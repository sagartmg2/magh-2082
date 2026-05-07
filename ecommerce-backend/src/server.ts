import express from "express"
import "./connections/database.js"
import authRoute from "./routes/auth.js"
import productRoute from "./routes/product.js"
import cors from "cors"
import checkAuthentication from "./middlewares/checkAuthentication.js"

const app = express()
const port = 4000



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

// app.use(checkAuthentication,orderRoute);


app.get('/', (req, res) => {
    res.send('Hello World updated!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


