/*1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
operação. Faça a implementação usando a palavra function para todas elas.*/

function soma (a, b){
    return a + b;
}

function subtracao (a, b){
    return a - b;
}

function multiplicacao (a, b){
    return a * b;
}

function divisao (a, b){
    if (b==0){
        return false;
    }
    else {
        return a/b;
    }
}

// Teste:
// const res = soma (-12,3)
// console.log (res)

// const ressub = subtracao (-2, 3)
// console.log (ressub)

// const resm = multiplicacao (3, 6)
// console.log(resm)

// const resd = divisao (2, 0)
// console.log (resd)

// const resdiv = divisao (2, 3)
// console.log (resdiv)