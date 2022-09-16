// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const valor = Number(frm.inValor.value); // obtém os valores do form
    let troco;
    
    if (valor < 1.00) {
        resp1.innerText = `Valor Insuficiente`; 
    } else if ((valor >= 1.00) && (valor < 1.75)) {
        resp1.innerText = `Tempo: 30 min`;
        troco = valor % 1.00;
        if (troco != 0.00) {
            resp2.innerText = `Troco: R$${troco.toFixed(2)}`;
        }
    } else if ((valor >= 1.75) && (valor < 3.00)) {
        resp1.innerText = `Tempo: 60 min`;
        troco = valor % 1.75;
        if (troco != 0.00) {
        resp2.innerText = `Troco: R$${troco.toFixed(2)}`;
        }
    } else if (valor == 3.00) {
        resp1.innerText = `Tempo: 120 min`;
    }
    
});