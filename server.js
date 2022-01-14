const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.MONGODB_URI
const port = process.env.PORT || 9023

const app = express()

const path = require('path')

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(_dirname, 'client', 'build')))

mongoose.connect(uri, () => console.log('connected thru mongodb'))

// routes
// app.use('/authors', require('./routes/authors'))

app.use('/books', require('./public/routes/bookRouter'))
app.use('/authors', require('./public/routes/authorRouter'))
app.use('/genres', require('./public/routes/genreRouter'))
app.use('/search', require('./public/routes/searchRouter'))
app.use('/public-books', require('./public/routes/publicRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'client', 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`server running on ${port}`)
})