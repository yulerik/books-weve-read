const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Genre = require('./genre')

const genreSchema = new Genre({})
const genre = mongoose.model('Genre', genreSchema);
  

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    readAgain: {
        type: Number
    },
    genre: {genre},
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    }
    
})



module.exports = mongoose.model('Book', bookSchema)