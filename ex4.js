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
const calc = () => {
    let opcao;
    do{
        console.log("****************** \n Menu - Escolha uma das opções: \n 1- Soma\n 2- Subtração \n 3- Multiplicação \n 4- Divisão \n 5- Sair");
        opcao = prompt("Digite a opção escolhida: ");

        switch (opcao){
            case "1":
                let aSo = parseInt(prompt("Digite o primeiro número: "));
                let bSo = parseInt(prompt("Digite o segundo número: "));
                console.log(calcular.soma(aSo, bSo));
                break;
            case "2":
                let aSu = parseInt(prompt("Digite o primeiro número: "));
                let bSu = parseInt(prompt("Digite o segundo número: "));
                console.log(calcular.subtracao(aSu, bSu));
                break;
            case "3":
                let aMu = parseInt(prompt("Digite o primeiro número: "));
                let bMu = parseInt(prompt("Digite o segundo número: "));
                console.log(calcular.multiplicacao(aMu, bMu));
                break;
            case "4":
                let aDi = parseInt(prompt("Digite o primeiro número: "));
                let bDi = parseInt(prompt("Digite o segundo número: "));
                console.log(calcular.divisao(aDi, bDi));
                break;
            case "5":
                console.log(`Você escolheu o número 5 que é o sair. Tchau :(`);
                break;
            default: 
                console.log(`Opção invalida! Escolha os números entre 1 e 5.`);
        }
    }while (opcao !=5)
}
calc()