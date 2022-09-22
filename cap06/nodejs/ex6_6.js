const prompt = require("prompt-sync")();
console.log("Informe os clientes em ordem de chegada ou 'Fim' no nome para sair");
const clientes = [];    // declara o vetor
do {
    const nome = prompt("Nome: ");    // lê o nome
    if (nome == "Fim") {              // antes de ler a nota, verifica
        break;                        // sai da repetição
    }
    const idade = Number(prompt("Idade: "));    // lê a idade
    clientes.push({nome, idade});                // adiciona os dados ao vetor de objetos
    console.log("Ok! Cliente inserido(a) na fila...");
} while (true) ;
console.log("\n Fila Preferencial");    // \n no início gera uma nova linha
console.log("-".repeat(40));
const filaPref = clientes.filter(cliente => cliente.idade >= 60);
filaPref.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`)
})
console.log("\nFila Normal");
console.log("-".repeat(40));
const filaNormal = clientes.filter(cliente => cliente.idade < 60);
filaNormal.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
})