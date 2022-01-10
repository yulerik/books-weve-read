const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.MONGODB_URI
const port = 9023

const app = express()

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(uri, () => console.log('connected thru mongodb'))

// routes
// app.use('/authors', require('./routes/authors'))

app.use('/books', require('./public/routes/bookRouter'))
app.use('/authors', require('./public/routes/authorRouter'))
app.use('/genres', require('./public/routes/genreRouter'))
app.use('/search', require('./public/routes/searchRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log(`server running on ${port}`)
})