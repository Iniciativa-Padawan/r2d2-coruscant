const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET METHODS */

const getAllMovies = async () => {
  const movies = await prisma.movie.findMany();
  return movies;
};

const getMovieById = async (id) => {
  const movie = await prisma.movie.findUnique({
    where: {
      id: id,
    },
  });
  return movie;
};

const getMovieByName = async (name) => {
  const movie = await prisma.movie.findUnique({
    where: {
      name: name,
    },
  });
  return movie;
};

const getMovieByYear = async (year) => {
  const movie = await prisma.movie.findUnique({
    where: {
      year: year,
    },
  });
  return movie;
};

const getMovieBySequential = async (sequential) => {
  const movie = await prisma.movie.findUnique({
    where: {
      sequential: sequential,
    },
  });
  return movie;
};

const getMoviesByTrilogy = async (trilogy) => {
  const movies = await prisma.movie.findUnique({
    where: {
      trilogy: trilogy,
    },
  });
  return movies;
};

const getMoviesOrderByNameAsc = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return movies;
};

const getMoviesOrderByNameDesc = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return movies;
};

const getMoviesOrderByYearAsc = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      year: "asc",
    },
  });
  return movies;
};

const getMoviesOrderByYearDesc = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      year: "desc",
    },
  });
  return movies;
};

const getMoviesOrderBySequentialAsc = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      sequential: "asc",
    },
  });
  return movies;
};

const getMoviesOrderBySequentialDesc = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      sequential: "desc",
    },
  });
  return movies;
};

/* POST METHODS */

const createMovie = async (movie) => {
  await prisma.movie.create({
    data: movie,
  });
};

/* UPDATE METHODS */

const updateMovie = async (movie, id) => {
  await prisma.movie.update({
    where: {
      id: id,
    },
    data: movie,
  });
};

/* DELETE METHODS */

const deleteMovie = async (id) => {
  await prisma.movie.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByName,
  getMovieByYear,
  getMovieBySequential,
  getMoviesByTrilogy,
  getMoviesOrderByNameAsc,
  getMoviesOrderByNameDesc,
  getMoviesOrderByYearAsc,
  getMoviesOrderByYearDesc,
  getMoviesOrderBySequentialAsc,
  getMoviesOrderBySequentialDesc,
  createMovie,
  updateMovie,
  deleteMovie,
};
