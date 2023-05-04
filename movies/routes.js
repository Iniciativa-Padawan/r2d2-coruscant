const functions = require('./functions')
const express = require('express')
const router = express.Router()
const listaFilmes = require('./db.json')

// requisição da lista
router.get('/movies', async (req, res) => {
    const movies = await functions.allMovies()
    res.send(movies)
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
//requisição trilogia
router.get('/movies/trilogy/:trilogy', (req, res) => {
    const trilogy = req.params.trilogy
    const movies = listaFilmes.find(movie => movie.trilogy === trilogy)
    if (!movies){
        res.status(404).send('Trilogia não encontrada, tente novamente');
        return;
    }else {
        res.send(functions.trilogia(trilogy))
    }
})

router.post('/movies', (req, res) => {
    functions.addFilme(req.body)

    res.send(functions.todosOsFilmes())
})

router.delete('/movies', (req, res) => {
    functions.removerFilme()

    res.send(functions.todosOsFilmes())
})

router.delete('/movies/removerfilme/:sequential', (req, res) => {
    const sequential = req.params.sequential

    console.log(sequential)
    functions.removerFilmeSeq(sequential)

    res.send(functions.todosOsFilmes())
})

module.exports = router