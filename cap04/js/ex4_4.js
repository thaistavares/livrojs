// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    const horaBrasil = Number(frm.inHoraBrasil.value); // obtém os valores do form
    
    let horaFranca = horaBrasil + 5;

    if(horaFranca > 24) {
        horaFranca =  horaFranca - 24;
    }

    // apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`;

});