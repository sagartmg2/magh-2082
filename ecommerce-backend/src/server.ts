import express from "express"
import "./connections/database.js"
import authRoute from "./routes/auth.js"
import productRoute from "./routes/product.js"
import cors from "cors"

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(authRoute);
app.use(productRoute);


app.get('/', (req, res) => {
    res.send('Hello World updated!')
})

// app.post('/api/login', (req, res) => {
//     res.send('login!')
// })

// app.post('/api/signup', (req, res) => {
//     res.send('signup!')
// })


// app.get('/api/products', (req, res) => {
//     res.send('fetch!')
// })

// app.post('/api/products', (req, res) => {
//     res.send('post gress!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


