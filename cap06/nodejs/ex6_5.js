const prompt = require("prompt-sync")();
console.log("Informe os alunos. Após, digite 'Fim' no nome para sair");
const alunos = [];    // declara o vetor
do {
    const nome = prompt("Nome: ");    // lê o nome
    if (nome == "Fim") {              // antes de ler a nota, verifica
        break;                        // sai da repetição
    }
    const nota = Number(prompt("Nota: "));    // lê a nota
    alunos.push({nome, nota});                // adiciona os dados ao vetor de objetos
    console.log("Ok! Aluno(a) cadastrado(a)...");
} while (true) ;
console.log("-".repeat(40));
const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0);    // obtém a nota
console.log(`Maior nota: ${maior}`);    // exibe a maior nota
if (maior >= 7) {                       // para verificar se tem destaques na turma
    const destaques = alunos.filter(aluno => aluno.nota == maior);    // filtro
    for (const destaque of destaques) {    // percorre os alunos em destaque
        console.log(`- ${destaque.nome}`); // mostra os nomes (precedidos por -)
    }
} else {    // senão, vai exibir a mensagem
    console.log("Não há alunos em destaque na turma")
}
