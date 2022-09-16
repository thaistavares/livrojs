const prompt = require("prompt-sync")();     // adiciona o pacote ao programa
const pessoas = Number(prompt("Nº de Pessoas: "));         // lê os dados de entrada
const peixes = Number(prompt("Nº de Peixes: "));
let valor;
if (peixes <= pessoas) {
    valor = pessoas * 20; 
} else {
    valor = (pessoas * 20) + ((peixes - pessoas) * 12);
}
// const totalEntrada = pessoas * 20;
// const totalPeixes = (peixes - pessoas) * 12;
// const valor = totalEntrada + totalPeixes;
console.log(`Pagar: R$${valor.toFixed(2)}`);         // exibe as respostas