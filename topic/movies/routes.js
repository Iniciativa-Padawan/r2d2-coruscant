const controller = require("./controller");
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const schemas = require("./schemas");

router.get("/movies", (req, res) => {
  res.send(controller.getMovies());
});

router.get("/movies/trilogy/:trilogy", (req, res) => {
  const movies = controller.getMoviesByTrilogia(req.params.trilogy);

  if (movies.length == 0) res.status(404).send("Trilogia não encontrada");
  else res.send(movies);
});

router.post("/movies", schemas.movieSchema(), (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(400).send({ errors: result.errors.map((erro) => erro.msg) });
  } else {
    controller.addMovie(req.body);
    res.status(201).send(controller.getMovies());
  }
});

router.put("/movies/:sequencial", schemas.movieSchema(), (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(400).send({ errors: result.errors.map((erro) => erro.msg) });
  } else {
    controller.updateMovie(req.body, req.params.sequencial);
    res.send(controller.getMovies());
  }
});

router.delete("/movies/:sequencial", (req, res) => {
  controller.deleteMovieBySequencial(req.params.sequencial);

  res.send(controller.getMovies());
});

router.get("/movies/alphabetical", (req, res) => {
  res.send(controller.ordemAlfabetica());
});

router.get("/movies/sequential", (req, res) => {
  res.send(controller.ordemSequencial());
});

router.get("/movies/movie-release", (req, res) => {
  res.send(controller.ordemLancamento());
});

module.exports = router;
