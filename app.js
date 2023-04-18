const express = require('express')

const app = express()

// get, post, put, delete, patch
app.get('', function (requisicao, resposta) {
  resposta.send('Rota padrão')
})

app.listen(3000, function () {
  console.log('O aplicativo está rodando na porta 3000')
})