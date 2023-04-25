const listaFilmes = require('./db.json')

function todosOsFilmes() {
    return listaFilmes
}

function ordemAlfabetica() {
    const ordemAlfabetica = listaFilmes.filter(filme => filme.nomeDoFilme).sort((a, b) => a.nomeDoFilme.localeCompare(b.nomeDoFilme))

    return ordemAlfabetica
}

function ordemSequencial() {
    const ordemSequencial = listaFilmes.filter(filme => filme.sequencialFranquia).sort((a, b) => {
        if (a.sequencialFranquia < b.sequencialFranquia) return -1
    })

    return ordemSequencial
}

function ordemLancamento() {
    const ordemLanc = listaFilmes.filter(filme => filme.anoDeLancamento).sort((a, b) => {
        if (a.anoDeLancamento < b.anoDeLancamento) return -1
    })

    return ordemLanc
}

module.exports = {todosOsFilmes, ordemAlfabetica, ordemSequencial, ordemLancamento}