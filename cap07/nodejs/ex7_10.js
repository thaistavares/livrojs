const prompt = require("prompt-sync")();    // pacote para entrada de dados

const formula = prompt("Fórmula: ");    // lê a fórmula
let abre = 0;
let fecha = 0;

for (const simbolo of formula) {    // percorre os caracteres da fórmula
    if (simbolo == "(") {
        abre++;
    } else if (simbolo == ")") {
        fecha++;
    }
    
    // se, em algum momento, o número de fecha for maior que de abre...
    if (fecha > abre) {
        break;    // ...sai da repetição
    }
}

if (abre == fecha) {
    console.log("Ok! Fórmula correta (em relação aos parênteses)");
} else {
    console.log("Erro... Fórmula incorreta");
}