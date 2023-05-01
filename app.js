const express = require('express')
const app = express()
const movies = require('./movies/routes')

app.use(movies)

app.listen(4000, function(){
    console.log('O aplicativo está rodando na porta 4000')
})

