// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const numero = Number(frm.inNumero.value); // obtém os valores do form
    // const parImpar = numero % 2 == 0 ? resp.innerText = `${numero} é par` :  resp.innerText = `${numero} é ímpar`;
    
    if ((numero % 2) == 0) {
        resp.innerText = `${numero} é par`;
    } else {
        resp.innerText = `${numero} é ímpar`;
    }
    
});