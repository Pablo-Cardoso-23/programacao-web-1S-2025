/*
ENUNCIADO: Implemente uma função com a seguinte assinatura: verificarNumeroPrimo(n);
A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso não seja primo.
*/ 

function verificarNumeroPrimo(num) {

    if (num < 2) {

        return false;
    }

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {
            
            return false;
        }
    }

    return true;
}

console.log(verificarNumeroPrimo(0)); //false
console.log(verificarNumeroPrimo(1)); //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //false
