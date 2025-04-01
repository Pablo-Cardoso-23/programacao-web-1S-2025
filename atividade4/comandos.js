const estoque = [];

function adicionarProdutos(id, nome, quantidade) {

    const produto = {

        id: id,
        nome: nome,
        quantidade: quantidade
    };

    estoque.push(produto);

}

function listarProdutos() {

    let lista = '';

    for (let i = 0; i < estoque.length; i++) {

        lista += `ID: ${estoque[i].id}, Nome: ${estoque[i].nome}, Quantidade: ${estoque[i].quantidade}\n`;

    }
    
    return lista;
    
}

function removerProdutos(id) {

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i].id == id) {

            estoque.splice(i, 1);
            return `Produto com ID ${id} removido com sucesso!`;

        }
    }

    return `Produto com ID ${id} não encontrado!`;
}

function editarProdutos(id, quantidade) {

    for (let i = 0; i < estoque.length; i++) {

        if (estoque[i].id == id ) {

            estoque[i].quantidade = quantidade;

            return `Produto com ID: ${id} editado com sucesso!`;
        }
    }

    return `Produto com o ID ${id} não encontrado na base de dados!`;
}

module.exports = {

    adicionarProdutos,
    listarProdutos,
    removerProdutos,
    editarProdutos

}
