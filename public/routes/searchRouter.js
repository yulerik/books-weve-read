const express = require('express')
const searchRouter = express.Router()
const Author = require('../../models/author')
const Genre = require('../../models/genre')
const Book = require('../../models/book')
const { search } = require('./genreRouter')


// get book title by search
searchRouter.get('/books', (req, res, next) => {
    const { title } = req.query
    const pattern = new RegExp(title)
    Book.find(
        {title: { $regex: pattern, $options: 'i' } },
        (err, titles) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(titles)
        }
    )
})
// get author by search
searchRouter.get('/authors', (req, res, next) => {
    const { name } = req.query
    const pattern = new RegExp(name)
    Author.find(
        {name: { $regex: pattern, $options: 'i' } },
        (err, authors) => {
            if (err) {
                res.status(500) 
                return next(err)
            }
            return res.status(200).send(authors)
        }
    )
})
// get genre by search
searchRouter.get('/genres', (req, res, next) => {
    const { subType } = req.query
    const pattern = new RegExp(subType)
    Genre.find(
        {subType: { $regex: pattern, $options: 'i' } },
        (err, genres) => {
            if (err) {
                res.status(500) 
                return next(err)
            }
            return res.status(200).send(genres)
        }
    )
})



// // all authors
// authorRouter.get('/', (req, res, next) => {
//     Author.find((err, authors) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(authors)
//     })
// })


module.exports = searchRouter