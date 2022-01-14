const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Genre = require('./genre')
const Comment = require('./comment')

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    readAgain: {
        type: Number,
        required: true,
        default: 0
    },
    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }],
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

module.exports = mongoose.model('Book', bookSchema)