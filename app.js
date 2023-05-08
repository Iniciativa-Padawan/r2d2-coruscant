const express = require('express')
const bodyParser = require('body-parser');
const movieRoutesTopic = require('./topic/movies/routes')
var cors = require('cors')
const port = process.env.PORT || 3001;

const app = express()
app.options('*', cors())
app.use(bodyParser.json())
app.use(movieRoutesTopic)

app.listen(port, function () {
  console.log(`O aplicativo está rodando na porta ${port}`)
})


