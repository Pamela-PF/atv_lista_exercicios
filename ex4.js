/*4. Escreva um script que apresenta as seguintes operações para o usuário:
1- Soma
2- Subtração
3-Multiplicação
4- Divisão
5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas.*/
const prompt = require('prompt-sync')();

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

