const express = require('express')
const authorRouter = express.Router()
const Author = require('../../models/author')

// all authors
authorRouter.get('/', (req, res, next) => {
    Author.find((err, authors) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})
// get author by id
authorRouter.get('/:authorId', (req, res, next) => {
    Author.findById(req.params.authorId, (err, author) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(author)
    })
})
// new author
authorRouter.post('/', (req, res, next) => {
    const newAuthor = new Author(req.body)
    newAuthor.save((err, savedAuthor) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAuthor)
    })
})
  

module.exports = authorRouter