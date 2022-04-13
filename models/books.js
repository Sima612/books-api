const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema ({
    id: {type: Schema.Types.ObjectId},
    title: {type: String},
    description: {type: String},
    year: {type: Number},
    quantity: {type: Number},
    imageURL: {type: String}
})

const Books = mongoose.model('Books', bookSchema)
module.exports = Books