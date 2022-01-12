const express = require('express')
const req = require('express/lib/request')
const bookRouter = express.Router()
const Book = require('../../models/book')

// all books
bookRouter.get('/', (req, res, next) => {
    Book.find((err, books) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})
// get one book
bookRouter.get('/:bookId', (req, res, next) => {
    Book.find({_id: req.params.bookId}, (err, book) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(book)
    })
})
// find books with a specific author
bookRouter.get('/author/:authorId', (req, res, next) => {
    Book.find({author: req.params.authorId}, (err, books) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})
// get books with a specific genre
bookRouter.get('/genre/:genreId', (req, res, next) => {
    Book.find({genre: req.params.genreId}, (err, books) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

// add new book
bookRouter.post('/', (req, res, next) => {
    const newBook = new Book (req.body)
    newBook.save((err, book) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(book)
    })
})
bookRouter.post('/:authorId', (req, res, next) => {
    req.body.author = req.params.authorId
    const newBook = new Book (req.body)
    newBook.save((err, savedBook) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

module.exports = bookRouter