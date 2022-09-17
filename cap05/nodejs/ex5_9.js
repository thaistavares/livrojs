const prompt = require("prompt-sync")();             // adiciona o pacote ao programa

const produto = prompt("Produto: ");    // lê o nome do produto e...
const numero = Number(prompt("Nº de etiquetas: "));    // quantidade de etiquetas

// Cria um laço de repetição até numero/2 (pois imprime duas etiquetas por linha)
for (let i = 1; i <= (numero / 2); i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`);
}
if (numero % 2 == 1) {    // se quantidade solicitada de etiquetas for ímpar...
    console.log(produto); // imprime mais uma etiqueta
}