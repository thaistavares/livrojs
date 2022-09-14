// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value; // obtém o título digitado no form
    const duracao = Number(frm.inDuracao.value); // obtém o duração digitado no form
    
    const horas = Math.floor(duracao / 60); // arredonda para baixo o resultado
    const minutos = duracao % 60            // obtém o resto da divisão

    resp1.innerText = titulo;   // exibe a resposta do programa
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
    
    e.preventDefault();                // evita envio do form
});
