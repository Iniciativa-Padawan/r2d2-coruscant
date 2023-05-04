const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

// função que busca todos os filmes do banco de dados
const allMovies = async () => {
    const movies = await prisma.movie.findMany()
    return movies
}

// função que adiciona um filme ao banco de dados
const addMovie = async (movie) => {
    await prisma.movie.create({
        data: movie
    })
}

const removeMovie = async (id) => {
    await prisma.movie.delete({
        where: {
            id: id
        }
    })
}

const updateMovie = async (movie, id) => {
    await prisma.movie.update({
        where: {
            id: id
        },
        data: movie
    })
}

function ordemAlfabetica() {
    const ordemAlfabetica = listaFilmes.filter(filme => filme.name).sort((a, b) => a.name.localeCompare(b.name))

    return ordemAlfabetica
}

function ordemSequencial() {
    const ordemSequencial = listaFilmes.filter(filme => filme.sequential).sort((a, b) => {
        if (a.sequential < b.sequential) return -1
    })

    return ordemSequencial
}

function ordemLancamento() {
    const ordemLanc = listaFilmes.filter(filme => filme.year).sort((a, b) => {
        if (a.year < b.year) return -1
    })

    return ordemLanc
}

function trilogia(nomeTrilogia) {
    const trilogiaFiltrada = listaFilmes.filter(filme => filme.trilogy === nomeTrilogia)

    const mapeamentoNome = mapeandoObjeto(trilogiaFiltrada)
    
    return mapeamentoNome
}

function mapeandoObjeto(objetoFiltrado) {
    return objetoFiltrado.map((filme) => {
        return filme
    })
}

module.exports = {ordemAlfabetica, ordemSequencial, ordemLancamento, trilogia, allMovies, addMovie, removeMovie, updateMovie}