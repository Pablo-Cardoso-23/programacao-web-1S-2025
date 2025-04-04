const express = require('express');
const estoque = require('./comandos');
const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    
    res.send(`<h1>P4 STORE</h1>
        <h2>Bem-Vindo(a) ao sistema de estoque!</h2>
        <p>Comandos Disponíveis:</p>
        <ul>
            <li>Adicionar Produto: /adicionar/:id/:nome/:qtd</li>
            <li>Listar Produtos: /listar</li>
            <li>Remover Produto: /remover/:id</li>
            <li>Editar Produto: /editar/:id/:qtd</li>
            </ul>`);
    
});

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {

    const id = Number(req.params.id);
    const nome = req.params.nome;
    const qtd = Number(req.params.qtd);
    
    const item = estoque.adicionarProdutos(id, nome, qtd);
    res.send(`Situação da Operação: ${item}`);
    
});

app.get('/listar', (req, res) => {

    const lista = estoque.listarProdutos();
    res.send(`<h1>Lista de Produtos</h1><pre>${lista}</pre>`);
});

app.get('/remover/:id', (req, res) => {

    const id = Number(req.params.id);
    const item = estoque.removerProdutos(id);
    res.send(`Situação da Operação: ${item}`);

});

app.get('/editar/:id/:qtd', (req, res) => {

    const id = Number(req.params.id);
    const qtd = Number(req.params.qtd);
    const item_editar = estoque.editarProdutos(id, qtd);
    res.send(`Situação da Operação: ${item_editar}`);
});

app.listen(PORT, () => {

    console.log(`Servidor rodando na porta ${PORT}`);
});
