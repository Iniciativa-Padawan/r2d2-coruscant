const { clearScreenDown } = require('readline');
const controller = require('./controller')
const express = require("express");
const router = express.Router();

router.get('/movies/trilogy/:trilogy', (req, res) => {
  const movies = controller.getMoviesByTrilogia(req.params.trilogy)

  if (movies.length == 0)
    res.status(404).send('Trilogia não encontrada')
  else
    res.send(movies)
})

router.get('/movies', (req, res) => {
  res.send(controller.getMovies())
})

router.post('/movies', (req, res) => {
  controller.addMovie(req.body)

  res.send(controller.getMovies())
})

// TIRAR ÚLTIMO ITEM DA LISTA
router.delete('/movies')

router.get('/movies/alphabetical', (req, res) => {
  res.send(controller.ordemAlfabetica())
})

router.get('/movies/sequential', (req, res) => {
  res.send(controller.ordemSequencial())
})

router.get('/movies/movie-release', (req, res) => {
  res.send(controller.ordemLancamento())
})

module.exports = router