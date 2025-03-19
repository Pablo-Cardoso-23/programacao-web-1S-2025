const express = require('express');
const calc = require('./calculadora');

const app = express();

app.get('/subtrair/:num1/:num2', (req, res) => {

  res.send('Resultado =  ' + calc.subtrair(parseInt(req.params.num1), parseInt(req.params.num2)));

});

app.get('/somar/:num1/:num2', (req, res) => {

  res.send('Resultado =  ' + calc.somar(parseInt(req.params.num1), parseInt(req.params.num2)));

});

app.get('/multiplicar/:num1/:num2', (req, res) => {

  res.send('Resultado =  ' + calc.multiplicar(parseInt(req.params.num1), parseInt(req.params.num2)));

});

app.get('/dividir/:num1/:num2', (req, res) => {

  res.send('Resultado =  ' + calc.dividir(parseInt(req.params.num1), parseInt(req.params.num2)));

});

const PORT = 8080;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});
