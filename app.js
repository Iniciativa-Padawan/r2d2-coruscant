const express = require('express')

const app = express()

const listaFilmes = [
    {
        nomeDoFilme: 'Ataque dos Clones',
        anoDeLancamento: 2002,
        sequencialFranquia: 2,
        trilogiaPert: 'Prequel',
    },
    {
        nomeDoFilme: 'Solo: Uma História Star Wars',
        anoDeLancamento: 2018,
        sequencialFranquia: 4,
        trilogiaPert: 'Spin Off',
    },
    {
        nomeDoFilme: 'A Vingança dos Sith',
        anoDeLancamento: 2005,
        sequencialFranquia: 3,
        trilogiaPert: 'Prequel',
    },
    {
        nomeDoFilme: 'Rogue One: Uma História Star Wars',
        anoDeLancamento: 2016,
        sequencialFranquia: 5,
        trilogiaPert: 'Spin Off',
    },
    {
        nomeDoFilme: 'A Ameaça Fantasma',
        anoDeLancamento: 1999,
        sequencialFranquia: 1,
        trilogiaPert: 'Prequel',
    },
    {
        nomeDoFilme: 'O Despertar da Força',
        anoDeLancamento: 2015,
        sequencialFranquia: 9,
        trilogiaPert: 'Sequel',
    },
    {
        nomeDoFilme: 'Uma nova esperança',
        anoDeLancamento: 1977,
        sequencialFranquia: 6,
        trilogiaPert: 'Clássica',
    },
    {
        nomeDoFilme: 'Os Últimos Jedi',
        anoDeLancamento: 2017,
        sequencialFranquia: 10,
        trilogiaPert: 'Sequel',
    },
    {
        nomeDoFilme: 'O Retorno de Jedi',
        anoDeLancamento: 1983,
        sequencialFranquia: 8,
        trilogiaPert: 'Clássica',
    },
    {
        nomeDoFilme: 'O Império Contra-Ataca',
        anoDeLancamento: 1980,
        sequencialFranquia: 7,
        trilogiaPert: 'Clássica',
    },
    {
        nomeDoFilme: 'A Ascensão Skywalker',
        anoDeLancamento: 2019,
        sequencialFranquia: 11,
        trilogiaPert: 'Sequel',
    }
]

// requisição da lista
app.get('/movies', (req, res) => {
    res.send(listaFilmes)
})

// requisição ordem alfabética
app.get('/movies/alphabetical', (req, res) => {
    res.send(ordemAlfabetica())
})

// requisição ordem sequencial
app.get('/movies/sequential', (req, res) => {
    res.send(ordemSequencial())
})
//requisição ordem lançamento
app.get('/movies/movie-release', (req, res) => {
    res.send(ordemLancamento())
})

app.listen(3000, function(){
    console.log('O aplicativo está rodando na porta 3000')
})

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