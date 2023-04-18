const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("Rota padrão");
});

app.listen(3000, function () {
  console.log("O aplicativo está rodando na porta 3000");
});
