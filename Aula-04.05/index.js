const express = require ('express')
const app = express()
const port = 8081

var rotasProduto = require('./rotasProduto')
var rotasCliente = require('./rotasCliente')

/**Invocar middleware */
app.use('/produtos', rotasProduto)
app.use('/clientes', rotasCliente)


app.listen(port, () => console.log('Aplicação em execução na url http://localhost:8081'))