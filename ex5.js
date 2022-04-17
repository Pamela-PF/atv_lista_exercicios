/*5. O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
não é o mesmo utilizado em aula.
https://openweathermap.org/current
Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
atual (atributo chamado temp). O programa deve ser um loop que exibe as seguintes
opções para o usuário:
1- Digitar latitude e longitude
2- Sair
O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
informar os valores de latitude e longitude da localização da qual deseja saber a
temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
de ambiente que indica qual unidade de medida de temperatura deve ser utilizada:
Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
e de tomar o cuidado de não armazená-lo no sistema de controle de versão.*/
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


function temperatura (lat, lon){
    return new Promise = (function (resolve, reject){
        const url = `${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${UNITS}&lang=${LANGUAGE}`;
        resolve (axios.get(url));
        // axios.get(url);
        // resolve(url);
        // return url;
    });
}

const menu = () => {
    let opcao;
    do {
        console.log("************** \n Menu \n 1- Digitar latitude e longitude \n 2- Sair \n **************");
        opcao = prompt("Digite a opção escolhida: ");
        switch(opcao){
            case "1":
                let lat = parseInt(prompt("Digite o valor da latitude: "));
                let lon = parseInt(prompt("Digite o valor da longitude"));
                temperatura (lat, lon)
                    .then (res => 
                       { console.log("Temperatura em Celsius: ${res.data.main.temp}")
                    });
                    //  .catch(err=>{
                    //      console.log(err);
                    //  });
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