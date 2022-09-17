const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor R$: "));          // Lê o valor do carnê...
const numero = Number(prompt("Nº de Parcelas: "));   // e o número de parcelas
const valorParcelas = Math.floor(valor / numero);    // calcula valor em decimais
const valorFinal = valorParcelas + (valor % numero); // calcula parcela final
for (let i = 1; i < numero; i++) {
    console.log(`${i}ª parcela: R$${valorParcelas.toFixed(2)}`);
}

console.log(`${numero}ª parcela: R$${valorFinal.toFixed(2)}`);    // última parcela