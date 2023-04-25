const movies = require("../db/movies.json");

function getMovies() {
  return movies;
}

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

module.exports = { alphabetical, sequential, year, getMovies };
