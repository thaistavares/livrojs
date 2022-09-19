// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    let chinchilas = Number(frm.inChinchilas.value);   // obtém a fruta informada
    const anos = Number(frm.inAnos.value);   // obtém o número informado
    let quantidade = "";    // variável que irá concatenar a quantidade

    for (let i = 1; i <= anos; i++) {    // cria laço de repetição de 1 até anos
        
        quantidade = `${quantidade}${i}º Ano: ${chinchilas} Chinchilas \n`; 
        
        chinchilas = chinchilas * 3;

    }
    
    resp.innerText = quantidade;
    
});