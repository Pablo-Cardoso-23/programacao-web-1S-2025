const express = require('express');
const calc = require('./calculadora');

const app = express();

app.get('/', (req, res) => {

  res.send('Hello, World!');

});

app.get('/hello/:nome', (req, res) => {

    res.send('Hello, ' + req.params.nome);
  
  });

const PORT = 8080;
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});
