const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const allMovies = async () => {
    const movies = await prisma.movie.findMany()
    return movies
}

function addFilme(filmeASerAdicionado) {
    listaFilmes.push(filmeASerAdicionado)
}

function removerFilme() {
    listaFilmes.pop()
}

function removerFilmeSeq(filmeASerRemovido) {
    var indexFilme = todosOsFilmes().findIndex((filme) => {
        return filme.sequential == filmeASerRemovido
    })

    console.log(indexFilme)

    if (indexFilme !== -1) {
        listaFilmes.splice(indexFilme, 1)
    } else {
        console.log('Sequencial não encontrada')
    }
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

module.exports = {ordemAlfabetica, ordemSequencial, ordemLancamento, trilogia, addFilme, removerFilme, removerFilmeSeq, allMovies}