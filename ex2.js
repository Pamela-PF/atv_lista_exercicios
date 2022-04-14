/*2. Refaça o exercício 1 usando arrow functions.*/
const soma = (a, b) =>  a + b;

const subtracao = (a, b) => a - b;

const multiplicacao = (a, b) =>  a * b;

const divisao = (a, b) => {
    if (b==0) {
        return false;
    }
    else {
        return a/b;
    }
}

//Teste
// console.log(soma(5, 10))
// console.log(subtracao(2, 10))
// console.log(multiplicacao(10, -3))
// console.log(divisao(2, 0))
// console.log(divisao(25, 5))