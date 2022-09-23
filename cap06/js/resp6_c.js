// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = [];    // declara vetor global

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const nome = frm.inNome.value;          // obtém os dados do form
    const idade = Number(frm.inIdade.value);
    
    criancas.push({nome, idade});    // adiciona os dados ao vetor de objetos
    frm.reset();         // limpa os campos do form
    frm.inNome.focus();                // posiciona o cursor em inModelos 
    
    // dispara um evento de click em btListar (equivale a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("click"));

});

// cria um "ouvinte" de evento, acionado quando o botão Listar for clicado
frm.btListar.addEventListener("click", () => {    // "escuta" clique em btListar
    if (criancas.length == 0) {                     // se o tamanho do vetor for igual a zero
        alert("Não há crianças na lista");
        return;
    }

    let lista = "";    // para concatenar lista de crianças
    for (const crianca of criancas) {
        const {nome, idade} = crianca;    // desestrutura o objeto
        lista += nome + " - " + idade + " anos\n";
    }
    
    resp.innerText = lista;    // exibe a lista

});

// cria um "ouvinte" de evento, acionado quando o botão Resumir for clicado
frm.btResumir.addEventListener("click", () => {    // "escuta" clique em btResumir
    if (criancas.length == 0) {
        alert("Não há crianças na lista")   
        return;                       
    }

    const copia = [...criancas];    // cria a cópia do vetor criança
    copia.sort((a, b) => a.idade - b.idade);    // ordena pela idade
    let resumo = "";    // para concatenar a saída
    let aux = copia[0].idade;    // menor idade do vetor ordenado
    let nomes = [];    // para inserir nomes de cada idade
    for (const crianca of copia) {
        const {nome, idade} = crianca;
        if (idade == aux) {    // se é da mesma idade auxiliar...
            nomes.push(nome);  // adiciona ao vetor nomes
        } else {    // senão, monta o resumo para cada idade
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = idade;    // obtém a nova idade na ordem
            nomes = [];     // limpa o vetor dos nomes
            nomes.push(nome);    // adiciona o primeiro da nova idade
        }
    }
    // adiciona a última criança
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    resp.innerText = resumo;    // exibe a resposta
});