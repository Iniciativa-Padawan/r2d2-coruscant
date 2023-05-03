const express = require("express");
const bodyParser = require("body-parser");
const movieRoutesTopic = require("./topic/movies/routes");

const app = express();
app.use(bodyParser.json());

app.use("/topic", movieRoutesTopic);

app.listen(3000, function () {
  console.log("O aplicativo está rodando na porta 3000");
});
