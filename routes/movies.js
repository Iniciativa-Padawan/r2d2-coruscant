const moviesRepo = require("../repository/moviesRepo");
const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
  res.send(moviesRepo.getMovies());
});

router.get("/movies/alphabetical", (req, res) => {
  res.send(moviesRepo.alphabetical());
});

router.get("/movies/sequential", (req, res) => {
  res.send(moviesRepo.sequential());
});

router.get("/movies/year", (req, res) => {
  res.send(moviesRepo.year());
});

module.exports = router;
