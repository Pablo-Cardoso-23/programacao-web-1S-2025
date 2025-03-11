/*
ENUNCIADO: Implemente a função transporMatriz(A);
A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta;
MATRIZ ORIGINAL:
1 2
3 4
5 6

MATRIZ TRANSPORTA:
1 3 5
2 4 6
*/

function transporMatriz(A) {

    console.log("MATRIZ ORIGINAL:");

    for (let linha = 0; linha < A.length; linha++) {
        
        let linha_organizada = "";

        for (let coluna = 0; coluna < A[linha].length; coluna++) {

            linha_organizada += A[linha][coluna] + " ";
        }
        
        console.log(linha_organizada);
    }

    console.log("MATRIZ TRANSPOSTA:")
    
    let transposta = [];

    for (let j = 0; j < A[0].length; j++) {
        
        let novaLinha = [];

        for (let i = 0; i < A.length; i++){

            novaLinha.push(A[i][j]);
        }

        transposta.push(novaLinha)
    }

    for (let i = 0; i < transposta.length; i++) {

        console.log(transposta[i].join(" "));
    }
    
}

let matriz = [

    [1, 2],
    [3, 4],
    [5, 6]
]

transporMatriz(matriz)

