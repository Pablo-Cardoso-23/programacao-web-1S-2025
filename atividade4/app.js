const express = require('express');
const estoque = require('./comandos');
const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    
    res.send(`<h1>P4 STORE</h1>
        <h2>Bem-Vindo(a) ao sistema de estoque!</h2>`);
    
});

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {

    const {id, nome, qtd} = req.params;
    estoque.adicionarProdutos(id, nome, qtd);
    res.send('Produto adicionado ao estoque com sucesso!');
    
});

app.get('/listar', (req, res) => {

    const lista = estoque.listarProdutos();
    res.send(`<h1>Lista de Produtos</h1><pre>${lista}</pre>`);
});

app.get('/remover/:id', (req, res) => {

    const {id} = req.params;
    const item = estoque.removerProdutos(id);
    res.send(`Item Removido: ${item}`);

});

app.get('/editar/:id/:qtd', (req, res) => {

    const {id, qtd} = req.params;
    const item_editar = estoque.editarProdutos(id, qtd);
    res.send(`Item Editado: ${item_editar}`);
});

app.listen(PORT, () => {

    console.log(`Servidor rodando na porta ${PORT}`);
});
