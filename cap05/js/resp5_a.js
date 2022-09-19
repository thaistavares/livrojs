// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const fruta = frm.inFruta.value;   // obtém a fruta informada
    const numero = Number(frm.inNumero.value);   // obtém o número informado
    let frutaEstrela = "";    // variável que irá concatenar a quantidade de fruta e estrela

    for (let i = 1; i <= numero; i++) {    // cria laço de repetição de 1 até numero
        
        if (i != numero) {
            frutaEstrela = frutaEstrela + fruta + "*";
        } else {
            frutaEstrela = frutaEstrela + fruta;
        }
        

    }

    resp.innerText = frutaEstrela;    // exibe as estrelas
    
});