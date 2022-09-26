// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("span");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const fruta = frm.inFruta.value.toUpperCase();    // conteúdo do campo em maiúscula
    let resposta = "";    // string que irá conter a resposta

    for (const letra of fruta) {           // percorre todos os caracteres da fruta
        if (letra == fruta.charAt(0)) {    // se letra igual a letra inicial da string...
            resposta += fruta.charAt(0);   // adiciona a letra inicial
        } else {                           // senão, ...
            resposta += "_";
        }
    }

    resp.innerText = resposta;                       // exibe a resposta
    frm.inFruta.value = "*".repeat(fruta.length);    // preenche com "*", conforme o tamanho

});