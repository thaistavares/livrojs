// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    const numero = Number(frm.inNumero.value); // obtém os valores do form
    
    let raizQuadrada = Math.sqrt(numero);
    
    if(Number.isInteger(raizQuadrada)) {
    // if((raizQuadrada % 1) == 0) {
        // apresenta a resposta (altera o conteúdo do elemento h3 da página)
        resp.innerText = `Raiz: ${raizQuadrada}`;
    } else {
        // apresenta a resposta (altera o conteúdo do elemento h3 da página)
        resp.innerText = `Não há raiz exata para ${numero}.`;
    }
    
});