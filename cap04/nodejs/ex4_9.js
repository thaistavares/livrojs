const prompt = require("prompt-sync")();             // adiciona o pacote ao programa
const numero = Number(prompt("Número (centena): ")); // lê os dados de entrada

if ((numero < 100) || (numero >= 1000)) {
    console.log(`Erro... deve ser uma centena`);     // exibe as respostas    
} else {
    const unidade = Math.floor(numero / 100);
    const dezena = Math.floor(numero % 100 / 10);
    const centena = Math.floor((numero % 100) % 10);
    console.log(`Invertido: ${centena}${dezena}${unidade}`);  // exibe as respostas
}