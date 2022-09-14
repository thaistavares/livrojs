const prompt = require("prompt-sync")();     // adiciona o pacote ao programa
const salario = Number(prompt("Salário: "));         // lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): "));
const quadrienios = Math.floor(tempo / 4);                // calcula o valor da entrada
const acrescimo = salario + ((salario * 0.01)*quadrienios);         // calcula o valor das parcelas
console.log(`Quadriênios: ${quadrienios}`);         // exibe as respostas
console.log(`Salário Final: R$${acrescimo.toFixed(2)}`);