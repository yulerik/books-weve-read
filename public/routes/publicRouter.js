const express = require('express')
const publicRouter = express.Router()
const Book = require('../../models/book')
const Author = require('../../models/author')
const Genre = require('../../models/genre')


publicRouter.route('/books')
    .get((req, res, next) => {
        Book.find((err, books) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(books)
        })
    })
    .post((req, res, next) => {
        const newBook = new Book (req.body)
        newBook.save((err, book) => {
            if(err) {
            res.status(500)
            return next(err)
            }
            return res.status(200).send(book)
        })
    })
publicRouter.route('/books/:bookId')
    .get((req, res, next) => {
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(book)
        })
    })
publicRouter.route('/authors')
    .get((req, res, next) => {
        Author.find((err, authors) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(authors)
        })
    })
    .post((req, res, next) => {
        const newAuthor = new Author (req.body)
        newAuthor.save((err, author) => {
            if(err) {
            res.status(500)
            return next(err)
            }
            return res.status(200).send(author)
        })
    })
publicRouter.route('/authors/:authorId')
    .get((req, res, next) => {
        Author.findById(req.params.authorId, (err, author) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(author)
        })
    })
publicRouter.route('/authors/:authorId/books')
    .get((req, res, next) => {
        Book.find({author: req.params.authorId}, (err, books) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(books)
        })
    })
publicRouter.route('/genres')
    .get((req, res, next) => {
        Genre.find((err, genres) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(genres)
        })
    })
    .post((req, res, next) => {
        const newGenre = new Genre (req.body)
        newGenre.save((err, genre) => {
            if(err) {
            res.status(500)
            return next(err)
            }
            return res.status(200).send(genre)
        })
    })
publicRouter.route('/genres/:genreId')
    .get((req, res, next) => {
        Genre.findById(req.params.genreId, (err, genre) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(genre)
        })
    })
publicRouter.route('/genres/:genreId/books')
    .get((req, res, next) => {
        Book.find({genre: req.params.genreId}, (err, books) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(books)
        })
    })

module.exports = publicRouter