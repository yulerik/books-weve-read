const express = require('express')
const authorRouter = express.Router()
const Author = require('../models/author')

authorRouter.route('/')
    .get((req, res, next) => {
        // res.send('all authors')
        // Author.find((error, authors) => {
        //     if (error) {
        //         console.log(error)
        //         next(error)
        //     }
        //     return res.status(200).send(authors)
        // })
        Author.find((err, authors) => {
            if (err) res.status(500).send(err)
            return res.status(200).send(authors)
        })
    })
    .post((req, res, next) => {
        res.send('post author')
    })


module.exports = authorRouter