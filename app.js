const express = require('express')
const bodyParser = require('body-parser'); /// <---
const movieRoutesTopic = require('./topic/movies/routes')
const movieRoutesType = require('./type/routes/movies')

const app = express()
app.use(bodyParser.json()) /// <---

app.use('/topic', movieRoutesTopic)
app.use('/type', movieRoutesType)

app.listen(3000, function () {
  console.log('O aplicativo está rodando na porta 3000')
})


