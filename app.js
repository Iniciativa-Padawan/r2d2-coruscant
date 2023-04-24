const express = require('express')

const app = express()

const movies = [
  {
    name: 'O Império Contra-Ataca',
    year: 1981
  },
  {
    name: 'A ameaça fanstasma',
    year: 1999
  }
]

// get, post, put, delete, patch
app.get('', function (requisicao, resposta) {
  resposta.send('Rota padrão')
})

app.get('/movies', (req, res) => {
  res.send(movies)
})

app.listen(3000, function () {
  console.log('O aplicativo está rodando na porta 3000')
})