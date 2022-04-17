/*6. Refaça o exercício 5 usando a construção async/await.*/

const prompt = require('prompt-sync')();
const axios = require('axios');
require('dotenv').config();

const {
    PROTOCOL,
    BASE_URL,
    API_KEY,
    UNITS,
    LANGUAGE
} = process.env

const menu = async() => {
    let opcao;
    do {
        console.log("************** \n Menu \n 1- Digitar latitude e longitude \n 2- Sair \n **************");
        opcao = prompt("Digite a opção escolhida: ");
        switch(opcao){
            case "1":
                let lat = parseInt(prompt("Digite o valor da latitude: "));
                let lon = parseInt(prompt("Digite o valor da longitude"));
                const url = await `${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${UNITS}&lang=${LANGUAGE}`;
                console.log("Temperatura em Celsius: ${res.data.main.temp}");
                break;
            case "2": 
                console.log("Você digitou a opção 2 que é o sair. Tchau : (");
                break;
            default:
                console.log("Opção invalida! Digite 1 ou 2");
        }
    } while (opcao != 2)
}
menu();