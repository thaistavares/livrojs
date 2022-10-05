// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.rbSim.addEventListener("click", () => {    // quando radio button é clicado
    frm.inConvenio.className = "exibe";    // exibe select dos convênios - está no estilos.css
});

frm.rbNao.addEventListener("click", () => {    // quando radio button é clicado
    frm.inConvenio.className = "oculta";    // oculta select dos convênios - está no estilos.css
});

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form

    const valor = Number(frm.inValor.value);        // conteúdo do inValor
    const desconto = calcularDesconto(valor);

    resp1.innerText = `Desconto: R$${desconto.toFixed(2)}`;
    resp2.innerText = `A Pagar: R$${(valor - desconto).toFixed(2)}`;

});

// função recebe o valor da vacina como parâmetro
const calcularDesconto = (valor) => {
    
    let desconto;

    if (frm.rbSim.checked) {    // se radiobutton rbSim estiver marcado
        const convenio = frm.inConvenio.value;    // obtém value do item selecionado
        if (convenio == "amigosAnimais") {    
            desconto = valor * 0.2;
        } else if (convenio == "saudeAnimal") {
            desconto = valor * 0.5;
        }      
    } else {
        desconto = valor * 0.1;
    }

    return desconto;    // retorna o desconto

}