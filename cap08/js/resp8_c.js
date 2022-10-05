// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

//const itens = [];    // vetor global para armazenar os itens do pedido

frm.rbSim.addEventListener("click", () => {    // quando radio button é clicado
    frm.inConvenio.className = "exibe";    // exibe select dos convênios - está no estilos.css
});

frm.rbNao.addEventListener("click", () => {    // quando radio button é clicado
    frm.inConvenio.className = "oculta";    // oculta select dos convênios - está no estilos.css
});

/*frm.inDetalhes.addEventListener("focus",() => {    // quando o campo recebe o foco
    if (frm.rbPizza.checked) {    // se radiobutton rbPizza estiver marcado
        const pizza = frm.inPizza.value;    // obtém value do item selecionado
        // uso do operador ternário para indicar o número de sabores
        const num = pizza == "media"? 2 : pizza == "grande"? 3 : 4;
        // atributo placeholder exibe uma dica de preenchimento do campo
        frm.inDetalhes.placeholder = `Até ${num} sabores`;
    }
});

frm.inDetalhes.addEventListener("blur", () => {    // quando o campo perde o foco
    frm.inDetalhes.placeholder = "";    // limpa a dica de preenchimento
})*/

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form

    let produto;

    if (frm.rbSim.checked) {
        const num = frm.inConvenio.selectedIndex;    // obtém o nº. do item selecionado
        produto = frm.inConvenio.options[num].text;  // texto do item selecionado
    }

    //const valor = Number(frm.inValor.value);        // conteúdo do inValor
    //itens.push(produto + " (" + detalhes + ")");    // adiciona ao vetor
    //resp.innerText = itens.join("\n");              // exibe os itens do pedido

    frm.reset();    // limpa o form
    frm.rbSim.dispatchEvent(new Event("click"));  // dispara click em rbPizza

});

/*// função recebe o ano do veículo como parâmetro
const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear();    // obtém o ano atual
    let classif
    if (ano == anoAtual) {    // condições para definir classificação do veículo
        classif = "Novo";
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classif = "Seminovo";
    } else {
        classif = "Usado";
    }

    return classif;    // retorna a classificação

}

// função recebe valor e status do veículo como parâmetro
const calcularEntrada = (valor, status) =>
    status == "Novo" ? valor * 0.5 : valor * 0.3;*/