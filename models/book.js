const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Genre = require('./genre')

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    readAgain: {
        type: Number
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }],
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    }]
})

module.exports = mongoose.model('Book', bookSchema)