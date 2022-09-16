// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const numero = Number(frm.inNumero.value); // obtém os valores do form
    
    let resposta = `Entre ${numero} e 1:`;     // variável do tipo String, para concatenar a resposta
    
    for (let i = numero; i > 1; i--) {
        // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        resposta = resposta + " " + i + ", "; 
        // resposta = `${resposta} ${i}, `;
    }
    // o conteúdo da tag h3 é alterado para exibir os números decrescentes
    resp.innerText = resposta + "1.";    
});