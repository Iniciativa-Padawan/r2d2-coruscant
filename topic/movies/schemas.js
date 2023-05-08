const { checkSchema } = require("express-validator");

const movieSchema = () =>
  checkSchema({
    name: {
      isEmpty: {
        negated: true,
        errorMessage: "Name is required",
      },
    },
    year: {
      isEmpty: {
        negated: true,
        errorMessage: "Year is required",
      },
    },
    sequential: {
      isEmpty: {
        negated: true,
        errorMessage: "Sequential is required",
      },
    },
    trilogy: {
      isEmpty: {
        negated: true,
        errorMessage: "Trilogy is required",
      },
    },
  });

module.exports = { movieSchema };
