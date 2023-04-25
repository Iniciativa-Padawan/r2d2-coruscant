const controller = require('./controller')
const express = require("express");
const router = express.Router();

//baseados no parametro da rota, filtrar a trilogia na lista e retorná-la
//se buscar uma trilogia que não existe usar o padrão http 404 not found para a resposta
//array.filter
router.get('/movies/trilogy/:trilogy', (req, res) => {
  res.send(req.params.trilogy)
})

router.get('/movies', (req, res) => {
  res.send(controller.getMovies())
})

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