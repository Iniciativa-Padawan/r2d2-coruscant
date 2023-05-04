const moviesRepo = require('../repository/moviesRepo')
const express = require("express");
const router = express.Router();

// requisição da lista
router.get('/movies', (req, res) => {
  res.send(moviesRepo.getMovies())
})

router.get('/movies/trilogy/:trilogy', (req, res) => {
  const movies = moviesRepo.getMoviesBytrilogy(req.params.trilogy)

  if (movies.length == 0)
    res.status(404).send('trilogy não encontrada')
  else
    res.send(movies)
})

// requisição ordem alfabética
router.get('/movies/alphabetical', (req, res) => {
  res.send(moviesRepo.ordemAlfabetica())
})

// requisição ordem sequencial
router.get('/movies/sequential', (req, res) => {
  res.send(moviesRepo.ordemSequencial())
})
//requisição ordem lançamento
router.get('/movies/movie-release', (req, res) => {
  res.send(moviesRepo.ordemLancamento())
})

module.exports = router