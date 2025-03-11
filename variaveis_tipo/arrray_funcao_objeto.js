let operadores = ["adição", "subtração", "multiplição", "divisão", true];
operadores[2];

let numA = 10;
let numB = 5;
let operacao;

function imprimirOperacao(operacao, operando1, operacao2, resultado) {

    console.log(`Resultado da ${operacao} entre ${operando1} e ${operacao2} = ${resultado}`)
}

operacao = numA + numB;
imprimirOperacao(operadores[0], numA, numB, operacao)

operacao = numA - numB;
imprimirOperacao(operadores[1], numA, numB, operacao)

operacao = numA * numB;
imprimirOperacao(operadores[2], numA, numB, operacao)

operacao = numA / numB;
imprimirOperacao(operadores[3], numA, numB, operacao)

let vetor = [true, 0.15, "Texto", 1];
console.log(vetor)

vetor[3] = 3.14
console.log(vetor)

let matriz = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

];

function imprimirMatriz(elemento) {

    for (let linhas = 0; linhas < matriz.length; linhas++) {
        
        let linha_organizada = ""

        for(colunas = 0; colunas < matriz[0].length; colunas++) {

            console.log(matriz[linhas][colunas] + "\t");
        }
        
        console.log(linha_organizada)
    }
}

//imprimirMatriz(matriz);

let capitais = {

    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

//console.log(capitais.DF + " - " + capitais.DDD_DF)

function verificarNumeroPar(n) {

    if (n % 2 == 0) {

        console.log("O número verificado é par.");
        
        return true

    } else {

        return false;
    }

}

let calculadora = {

    SOMAR: (a,b) => {

        return a + b;
    },

    SUBTRAIR: (a, b) => {

        return a - b;
    },

    MULTIPLICAR: (a, b) => {

        return a * b;
    },

    DIVISAO: (a, b) => {

        return a / b;
    },

    verificarNumeroPar: verificarNumeroPar
};

console.log(calculadora.SOMAR(1, 2))
console.log(calculadora.verificarNumeroPar(calculadora.SOMAR(2, 2)))
