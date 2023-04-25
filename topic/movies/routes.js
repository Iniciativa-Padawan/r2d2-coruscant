const controller = require('./controller')
const express = require("express");
const router = express.Router();

// requisição da lista
router.get('/movies', (req, res) => {
  res.send(controller.getMovies())
})

// requisição ordem alfabética
router.get('/movies/alphabetical', (req, res) => {
  res.send(controller.ordemAlfabetica())
})

// requisição ordem sequencial
router.get('/movies/sequential', (req, res) => {
  res.send(controller.ordemSequencial())
})
//requisição ordem lançamento
router.get('/movies/movie-release', (req, res) => {
  res.send(controller.ordemLancamento())
})

module.exports = router