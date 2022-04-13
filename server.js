require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {console.log('Connected to mongo: ', process.env.MONGO_URI)})

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/books', require('./controllers/books-controllers.js'))

app.listen(process.env.PORT, () => {
    console.log('-------I HAVE AWAKEN!')
})
