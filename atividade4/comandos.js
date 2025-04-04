const estoque = [];

function is_numeric(number) {

    if(isNaN(number) || number == null ) {

        return false;
    }

    return true;
}

function adicionarProdutos(id, nome, quantidade) {

    const produto = {

        id: id,
        nome: nome,
        quantidade: quantidade
    };

    let validado = true;

    if(!is_numeric(produto.id) || produto.id <= 0) {

        validado = false;
    }

    if(isIdCadastrado(produto.id)) {

        validado = false;
    }

    if(!is_numeric(produto.quantidade)|| produto.quantidade < 0) {

        validado = false;
    }


    if(validado) {
    
        estoque.push(produto);

        return `Produto ${produto.nome} adicionado com sucesso!`;
    }
    
    else {

        return `Produto não adicionado!`;
    }
    

}

function isIdCadastrado(id) {

    for(let indice in estoque) {
        let item_cadastrado = estoque[indice];

        if(item_cadastrado.id == id) {

            return true;
        }
    }

    return false;
}

function listarProdutos() {

    let lista = '';

    for (let i = 0; i < estoque.length; i++) {

        lista += `ID: ${estoque[i].id}, Nome: ${estoque[i].nome}, Quantidade: ${estoque[i].quantidade}\n`;

    }
    
    return lista;
    
}

function removerProdutos(id) {

    if(!is_numeric(id) || id <= 0) {

        return `ID INVÁLIDO!`;
    }

    else {

        for (let i = 0; i < estoque.length; i++) {

            if (estoque[i].id == id) {
    
                estoque.splice(i, 1);
                return `Produto com ID ${id} removido com sucesso!`;
    
            }
        }
    }

    return `Produto com ID ${id} não encontrado!`;
}

function editarProdutos(id, quantidade) {

    if(!is_numeric(id) || id <= 0) {

        return `ID INVÁLIDO!`;
    }

    if(!is_numeric(quantidade) || quantidade < 0) {

        return `QUANTIDADE INVÁLIDA!`;
    }

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
