const { checkSchema } = require("express-validator");

const movieSchema = () =>
  checkSchema({
    nomeDoFilme: {
      isEmpty: {
        negated: true,
        errorMessage: "Nome do filme é obrigatório",
      },
    },
    anoDeLancamento: {
      isEmpty: {
        negated: true,
        errorMessage: "Ano de lançamennto do filme é obrigatório",
      },
    },
    sequencialFranquia: {
      isEmpty: {
        negated: true,
        errorMessage: "Sequencial do filme é obrigatório",
      },
    },
    trilogia: {
      isEmpty: {
        negated: true,
        errorMessage: "Trilogia do filme é obrigatório",
      },
    },
  });

module.exports = { movieSchema };
