const movies = require('./db.json')

function getMovies() {
  return movies
}

function ordemAlfabetica() {
  const ordemAlfabetica = movies.filter(filme => filme.nomeDoFilme).sort((a, b) => a.nomeDoFilme.localeCompare(b.nomeDoFilme))

  return ordemAlfabetica
}

function ordemSequencial() {
  const ordemSequencial = movies.filter(filme => filme.sequencialFranquia).sort((a, b) => {
    if (a.sequencialFranquia < b.sequencialFranquia) return -1
  })

  return ordemSequencial
}

function ordemLancamento() {
  const ordemLanc = movies.filter(filme => filme.anoDeLancamento).sort((a, b) => {
    if (a.anoDeLancamento < b.anoDeLancamento) return -1
  })

  return ordemLanc
}

module.exports = { ordemAlfabetica, ordemLancamento, ordemSequencial, getMovies }