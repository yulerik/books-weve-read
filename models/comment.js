const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    reader: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date()
    }   
})

module.exports = mongoose.model('Comment', commentSchema)