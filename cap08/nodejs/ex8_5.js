const prompt = require("prompt-sync")();

const vinhos = [];

function titulo(texto) {    // recebe, por parâmetro, o texto a ser exibido
    console.log();
    console.log(texto);
    console.log("=".repeat(40));
}

function incluir() {
    titulo("===< Inclusão de Vinhos >===");
    const marca = prompt("Marca...:");    // lê os dados do vinho
    const tipo = prompt("Tipo...:");              
    const preco = Number(prompt("Preço: R$"));    
    vinhos.push({marca, tipo, preco});    // insere um objeto no vetor
    console.log("Ok! Vinho cadastrado com sucesso");
}

function listar() {
    titulo("===< Lista de Vinhos Cadastrados >===");
    console.log("Marca...............Tipo...............Preço R$:");

    //percorre o vetor para exibir todos os vinhos
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` + 
        `${vinho.preco.toFixed(2).padStart(9)}`);
    }
}

function pesquisar() {
    titulo("===< Pesquisa por Tipo de Vinho >===");
    const pesq = prompt("Tipo: ");    // lê o tipo do vinho a pesquisar
    let contador = 0;    // contador para verificar se existe
    console.log("Marca...............Tipo...............Preço R$:");

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            
        }
    }
}

// Programa Principal
do {
    titulo("===< Cadastro de Vinhos >===");
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisa por Tipo");
    console.log("4. Média e Destaques");
    console.log("5. Finalizar");
    const opcao = Number(prompt("Opção: "));
    if (opcao == 1) {
        incluir();
    } else if (opcao == 2) {
        listar();
    } else if (opcao == 3) {
        pesquisar();
    } else if (opcao == 4) {
        calcularMedia();
    } else {
        break;
    }
} while (true);