const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const movies = require('./movies/routes')

app.use(movies)
app.use(bodyParser.json())

app.listen(4000, function(){
    console.log('O aplicativo está rodando na porta 4000')
})

