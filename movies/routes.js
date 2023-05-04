const functions = require('./functions')
const express = require('express')
const router = express.Router()
const listaFilmes = require('./db.json')

// requisição da lista completa de filmes
router.get('/movies', async (req, res) => {
    const movies = await functions.allMovies()
    res.send(movies)
})

// requisição para adicionar um novo filme
router.post('/movies', async (req, res) => {
    await functions.addMovie(req.body)
    const movies = await functions.allMovies()
    res.send(movies)
})

// requisição para deletar um filme
router.delete('/movies/:id', async (req, res) => {
    await functions.removeMovie(req.params.id)

    const movies = await functions.allMovies()

    res.send(movies)
})

// requisição para atualizar um filme
router.put('movies/:id', async (req, res) => {
    await functions.updateMovie(req.params.id, req.body)
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




module.exports = router