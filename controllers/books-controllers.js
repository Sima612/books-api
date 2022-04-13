const express = require('express')
const router = express.Router()
const Books = require('../models/books.js')
const seedBooks = require('../models/books-seed.js')

// SEED DATA
router.get('/seed', (req, res) => {
    Books.insertMany(seedBooks)
    .then(res.status(200).json({
        message: 'Seed successful'
    }))
    .catch(res.status(400).json({
        message: 'Seed unsuccessful'
    }))
})

// INDEX
router.get('/', (req, res) => {
    res.send('Books Page')
})

// SHOW BOOK
router.get('/:id', (req, res) => {
    Books.findById(req.params.id)
    .then(bookFound => {
        console.log(bookFound)
        res.render()
    })
    .catch(err => {
        console.log('err', err)
        res.status(500).json({ error: 'Error404' })
    })
})

// UPDATE BOOK
router.put('/books/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, {new: true})
    .then(updatedBooks => {
        console.log(updatedBooks)
        res.redirect('/books')
    })
    .catch(err => {
        console.log('err', err)
        res.status(500).json({ error: 'Error404' })
    })
})

router.delete('/books/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id)
    .then(bookDeleted => {
        console.log(bookDeleted)
        res.status(303).redirect('/books')
        console.log('Delete Successful')
    })

})

module.exports = router