// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value; // obtém o título digitado no form
    const preco = Number(frm.inPreco.value); // obtém o duração digitado no form
    
    const valor = Math.floor(preco) * 2;         // calcula o valor a pagar

    resp1.innerText = `Promoção de ${medicamento}`;   // exibe a resposta do programa
    resp2.innerText = `Leve 2 por apenas R$${valor.toFixed(2)}`;

    e.preventDefault();                // evita envio do form
});