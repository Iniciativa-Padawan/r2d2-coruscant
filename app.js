const express = require("express");

const app = express();

const movies = [
  {
    nome: "A Ameaça Fantasma",
    anoLancamento: 1999,
    sequencial: 1,
    trilogia: "Prequela",
  },
  {
    nome: "Ataque dos Clones",
    anoLancamento: 2002,
    sequencial: 2,
    trilogia: "Prequela",
  },
  {
    nome: "A Vingança dos Sith",
    anoLancamento: 2005,
    sequencial: 3,
    trilogia: "Prequela",
  },
  {
    nome: "Solo: Uma História Star Wars",
    anoLancamento: 2018,
    sequencial: 4,
    trilogia: "Spin-off",
  },
  {
    nome: "Rogue One: Uma História Star Wars",
    anoLancamento: 2016,
    sequencial: 5,
    trilogia: "Spin-off",
  },
  {
    nome: "Uma nova esperança",
    anoLancamento: 1977,
    sequencial: 6,
    trilogia: "Clássica",
  },
  {
    nome: "O Império Contra-Ataca",
    anoLancamento: 1980,
    sequencial: 7,
    trilogia: "Clássica",
  },
  {
    nome: "O Retorno de Jedi",
    anoLancamento: 1983,
    sequencial: 8,
    trilogia: "Clássica",
  },
  {
    nome: "O Despertar da Força",
    anoLancamento: 2015,
    sequencial: 9,
    trilogia: "Sequela",
  },
  {
    nome: "Os Últimos Jedi",
    anoLancamento: 2017,
    sequencial: 10,
    trilogia: "Sequela",
  },
  {
    nome: "The Rise of Skywalker",
    anoLancamento: 2019,
    sequencial: 11,
    trilogia: "Sequela",
  },
];

app.get("/", function (request, response) {
  response.send("Rota padrão");
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

app.get("/movies/alphabetical", (req, res) => {
  res.send(alphabetical());
});

app.get("/movies/sequential", (req, res) => {
  res.send(sequential());
});

app.get("/movies/year", (req, res) => {
  res.send(year());
});

app.listen(3000, function () {
  console.log("O aplicativo está rodando na porta 3000");
});

function alphabetical() {
  movies.sort(function (x, y) {
    let a = x.nome.toUpperCase(),
      b = y.nome.toUpperCase();

    return a == b ? 0 : a > b ? 1 : -1;
  });
  return movies;
}

function sequential() {
  movies.sort(function (a, b) {
    if (a.sequencial > b.sequencial) {
      return 1;
    }
    if (a.sequencial < b.sequencial) {
      return -1;
    }
    return 0;
  });
  return movies;
}

function year() {
  movies.sort(function (a, b) {
    if (a.anoLancamento > b.anoLancamento) {
      return 1;
    }
    if (a.anoLancamento < b.anoLancamento) {
      return -1;
    }
    return 0;
  });
  return movies;
}
