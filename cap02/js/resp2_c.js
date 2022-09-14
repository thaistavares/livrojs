// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value; // obtém o título digitado no form
    const preco = Number(frm.inPreco.value); // obtém o duração digitado no form
    
    const precoTotal = preco * 3;
    const desconto = preco * 0.50;
    const valorPagar = precoTotal - desconto  // calcula o valor a pagar

    resp1.innerText = `${produto} - Promoção: Leve 3 por: R$${valorPagar.toFixed(2)}`;   // exibe a resposta do programa
    resp2.innerText = `O 3° produto custa apenas: R$${desconto.toFixed(2)}`;

    e.preventDefault();                // evita envio do form
});