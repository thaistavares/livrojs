// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const permitida = Number(frm.inPermitida.value); // obtém os valores do form
    const condutor = Number(frm.inCondutor.value); // obtém os valores do form

    if (condutor <= permitida) {
        resp.innerText = `Situação: Sem Multa`;
    } else if (((condutor - permitida) <= (permitida * 0.20)) && (condutor > permitida)) {
        resp.innerText = `Situação: Multa Leve`;
    } else if (((condutor - permitida) > (permitida * 0.20))) {
        resp.innerText = `Situação: Multa Grave`;
    }
    
});