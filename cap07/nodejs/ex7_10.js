const prompt = require("prompt-sync")();    // pacote para entrada de dados

const altura = Number(prompt("Altura da Árvore: "));    // lê a altura da árvore
console.log();    // deixa uma linha em branco

for (i = 1; i <= altura; i++) {    // inicia a repetição
    const espacos = 30 + (altura - i);    // calcula espaços do início
    console.log(" ".repeat(espacos) + "*".repeat(i*2));    // exibe cada linha
}

for (i = 1; i <= (altura / 2); i++) {    // inicia a repetição
    const espacos = 30 + (altura - 1);    // calcula espaços do início
    console.log(" ".repeat(espacos) + "*".repeat(2));    // exibe cada linha
}
    