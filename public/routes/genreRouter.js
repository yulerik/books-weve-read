const express = require('express')
const genreRouter = express.Router()
const Genre = require('../../models/genre')

// all authors
genreRouter.get('/', (req, res, next) => {
    Genre.find((err, authors) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})

// new author
genreRouter.post('/', (req, res, next) => {
    const newGenre = new Genre (req.body)
    newGenre.save((err, savedGenre) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedGenre)
    })
})
  

module.exports = genreRouter