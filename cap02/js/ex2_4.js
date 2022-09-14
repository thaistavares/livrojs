// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value); // obtém o título digitado no form
    const consumo = Number(frm.inConsumo.value); // obtém o duração digitado no form
    
    const valor = (consumo / 1000) * quilo;         // calcula o valor a pagar

    resp1.innerText = `Valor a Pagar: R$${valor.toFixed(2)}`;   // exibe a resposta do programa
    
    e.preventDefault();                // evita envio do form
});