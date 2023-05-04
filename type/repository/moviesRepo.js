const movies = require('../db/movies.json')

function getMovies() {
  return movies
}

const getMoviesBytrilogy = (trilogy) => getMovies().filter(movie => movie.trilogy == trilogy)

function ordemAlfabetica() {
  const ordemAlfabetica = movies.filter(filme => filme.name).sort((a, b) => a.name.localeCompare(b.name))

  return ordemAlfabetica
}

function ordemSequencial() {
  const ordemSequencial = movies.filter(filme => filme.sequential).sort((a, b) => {
    if (a.sequential < b.sequential) return -1
  })

  return ordemSequencial
}

function ordemLancamento() {
  const ordemLanc = movies.filter(filme => filme.year).sort((a, b) => {
    if (a.year < b.year) return -1
  })

  return ordemLanc
}

module.exports = { ordemAlfabetica, ordemLancamento, ordemSequencial, getMovies, getMoviesBytrilogy }