// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

let lista = ""; 

// cria um "ouvinte" para o evento click no btCriptografar que está no form
frm.btCriptografar.addEventListener("click", () => {
    
    const mensagem = frm.inMensagem.value;   // obtém a mensagem a ser criptografada   
    
    for (let i = 1; i <= mensagem.length; i++) {
        if (i % 2 == 0) {
            lista += `${mensagem.charAt(i-1)}`;
        } 
    }

    for (let i = 1; i <= mensagem.length; i++) {
        if (i % 2 != 0) {
            lista += `${mensagem.charAt(i-1)}`;
        } 
    }

    resp.innerText = `${lista}`;
    
});

// cria um "ouvinte" para o evento click no btDecriptografar que está no form
frm.btDecriptografar.addEventListener("click", () => {

    let lista2 = "";
    let lista3 = "";
    let mensagem2 = "";

    for (let i = ((lista.length / 2)); i < lista.length; i++) {
        lista2 += `${lista.charAt(i)}`;
    }

    for (let i = 1; i <= (lista.length / 2); i++) {
        lista3 += `${lista.charAt(i-1)}`;
    }

    for (let i = 0; i < (lista.length / 2); i++) {
        mensagem2 += `${lista2.charAt(i)}${lista3.charAt(i)}`;
    }

    resp.innerText = `${mensagem2}`;

});
