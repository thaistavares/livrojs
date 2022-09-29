// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const frase = frm.inFrase.value.toUpperCase();   // obtém a frase informada pelo usuário
    let inverso = "";

    for (let i = (frase.length - 1); i >= 0; i--) {
        inverso += `${frase.charAt(i)}`
    }

    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == inverso.charAt(i)) {
            resp.innerText = `${frase} é um Palíndromo`;    
        } else {
            resp.innerText = `${frase} não é um Palíndromo`;    
        } 
    }
    
});
