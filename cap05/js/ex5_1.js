// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const numero = Number(frm.inNumero.value); // obtém os valores do form
    
    let resposta = "";     // variável do tipo String, para concatenar a resposta
    // cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"; 
        // resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`;
    }
    // o conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta;    
});