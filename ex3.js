/*3. Crie um objeto JSON que abriga todas as operações do exercício 2.*/
let calcular = {
    soma : (a, b) => a + b,
    subtracao : (a, b) => a - b,
    multiplicacao : (a, b) => a * b,
    divisao : (a, b) => {
        if (b==0){
            return false;
        }
        else {
            return a / b;
        }
    },
}
//Teste
// console.log(calcular.soma(2, 4))
// console.log(calcular.subtracao(30, 6))
// console.log(calcular.multiplicacao(7, -9))
// console.log(calcular.divisao(2, 0))
// console.log(calcular.divisao(4, 12))