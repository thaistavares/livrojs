// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const numero = Number(frm.inNumero.value);   // obtém o número informado
    let estrelas = "";    // variável que irá concatenas as estrelas/traços

    for (let i = 1; i <= numero; i++) {    // cria laço de repetição de 1 até numero
        if (i % 2 == 1) {
            estrelas = estrelas + "*";     // na posição ímpar do i: *
        } else {
            estrelas = estrelas + "-";     // na posição par do i: -
        }
    }

    resp. innerText = estrelas;    // exibe as estrelas
    
});