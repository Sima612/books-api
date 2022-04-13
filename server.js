const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {console.log('Connected to mongo: ', process.env.MONGO_URI)})

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/books', require('./controllers/books-controllers.js'))

app.listen(process.env.PORT, () => {
    console.log('-------I HAVE AWAKEN!')
})
