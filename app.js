const express = require('express')
const bodyParser = require('body-parser');
const movieRoutesTopic = require('./topic/movies/routes')
var cors = require('cors')

const app = express()
app.options('*', cors())
app.use(bodyParser.json())
app.use(movieRoutesTopic)

app.listen(3000, function () {
  console.log('O aplicativo está rodando na porta 3000')
})


