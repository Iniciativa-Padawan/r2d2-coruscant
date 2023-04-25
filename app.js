const express = require('express')
const app = express()
const movieRoutesTopic = require('./topic/movies/routes')
const movieRoutesType = require('./type/routes/movies')

app.use('/topic', movieRoutesTopic)
app.use('/type', movieRoutesType)

app.listen(3000, function () {
  console.log('O aplicativo está rodando na porta 3000')
})