// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "";   // string com a resposta a ser exibida
let numContas = 0;   // inicializa contador...
let valTotal = 0;    // e acumulador (variáveis globais)

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const descricao = frm.inDescricao.value; // obtém os valores do form
    const valor = Number(frm.inValor.value);
    
    numContas++;     // adiciona valores ao contador e acumulador
    valTotal = valTotal + valor;    // ou: valTotal += valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
    resp1.innerText = `${resposta}--------------------------------`;
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`;
    
    frm.inDescricao.value = "";     // limpa campos do form
    frm.inValor.value = "";
    frm.inDescricao.focus()         // posiciona no campo inDescricao do form
});