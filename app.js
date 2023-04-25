const express = require("express");
const router = require("./routes/movies");
const app = express();

app.use(router);

app.listen(3000, function () {
  console.log("O aplicativo está rodando na porta 3000");
});
