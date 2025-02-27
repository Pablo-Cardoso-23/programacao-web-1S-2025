const n = 3;

// NORMALMENTE USA-SE const E let
// PERMITE REDECLARAR VARIÁVEIS GLOBAL
var j  = 6;
var j = 7;

// NÃO PERMITE REDECLARAR VARIÁVEIS GLOBAL
let i = 6;
i = 7;

let nome = "Pablo";
let telefone = "1234";

console.log("Meu nome é: " + nome + " e meu telefone é: " + telefone);
console.log(`Meu nome é ${nome} e meu telefone é ${telefone}`);

let x = 1;
x = 0.5;
x = 3.14;

let b = true;
b = false;

if (b) {
    console.log('b é verdadeiro');
}

let conexao = null;
console.log(`Conexão: ${conexao}`);

console.log('i = ' + i);
