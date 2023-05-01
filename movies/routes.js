const functions = require('./functions')
const express = require('express')
const router = express.Router()

// requisição da lista
router.get('/movies', (req, res) => {
    res.send(functions.todosOsFilmes())
})

// requisição ordem alfabética
router.get('/movies/alphabetical', (req, res) => {
    res.send(functions.ordemAlfabetica())
})

// requisição ordem sequencial
router.get('/movies/sequential', (req, res) => {
    res.send(functions.ordemSequencial())
})
//requisição ordem lançamento
router.get('/movies/movie-release', (req, res) => {
    res.send(functions.ordemLancamento())
})

module.exports = router