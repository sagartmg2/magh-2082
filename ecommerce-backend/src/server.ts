// const express = require("express")
import express from "express"
import authRoute from "./routes/auth"
import productRoute from "./routes/product"

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') //


const app = express()
const port = 3000

app.use(express.json())
app.use(authRoute);
app.use(productRoute);


app.get('/', (req, res) => {
    res.send('Hello World!')
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


