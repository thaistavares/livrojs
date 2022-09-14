const prompt = require("prompt-sync")();     // adiciona o pacote ao programa
const peso = Number(prompt("Peso da Ração (kg): "));         // lê os dados de entrada
const consumo = Number(prompt("Consumo Diário (g): "));
const duracao = Math.floor((peso * 1000) / consumo);                // calcula o valor da entrada
const sobra = Math.ceil((peso * 1000) - (consumo * duracao));         // calcula o valor das parcelas
console.log(`Duração: ${duracao} dias`);         // exibe as respostas
console.log(`Sobra: ${sobra} g`);