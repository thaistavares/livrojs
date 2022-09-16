const prompt = require("prompt-sync")();     // adiciona o pacote ao programa
const compra = Number(prompt("Valor da Compra R$: "));         // lê os dados de entrada

let qtdParcelas = Math.floor(compra / 20);
let parcelas;

if (qtdParcelas > 6) {
    qtdParcelas = 6;
    parcelas = compra / qtdParcelas;
    console.log(`Pode pagar em ${qtdParcelas}x de R$${parcelas.toFixed(2)}`);         // exibe as respostas    
} else {
    parcelas = compra / qtdParcelas;
    console.log(`Pode pagar em ${qtdParcelas}x de R$${parcelas.toFixed(2)}`);         // exibe as respostas
}


