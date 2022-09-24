// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const candidatos = [];    // declara vetor global

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const nome = frm.inNome.value;          // obtém os dados do form
    const acerto = Number(frm.inAcerto.value);
    
    candidatos.push({nome, acerto});    // adiciona os dados ao vetor de objetos
    frm.reset();         // limpa os campos do form
    frm.inNome.focus();                // posiciona o cursor em inModelos 
    
    // dispara um evento de click em btListar (equivale a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("click"));

});

// cria um "ouvinte" de evento, acionado quando o botão Listar for clicado
frm.btListar.addEventListener("click", () => {    // "escuta" clique em btListar
    if (candidatos.length == 0) {                     // se o tamanho do vetor for igual a zero
        alert("Não há candidatos na lista");
        return;
    }

    let lista = "";    // para concatenar lista de candidatos
    for (const candidato of candidatos) {
        const {nome, acerto} = candidato;    // desestrutura o objeto
        lista += nome + " - " + acerto + " acertos\n";
    }
    
    resp.innerText = lista;    // exibe a lista

});

// cria um "ouvinte" de evento, acionado quando o botão Aprovados for clicado
frm.btAprovados.addEventListener("click", () => {    // "escuta" clique em btAprovados
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista")   
        return;                       
    }

    const valorAcerto = Number(prompt("Número de Acertos para Aprovação? "));
    if ((valorAcerto == 0) || (isNaN(valorAcerto))) {    // se não informou ou valor inválido
        return;                                // ... retorna
    }

    // cria um novo vetor com os objetos que atendem à condição de filtro
    const candidatosFilter = candidatos.filter(candidato => candidato.acerto >= valorAcerto);
    if (candidatosFilter.length == 0) {    // se tamanho do vetor filtrado for zero
        alert("Não há candidatos aprovados");
        return;
    }
    
    let lista = "";
    
    for (const candidato of candidatosFilter) {    // percorre cada elemento do array
        lista += `${candidato.nome} - ${candidato.acerto} acertos\n`;
    }

    resp.innerText = lista;

});