const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['fiction', 'non-fiction']
    },
    subType: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Genre', genreSchema)