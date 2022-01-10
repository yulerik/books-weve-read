const express = require('express')
const genreRouter = express.Router()
const Genre = require('../../models/genre')

// all genres
genreRouter.get('/', (req, res, next) => {
    Genre.find((err, authors) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})
// get specific genre by id
genreRouter.get('/:genreId', (req, res, next) => {
    Genre.findById(req.params.genreId, (err, genre) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(genre)
    })
})

// new genre
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