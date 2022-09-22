// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const clubes = [];    // declara vetor global

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const nome = frm.inClube.value;          // obtém os dados do form
    
    clubes.push({nome});    // adiciona os dados ao vetor de objetos
    frm.reset();            // limpa os campos do form
    frm.inClube.focus();    // posiciona o cursor em inClube
    
    // dispara um evento de click em btListar (equivale a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("click"));

});

// cria um "ouvinte" de evento, acionado quando o botão Listar for clicado
frm.btListar.addEventListener("click", () => {    // "escuta" clique em btListar
    if (clubes.length == 0) {                     // se o tamanho do vetor for igual a zero
        alert("Não há clubes na lista");
        return;
    }

    let lista = "";    // para concatenar lista de crianças
    for (const clube of clubes) {
        const {nome} = clube;    // desestrutura o objeto
        lista += nome + "\n";
    }
    
    resp.innerText = lista;    // exibe a lista

}); 

// cria um "ouvinte" de evento, acionado quando o botão Montar for clicado
frm.btMontar.addEventListener("click", () => {    // "escuta" clique em btMontar
    if (clubes.length == 0) {
        alert("Não há clubes na lista")   
        return;                       
    }

    if (clubes.length % 2 != 0) {
        alert("A quantidade de clubes precisa ser par")   
    }
    
});