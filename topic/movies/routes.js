const controller = require("./controller");
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const schemas = require("./schemas");

router.get("/movies", async (req, res) => {
  const movies = await controller.getMovies();
  res.send(movies);
});

router.get("/movies/trilogy/:trilogy", (req, res) => {
  const movies = controller.getMoviesBytrilogy(req.params.trilogy);

  if (movies.length == 0) res.status(404).send("Trilogy not found");
  else res.send(movies);
});

router.get("/movies/alphabetical", (req, res) => {
  res.send(controller.ordemAlfabetica());
});

router.get("/movies/sequential", (req, res) => {
  res.send(controller.ordemsequential());
});

router.get("/movies/movie-release", (req, res) => {
  res.send(controller.ordemLancamento());
});

router.post("/movies", schemas.movieSchema(), async (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(400).send({ errors: result.errors.map((erro) => erro.msg) });
  } else {
    await controller.addMovie(req.body);
    res.status(201).send(controller.getMovies());
  }
});

router.put("/movies/:id", schemas.movieSchema(), (req, res) => {
  const result = validationResult(req);
  if (result.errors.length > 0) {
    res.status(400).send({ errors: result.errors.map((erro) => erro.msg) });
  } else {
    controller.updateMovie(req.body, req.params.sequential);
    res.send(controller.getMovies());
  }
});

router.delete("/movies/:id", async (req, res) => {
  controller.ById(req.params.id);

  res.send(controller.getMovies());
});

router.delete("/movies", (req, res) => {
  controller.deleteLastMovie();

  res.send(controller.getMovies());
});

module.exports = router;
